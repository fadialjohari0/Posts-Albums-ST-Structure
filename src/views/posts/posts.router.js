import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Posts = lazy(() => import("./index"));
const Comments = lazy(() => import("../comments/comments"));

const Router = () => (
  <Routes>
    <Route path="/" exact={true} element={<Posts />} />
    <Route path="/:postId" element={<Comments />} />
  </Routes>
);

export default Router;
