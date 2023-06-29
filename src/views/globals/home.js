// ** React Imports
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="my-auto px-3">
          <h1 className="mb-5">GesClock</h1>
          <p className="lead">Plataforma de marcação de Ponto</p>
          <p className="lead">
            Gestão de acessos a áreas e salas e reserva de espaços
          </p>
          <p className="lead">
            <Link
              to="/login"
              className="btn btn-lg btn-secondary fw-bold border-white bg-white mt-5"
            >
              Login
            </Link>
          </p>
        </main>

        <footer className="text-white-50">
          <p>
            Front-End desenvolvido para
            <span className="text-white"> Programação Web</span>, por
            <span className="text-white"> Fábio Mota #9710</span>,
            <span className="text-white"> João Morais #9710</span>,
            <span className="text-white"> Sérgio #9710</span>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
