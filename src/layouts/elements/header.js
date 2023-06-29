// ** React Imports
import React from "react";
import { useNavigate } from "react-router-dom";

// ** Third-party Imports
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from "reactstrap";
import { LogOut } from "react-feather";

// ** Context Imports
import useAuthContext from "../../context/auth";

const Header = () => {
  // Hooks
  const { user, onLogout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await onLogout();
    navigate(".");
  };

  return (
    <Navbar
      dark
      container={false}
      sticky="top"
      color="dark"
      tag="header"
      className="p-0 shadow"
    >
      <NavbarBrand className="col-md-3 col-lg-2 me-0 px-3" href="/dashboard">
        GesClock
      </NavbarBrand>
      <div className="ml-auto">
        <NavbarText>Olá, {user.name}</NavbarText>
        <Button color="pw" onClick={handleLogout}>
          <LogOut color="gray" />
        </Button>
        <NavbarToggler
          className="d-md-none mx-2"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
        />
      </div>
    </Navbar>
  );
};

export default Header;
