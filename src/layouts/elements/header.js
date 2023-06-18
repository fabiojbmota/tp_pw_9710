// React Imports
import { NavLink, useNavigate } from "react-router-dom";

// Context Imports
import useAuthContext from "../../context/auth";

const Header = () => {
  // Hooks
  const { onLogout } = useAuthContext();
  const navigate = useNavigate();

  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <NavLink
        className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
        to={"../dashboard"}
      >
        GesClock
      </NavLink>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <button
            className="nav-link px-3"
            type="button"
            onClick={() => {
              onLogout();
              navigate("..");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
