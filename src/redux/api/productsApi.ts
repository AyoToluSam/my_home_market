import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63f78f6ee8a73b486afaedef.mockapi.io/",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      providesTags: ["products"],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ["products"],
    }),
    sellProduct: builder.mutation({
      query: (data) => ({ url: "products", method: "POST", body: data }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useSellProductMutation,
} = productsApi;
