import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // Estados
  const [bookings, setBookings] = useState([]);

  // Corrido no inicio
  useEffect(() => {
    const response = {
      data: [
        { id: 1, descricao: "teste" },
        { id: 2, descricao: "teste" },
      ],
    };
    // console.log(response.data);
    setBookings(response.data);
    return () => {};
  }, []);

  function renderPost() {
    return bookings.map((booking, i) => {
      return (
        <tr key={i}>
          <td>{booking.id}</td>
          <td>{booking.descricao}</td>
        </tr>
      );
    });
  }

  return (
    <div className="App">
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </a>
        </div>
      </nav>
      <header className="App-header">
        <table className="tabela-bonita">
          <thead>
            <tr>
              <td>Title</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>{renderPost()}</tbody>
        </table>
        <img src={logo} className="App-logo" alt="logo" />
        <p>olss</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
