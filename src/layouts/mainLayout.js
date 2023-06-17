import React from "react";
import { Container, Row } from "reactstrap";

// Components
import Header from "./elements/header";
import Sidebar from "./elements/sidebar";
import Dashboard from "../views/globals/dashboard";

const MainLayout = ({ onLogout }) => {
  return (
    <div className="page-wrapper">
      <Header onLogout={onLogout} />
      <Container fluid>
        <Row>
          <Sidebar />
          <Dashboard />
        </Row>
      </Container>
    </div>
  );
};

export default MainLayout;
