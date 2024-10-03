import { configureStore } from "@reduxjs/toolkit";
import api from "./api";

// This is ALWAYS the same boilerplate to connect
// the API slice reducer and middleware to the store
// Nothing has to change, not even the variable names.
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;