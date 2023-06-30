// ** React Imports
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// ** Third-party Imports
import { Button, Table } from "reactstrap";
import Select from "react-select";
import { ArrowDown, ArrowUp, Check, Edit3, Trash, X } from "react-feather";

// ** Services Imports
import { deleteBooking, getBookings } from "../../services/bookings";
import { getUsers } from "../../services/users";

const Bookings = () => {
  // Refs
  const bookingsRef = useRef([]);

  // States
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  // useEffect hook
  useEffect(() => {
    fetchBookings();
    fetchUsers();
  }, []);

  // Fetch bookings
  const fetchBookings = async () => {
    const { data } = await getBookings();
    setBookings(data);
    bookingsRef.current = data;
  };

  // Fecth Users
  const fetchUsers = async () => {
    const { data } = await getUsers();

    // Maps rooms to an array to be rendered by Select component
    const options = data.map((option) => ({
      value: option.id,
      label: option.name,
    }));

    setUsers(options);
  };

  // Delete booking
  const destroyBooking = async (id) => {
    await deleteBooking(id);
    await fetchBookings();
  };

  // Filter Bookings
  const filterBookings = (option) => {
    setUser(option);
    if (option) {
      let aux = [];
      bookingsRef.current.forEach((booking) => {
        if (option.value === booking.user.id) aux.push(booking);
      });
      setBookings(aux);
    } else {
      setBookings(bookingsRef.current);
    }
  };

  // Render bookings
  const renderBookings = () =>
    bookings.map((booking, i) => (
      <tr key={i}>
        <td>{booking.id}</td>
        <td>{booking.user.name}</td>
        <td>{booking.room.name}</td>
        <td>{booking.start}</td>
        <td>{booking.final}</td>
        <td>{booking.description}</td>
        <td>
          {booking.validated ? (
            <Check color="black" size={16} />
          ) : (
            <X color="black" size={16} />
          )}
        </td>
        <td>
          <Link className="btn" to={`./${booking.id}`}>
            <Edit3 color="black" size={16} />
          </Link>
          {!booking.validated && (
            <button className="btn" onClick={() => destroyBooking(booking.id)}>
              <Trash color="black" size={16} />
            </button>
          )}
        </td>
      </tr>
    ));

  // Order bookings
  const order = async (order) => {
    const { data } = await getBookings("id", order);
    setBookings(data);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center py-2 mb-3">
        <div className="d-inline-flex">
          <Link className="btn btn-primary" to="add">
            Adicionar Reserva
          </Link>
          <Select
            isClearable
            className="mx-2"
            onChange={(e) => filterBookings(e)}
            value={user}
            options={users}
          />
        </div>
        <div>
          <Button color="pw" onClick={() => order("asc")}>
            <ArrowUp color="black" size={16} />
          </Button>
          <Button color="pw" onClick={() => order("desc")}>
            <ArrowDown color="black" size={16} />
          </Button>
        </div>
      </div>

      <Table className="align-middle" responsive striped size="sm">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Utilizador</th>
            <th scope="col">Nome</th>
            <th scope="col">Inicio</th>
            <th scope="col">Fim</th>
            <th scope="col">Descrição</th>
            <th scope="col">Validação</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>{renderBookings()}</tbody>
      </Table>
      {bookings.length === 0 && <p>Não existem reservas</p>}
    </>
  );
};

export default Bookings;
