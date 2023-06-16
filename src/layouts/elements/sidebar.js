// ** React Imports
import { Link, NavLink } from "react-router-dom";

// ** Reactstrap Imports
import { Nav, NavItem } from "reactstrap";
import { Home, Users, File, FileText, PlusCircle } from "react-feather";

const Sidebar = () => {
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div
        className="offcanvas-lg offcanvas-end bg-body-tertiary"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Company name
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2 active">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2">
                Orders
              </Link>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>Saved reports</span>
            <Link className="nav-link d-flex align-items-center gap-2">
              Orders
            </Link>
          </h6>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
          </ul>

          <hr className="my-3" />

          <ul className="nav flex-column mb-auto">
            <li className="nav-item"></li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
