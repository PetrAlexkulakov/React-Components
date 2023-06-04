export type FormValues = {
  body?: string;
  title?: string;
  status?: string;
  accept?: boolean;
  switch?: string;
  image?: string;
};

export type Post = FormValues & {
  key?: string;
};
