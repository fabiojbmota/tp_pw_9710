import Router from "./Router";
import { AuthContextProvider } from "./context/auth";

const App = () => (
  <AuthContextProvider>
    <Router />
  </AuthContextProvider>
);

export default App;
