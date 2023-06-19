//import { ReactComponent as Add } from "../../assets/svg/add.svg";
// ** React Imports
import { Link, NavLink } from "react-router-dom";

// ** Reactstrap Imports
import { Nav, NavItem } from "reactstrap";
import { Home,  } from "react-feather";

const Sidebar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <Nav className="flex-column">
          <NavItem>
            <NavLink to="dashboard" className="nav-link">
              <Home className="feather" />
              Dashboard
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="flex-column">
          <NavItem>
            <NavLink to="bookings" className="nav-link">
              <Home className="feather" />
              Reservas
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="flex-column">
          <NavItem>
            <NavLink to="rooms" className="nav-link">
              <Home className="feather" />
              Salas
            </NavLink>
          </NavItem>
        </Nav>       
      </div>
    </nav>
  );
};

export default Sidebar;
