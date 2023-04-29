import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const rickApi = createApi({
  reducerPath: 'rickAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
    fetchFn: (url, options) => {
      return fetch(url, options);
    },
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query({
      query: (value) => ({
        url: `/character/?name=${value}`,
      }),
    }),
    fetchOnePost: build.query({
      query: (id) => ({
        url: `character/${id}`,
      }),
    }),
  }),
});
