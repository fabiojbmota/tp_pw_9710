import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/main";

// Views
import Home from "./views/global/home";
//import Login from "./views/global/login";
//import NotFound from "./views/global/404";

// Views - Dashboard
import Dashboard from "./views/global/dashboard";
// Views - Dashboard - Blog
//import Blog from "./views/blog";
// Views - Dashboard - Blog - Posts
//import ListPosts from "./views/blog/posts/list";
//import AddPost from "./views/blog/posts/add";
// Views - Dashboard - Blog - Categories Posts
//import ListPostCats from "./views/blog/categories/list";
// Views - Dashboard - Administação
//import Admin from "./views/admin";
// Views - Dashboard - Administação - Users
//import ListUsers from "./views/admin/users/list";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route element={<MainLayout />}>
          <Route index path="dashboard" element={<Dashboard />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
