import React from "react"
import Countries from "./components/Countries"
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./reduxStore/store";
import ProtectedRoute from "./auth/ProtectedRoute";
import CountryDetail from "./components/CountryDetail";
import Header from "./components/Header";



function App() {
  

  return (
    <Provider store={store}>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRoute component={Countries} />} />
        <Route path="/country/:name" element={<ProtectedRoute component={CountryDetail}/>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/register" element={<div>Register</div>} />
      </Routes> 
      </Router>
    </Provider>
  )
}

export default App;
