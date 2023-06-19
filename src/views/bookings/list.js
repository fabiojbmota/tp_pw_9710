// ** React Imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ** Configs
import { getBookings } from "../../services/bookings";

// ** Reactstrap Imports
import { Table } from "reactstrap";

const ListBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await getBookings();
    setBookings(data);
  };

  const renderBooking = () =>
    bookings.map((booking, i) => {
      return (
        <tr key={i}>
          <td>{booking.id}</td>
          <td>{booking.user.name}</td>
          <td>{booking.room.name}</td>
          <td>{booking.start}</td>
          <td>{booking.final}</td>
          <td>{booking.description}</td>
          <td>{booking.validated ? "false" : "true"}</td>
          <td>
            <Link to="/">Editar</Link>
            <Link to="/">Apagar</Link>
          </td>
        </tr>
      );
    });

  return (
    <>
      <Link to="/add.js">Adicionar</Link>
      <Table>
        <thead>
          <tr>
            <td>Id</td>
            <td>UserName</td>
            <td>RoomName</td>
            <td>Start</td>
            <td>Final</td>
            <td>Description</td>
            <td>Validated</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>{renderBooking()}</tbody>
      </Table>
    </>
  );
};

export default ListBookings;
