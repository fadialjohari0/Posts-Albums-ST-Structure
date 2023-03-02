import React from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import config from "./config";
import Layout from "./layouts";

import "./App.css";

axios.defaults.baseURL = config.apiBaseUrl;

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (
      err?.response?.status === 401 &&
      !window.location.href.includes("login")
    ) {
      window.location.href = `/login?returnUrl=${encodeURIComponent(
        window.location.href.replace(window.location.origin, "")
      )}`;
    } else throw err;
  }
);

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
