import ReactDOMServer from 'react-dom/server';
import type { Request, Response } from 'express';

import App from './src/App';
import Html from './src/Html';
import React from 'react';
import { Provider } from 'react-redux';
import { ModalProvider } from './src/contexts/modalContext';
import { store } from './src/redux/store';
import { StaticRouter } from 'react-router-dom/server';

export function render(req: Request, res: Response, bootstrap: string) {
  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={req.url}>
      <Html>
        <ModalProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ModalProvider>
      </Html>
    </StaticRouter>,
    {
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        pipe(res);
      },
      bootstrapModules: [bootstrap],
    }
  );
}
