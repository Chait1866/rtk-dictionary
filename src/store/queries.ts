import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Definition } from "../types/response";
import { transformFunction } from "../util/transformFunction";

export const dictionaryApi = createApi({
  reducerPath: "dictionaryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.dictionaryapi.dev/api/v2/entries/en_US/",
  }),
  endpoints: (builder) => ({
    getMeanings: builder.query<Definition[], string>({
      query: (word: string) => `${word}`,
      transformResponse: transformFunction,
    }),
  }),
});

export const { useGetMeaningsQuery } = dictionaryApi;
