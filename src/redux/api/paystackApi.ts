import { Bank } from "@/components/SellForm/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NEXT_PUBLIC_PAYSTACK_BASE_URL = process.env.NEXT_PUBLIC_PAYSTACK_BASE_URL;
const NEXT_PUBLIC_PAYSTACK_SECRET_KEY =
  process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY;

const baseQuery = fetchBaseQuery({
  baseUrl: NEXT_PUBLIC_PAYSTACK_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${NEXT_PUBLIC_PAYSTACK_SECRET_KEY}`,
  },
});

const paystackApi = createApi({
  reducerPath: "paystack",
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({
    paystack: builder.mutation({
      query: (data) => ({
        url: "/transaction/initialize",
        method: "POST",
        body: data,
      }),
    }),
    validatePayment: builder.query({
      query: (reference) => ({
        url: `/transaction/verify/${reference}`,
        method: "GET",
      }),
    }),
    getBanks: builder.query({
      query: () => ({
        url: `/bank`,
        method: "GET",
      }),
      transformResponse: (res: { data: Bank[] }) => res.data,
    }),
    validateAccount: builder.mutation({
      query: (data) => ({
        url: `/bank/resolve?account_number=${data.account}&bank_code=${data.bankCode}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  usePaystackMutation,
  useValidatePaymentQuery,
  useValidateAccountMutation,
  useGetBanksQuery,
} = paystackApi;

export default paystackApi;
