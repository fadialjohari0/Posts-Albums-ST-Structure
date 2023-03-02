import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Posts = lazy(() => import("./index"));

const Router = () => (
  <Routes>
    <Route path="/" exact={true} element={<Posts />} />
  </Routes>
);

export default Router;
