// ** React Imports
import React, { useEffect, useState } from "react";

// ** Third-party Imports
import { Button, Table } from "reactstrap";
import { ArrowDown, ArrowUp } from "react-feather";

// ** Services Imports
import { getUsers } from "../../services/users";

const Users = () => {
  // States
  const [users, setUsers] = useState([]);

  // useEffect
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fecth Users
  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  // Render Users
  const renderUsers = () =>
    users.map((user, i) => (
      <tr key={i}>
        <td>{user.id}</td>
        <td>{user.role.name}</td>
        <td>{user.name}</td>
        <td>{user.schedule}</td>
      </tr>
    ));

  // Order Users
  const order = async (order) => {
    const { data } = await getUsers("id", order);
    setUsers(data);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center py-2 mb-3">
        <div className="ms-auto">
          <Button color="pw" onClick={() => order("asc")}>
            <ArrowUp color="black" size={16} />
          </Button>
          <Button color="pw" onClick={() => order("desc")}>
            <ArrowDown color="black" size={16} />
          </Button>
        </div>
      </div>

      <Table responsive striped size="sm">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Função</th>
            <th scope="col">Nome</th>
            <th scope="col">Horário</th>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </Table>
    </>
  );
};

export default Users;
