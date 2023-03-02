import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const AlbumList = lazy(() => import("./index"));
const AlbumPhotos = lazy(() => import("../photos/"));

const Router = () => (
  <Routes>
    <Route path="/" element={<AlbumList />} />
    <Route path="/:albumId" element={<AlbumPhotos />} />
  </Routes>
);

export default Router;
