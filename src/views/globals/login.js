// React Imports
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Context Import
import useAuthContext from "../../context/auth";

// Assets Imports
import logo from "./../../assets/img/logo.png";

const Login = () => {
  // Hooks
  const { onLogin } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  // Sates
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formError, setFormError] = useState(null);

  // Login Function
  const login = async (e) => {
    e.preventDefault();

    try {
      const data = {
        username: formEmail,
        password: formPassword,
      };

      await onLogin(data);
      const origin = location.state?.from?.pathname || "../dashboard";
      navigate(origin);
    } catch (error) {
      setFormError(error.response.data.message);
    }
  };

  return (
    <div class="text-center h-100 ">
      <main class="form-signin h-100">
        <form class="h-100" onSubmit={login}>
          <img class="logo" img src={logo} alt="Logo" />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setFormEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setFormPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">{formError}</div>
          <button class="w-40 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
