import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <body class="d-flex h-100 text-center text-white bg-dark">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main class="px-3 mt-auto">
          <h1 className="mb-5">OOPS</h1>

          <p class="lead">Error 404 - THE PAGE CAN'T BE FOUND</p>

          <br></br>
          <p class="lead">
            <Link
              to="/dashboard"
              class="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              <font color="black"> Go Home </font>
            </Link>
          </p>
        </main>

        <footer class="mt-auto text-white-50"></footer>
      </div>
    </body>
  );
};

export default NotFound;
