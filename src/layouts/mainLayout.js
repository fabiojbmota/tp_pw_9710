// Recat Imports
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

// Third-Party Imports
import { Container, Row } from "reactstrap";

// Hooks Imports
import useAuthContext from "../context/auth";

// Elements Imports
import Header from "./elements/header";
import Sidebar from "./elements/sidebar";

const MainLayout = () => {
  const location = useLocation();
  const { user, checkAuth } = useAuthContext();

  (async () => await checkAuth())();

  if (!user)
    return <Navigate to="../login" replace state={{ from: location }} />;
  else
    return (
      <div className="page-wrapper">
        <Header />
        <Container fluid>
          <Row>
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Outlet />
            </main>
          </Row>
        </Container>
      </div>
    );
};

export default MainLayout;
