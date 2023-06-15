import logo from "../../assets/svg/logo-wh.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container-xl home-container p-3">
        <header className="mb-auto">
          <div>
            <img src={logo} width="80" alt="Logo" />
          </div>
        </header>

        <main className="px-3">
          <h1>Bem-vindo!</h1>
          <p className="lead">
            Esta plataforma permite a gestão e reservas de areas / salas
          </p>
          <p className="lead">
            
          </p>
        </main>

        <footer className="mt-auto text-white-50">
          <p>Fabio Mota</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
