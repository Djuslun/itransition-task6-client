import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const canvasApiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
    prepareHeaders(headers) {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  keepUnusedDataFor: 0,
  tagTypes: ['Canvas'],
  endpoints: (builder) => ({
    createCanvas: builder.mutation({
      query: () => ({
        url: `create`,
        method: 'POST',
      }),
      providesTags: ['Canvas'],
    }),
    updateCanvas: builder.mutation({
      query: ({ id, shapes }) => ({
        url: `${id}`,
        method: 'PUT',
        body: { shapes }
      }),
      providesTags: ['Canvas'],
    }),
    getCanvasById: builder.query({
      query: (id) => ({
        url: `${id}`,
        method: 'GET',
      }),
      invalidatesTags: [],
    }),
    getChangedCanvas: builder.query({
      query: (id) => ({
        url: `changeCanvas?timestamp=${new Date().getTime()}`,
        method: 'GET',
      }),
      forceRefetch() {
        return true
      },
      invalidatesTags: ['Canvas'],
    }),
    getAllCanvases: builder.query({
      query: () => ({
        url: ``,
        method: 'GET',
      }),
      invalidatesTags: ['Canvas'],
    })
  }),
});

export const {
  useCreateCanvasMutation,
  useGetAllCanvasesQuery,
  useGetCanvasByIdQuery,
  useUpdateCanvasMutation,
  useLazyGetChangedCanvasQuery,
} = canvasApiSlice;

export default canvasApiSlice;
