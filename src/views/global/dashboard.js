import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser(id) {
      const fetchData = await axios.get(
        `https://pds.braintechcloud.com/users/${id}`,
        {
          auth: {
            username: "1blQ0D2KM2lPNAPB",
            password: "GKXzI650qhKSUNkQxzzxvrvXbXtDwKY9",
          },
        }
      );
      setUser(fetchData.data);
    }
    fetchUser(1);
  }, []);

  console.log(user);

  function renderArea() {
    return user.areas.map((area, i) => {
      return (
        <tr key={i}>
          <td>{area.id}</td>
          <td>{area.name}</td>
        </tr>
      );
    });
  }

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
      </div>

      <h2>Áreas Autorizadas</h2>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">nome</th>
            </tr>
          </thead>
          <tbody>{renderArea()}</tbody>
        </table>
      </div>
      <h2>Ultimos Clocks</h2>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">nome</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <h2>Próximas Reservas</h2>

      <div className="table-responsive small"></div>
    </main>
  );
};

export default Dashboard;
