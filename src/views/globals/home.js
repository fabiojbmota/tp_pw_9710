import { Link } from "react-router-dom";

const Home = () => {
  return (
    <body class="d-flex h-100 text-center text-white bg-dark">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main class="px-3 mt-auto">
          <h1 className="mb-5">GesClock</h1>

          <p class="lead">
            Plataforma de marcação de Ponto<br></br>
            Gestão de acessos a áreas e salas e reserva de espaços
          </p>
          <br></br>
          <p class="lead">
            <Link
              to="/login"
              class="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              <font color="black"> Login </font>
            </Link>
          </p>
        </main>

        <footer class="mt-auto text-white-50">
          <p>
            Front-End desenvolvido para a unidade curricular Programação Web -
            Fábio Mota #9710 IPCA 2022/2023
          </p>
        </footer>
      </div>
    </body>
  );
};

export default Home;
