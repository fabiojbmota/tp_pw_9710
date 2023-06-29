// ** React Imports
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// ** Third-party Imports
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

// ** Context Import
import useAuthContext from "../../context/auth";

// ** Assets Imports
import logo from "../../assets/img/logo.png";

const Login = () => {
  // Hooks
  const { onLogin } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  // Sates
  const [formUsername, setFormUsername] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formError, setFormError] = useState(null);

  // Login function
  const login = async (e) => {
    e.preventDefault();

    try {
      // Body data
      const data = {
        username: formUsername,
        password: formPassword,
      };

      // Get login function from context
      await onLogin(data);

      // Handle navigation
      const origin = location.state?.from?.pathname || "/dashboard";
      navigate(origin);
    } catch (error) {
      setFormError(error.response.data.message);
    }
  };

  return (
    <div className="form-signin-container text-center">
      <main className="form-signin">
        <Form onSubmit={login}>
          <img className="mb-4 img-fluid" src={logo} alt="logo" />
          <h1 className="h3 mb-3 fw-normal">Faça Login</h1>

          <FormGroup floating id="form-first">
            <Input
              id="formUsername"
              placeholder="Username"
              onChange={(e) => setFormUsername(e.target.value)}
            />
            <Label for="formUsername">Username</Label>
          </FormGroup>

          <FormGroup floating>
            <Input
              type="password"
              id="formPassword"
              placeholder="Password"
              onChange={(e) => setFormPassword(e.target.value)}
            />
            <Label for="formPassword">Password</Label>
          </FormGroup>

          {formError && (
            <p className="my-3">
              <small>{formError}</small>
            </p>
          )}

          <Button color="primary" size="lg" block type="submit">
            Login
          </Button>
        </Form>
      </main>
    </div>
  );
};

export default Login;
