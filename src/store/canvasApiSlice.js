import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const canvasApiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL + '/',
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
    deleteCanvas: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: 'DELETE',
      }),
      providesTags: ['Canvas'],
    }),
    updateCanvas: builder.mutation({
      query: ({ id, shapes, user }) => ({
        url: `${id}`,
        method: 'PUT',
        body: { shapes, user }
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
        cache: 'no-cache'
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
  useDeleteCanvasMutation,
} = canvasApiSlice;

export default canvasApiSlice;
