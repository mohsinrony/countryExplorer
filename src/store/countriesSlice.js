import fetchCountries from "../service/countries";
import { createSlice } from "@reduxjs/toolkit";

export const initializeCountries = () => {
  return async (dispatch) => {
    const countries = await fetchCountries().getAll();
    dispatch(getCountries(countries));
    setTimeout(() => {
      dispatch(isLoading(false)); // Simulate loading time
    }, 1000);
  };
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    isLoading: true,
  },
  reducers: {
    getCountries: (state, action) => {
      state.countries = action.payload;
      state.isLoading = false;
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getCountries, isLoading } = countriesSlice.actions; // Export actions
export default countriesSlice.reducer; // Export reducer
