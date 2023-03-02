import { lazy } from "react";

const Posts = lazy(() => import("../views/posts/posts.router"));
const Albums = lazy(() => import("../views/albums/albums.router"));

export const MainRouter = [
  {
    path: "/posts/*",
    name: "posts",
    component: Posts,
  },
  {
    path: "/albums/*",
    name: "albums",
    component: Albums,
  },
];
