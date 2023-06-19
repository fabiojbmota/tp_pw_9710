// ** React Imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ** Configs
import { getRooms } from "../../services/rooms";

// ** Reactstrap Imports
import { Table } from "reactstrap";
import { Edit } from "react-feather";

const ListRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const rooms = await getRooms();
    setRooms(rooms.data);
  }

  function renderRoom() {
    return rooms.map((room, i) => {
      return (
        <tr key={i}>
          <td>{room.id}</td>
          <td>{room.name}</td>
          <td>{room.bookings}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Nome</td>
            <td>Contagem de Bookings</td>
          </tr>
        </thead>
        <tbody>{renderRoom()}</tbody>
      </Table>
    </div>
  );
};

export default ListRooms;
