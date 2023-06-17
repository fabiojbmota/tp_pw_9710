const Login = ({ onLogin }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <button type="button" onClick={onLogin}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
