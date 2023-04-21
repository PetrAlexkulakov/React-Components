import express, { Express, Request, Response } from 'express';
import fs from 'fs';

async function configProd(app: Express) {
  app.use(
    (await import('serve-static')).default('./dist/client', {
      index: false,
    })
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const render = (await import('./dist/server/entry-server.js')).render;

  const bootstrap =
    '/assets/' +
    fs
      .readdirSync('./dist/client/assets')
      .filter((fn: string) => fn.includes('main') && fn.endsWith('.js'))[0];
  app.use('*', (req, res) => render(req, res, bootstrap));
  return app;
}

async function configDev(app: Express) {
  const cwd = process.cwd();

  const vite = await (
    await import('vite')
  ).createServer({
    root: cwd,
    server: {
      middlewareMode: true,
      hmr: true,
    },
    appType: 'custom',
  });
  app.use(vite.middlewares);

  const renderer = async (req: Request, res: Response) => {
    try {
      const render = (await vite.ssrLoadModule('./entry-server.tsx')).render;
      render(req, res, `/src/main.tsx`);
    } catch (err) {
      const e = err as Error;
      vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  };
  app.use('*', renderer);
  return app;
}

const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT || (isProd ? 4173 : 5173);
const app = express();

const config = isProd ? configProd : configDev;

config(app)
  .then((app) => {
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`);
    });
  })
  .catch(console.error);
