import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const countriesAPI = "https://restcountries.com/v3.1/all";

const fetchCountries = createAsyncThunk("service/countries", async () => {
  const response = await axios.get(countriesAPI);
  return response.data;
});

export default fetchCountries;
