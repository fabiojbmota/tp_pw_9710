// ** React Imports
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  // Hooks
  const location = useLocation();

  // Handle navigation
  const origin = location.state?.from?.pathname || ".";
  console.log(location);

  return (
    <div className="homepage d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="my-auto px-3">
          <h1 className="mb-5">OOPS!!!</h1>
          <p className="lead">404 - A página não pode ser encontrada!</p>
          <p className="lead">
            <Link
              to={origin}
              className="btn btn-lg btn-secondary fw-bold border-white bg-white mt-5"
            >
              Voltar atrás!
            </Link>
          </p>
        </main>
      </div>
    </div>
  );
};

export default NotFound;
