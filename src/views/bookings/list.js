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

  const deleteBooking = async (id, validated) => {
    if (!validated) await deleteBooking(id);
    getData();
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
            <Link to="add">Editar</Link>
            <button >
              Apagar
            </button>
          </td>
        </tr>
      );
    });
//onClick={deleteBooking(booking.id, booking.validated)}
  return (
    <>
      <Link to="add">Adicionar</Link>
      <Table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Utilizador</td>
            <td>Nome</td>
            <td>Inicio</td>
            <td>Fim</td>
            <td>Descrição</td>
            <td>Validação</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>{renderBooking()}</tbody>
      </Table>
    </>
  );
};

export default ListBookings;
