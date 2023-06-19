// ** React Imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ** Configs
import { getBookingRooms } from "../../services/bookingRooms";

// ** Reactstrap Imports
import { Table } from "reactstrap";
import { Edit } from "react-feather";

const ListBookingRooms = () => {
  const [bookingRooms, setBookingRooms] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const bookingRooms = await getBookingRooms();
    setBookingRooms(bookingRooms.data);
  }

  function renderBooking() {
    return bookingRooms.map((bookingRoom, i) => {
      return (
        <tr key={i}>
          <td>{bookingRoom.id}</td>
          <td>{bookingRoom.name}</td>
          <td>{bookingRoom.bookings}</td>
          <td>
            <Link to={`/bookings/rooms/${bookingRoom.id}`}>
              <Edit className="feather" />
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <h2>Rooms</h2>
      <Table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Nome</td>
            <td>Contagem de Bookings</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>{renderBooking()}</tbody>
      </Table>
    </div>
  );
};

export default ListBookingRooms;
