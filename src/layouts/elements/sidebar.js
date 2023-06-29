// ** React Imports
import { NavLink } from "react-router-dom";

// ** Third-party Imports
import { Nav, NavItem } from "reactstrap";
import { Box, Calendar, Clock, File, Home, Users } from "react-feather";

const Sidebar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <Nav className="flex-column">
          <NavItem>
            <NavLink className="nav-link" to="/dashboard">
              <Home className="feather" />
              Dashboard
            </NavLink>
          </NavItem>
          <h6 className="sidebar-heading px-3 mt-4 mb-1 text-muted">Gestão</h6>
          <NavItem>
            <NavLink className="nav-link" to="/bookings">
              <Calendar className="feather" />
              Reservas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/rooms">
              <Box className="feather" />
              Salas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/areas">
              <File className="feather" />
              Áreas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/clocks">
              <Clock className="feather" />
              Pontos
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </nav>
  );
};

export default Sidebar;
