import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countriesSlice";

export default configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
// what have we done here?
// We have created a store using the configureStore function from Redux Toolkit.
// We have imported the countriesReducer from the countriesSlice file.
// We have passed the countriesReducer to the store configuration object.
// We have exported the store.
// The store is now ready to be used in our application.
