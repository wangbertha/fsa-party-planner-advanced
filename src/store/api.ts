import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT = "2408-Bertha-Wang";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/`;

// This creates an empty API slice that defines the URL of the API to connect to
// It will ALWAYS be this same boilerplate
// The only thing that changes is the value of the API_URL variable
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
  tagTypes: ["Party"],
});

export default api;