// ** React Imports
import React from "react";
import { Outlet } from "react-router-dom";

const Admin = ({ title }) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{title || "Sem Titulo"}</h1>
      </div>

      <Outlet />
    </>
  );
};

export default Admin;
