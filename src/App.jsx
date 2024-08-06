import React from "react"
import Countries from "./components/Countries"
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./reduxStore/store";


function App() {
  

  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/" element={<Countries />} />
      </Routes> 
      </Router>
    </Provider>
  )
}

export default App;
