import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const rickApi = createApi({
  reducerPath: 'rickAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (build) => ({
    fetchAllPosts: build.query({
      query: (value) => ({
        url: `/character/?name=${value}`,
      }),
    }),
  }),
});
