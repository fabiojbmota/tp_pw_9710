import { useState } from "react";
import useAuthContext from "../../context/auth";
import { useLocation, useNavigate } from "react-router-dom";

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
        username: "rdantas",
        password: "password",
      };

      await onLogin(data);
      const origin = location.state?.from?.pathname || "../dashboard";
      navigate(origin);
    } catch (error) {
      setFormError(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={login}>
        {formError}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
