// ** React Imports
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// ** Third-party Imports
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";

// ** Services Imports
import { getRooms } from "../../services/rooms";
import * as bookings from "../../services/bookings";

const Booking = () => {
  // Hooks
  const navigate = useNavigate();
  let { bookingId } = useParams();

  // States
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState(null);
  const [start, setStart] = useState(new Date());
  const [final, setFinal] = useState(new Date());
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(null);

  // useEffect hook
  useEffect(() => {
    // Fetch rooms
    fetchRooms();

    // Only executes if parameter is set
    if (bookingId) fetchBooking(bookingId, navigate);
  }, [bookingId, navigate]);

  // Get Rooms
  const fetchRooms = async () => {
    // Fetch all rooms
    const { data } = await getRooms();

    // Maps rooms to an array to be rendered by Select component
    const options = data.map((option) => ({
      value: option.id,
      label: option.name,
    }));

    // Set states
    setRooms(options);
    setRoom(options[0]);
  };

  // Get Booking
  const fetchBooking = async (id, redirect) => {
    try {
      // Fetch booking to edit
      const { data } = await bookings.getBooking(id);

      // Set states with data from booking
      setRoom({ value: data.room.id, label: data.room.name });
      setStart(new Date(data.start));
      setFinal(new Date(data.final));
      setDescription(data.description);
    } catch (error) {
      redirect("/404");
    }
  };

  // Save Booking from form
  const saveBooking = async (e) => {
    e.preventDefault();

    const bookingData = {
      room: room.value,
      start: start.toISOString(),
      final: final.toISOString(),
      description: description,
    };

    try {
      if (bookingId) {
        await bookings.updateBooking(bookingId, bookingData);
        setResult({ type: "Resultado", message: "Editado com Sucesso!!!" });
      } else {
        await bookings.createBooking(bookingData);
        navigate("/bookings");
      }
    } catch (error) {
      setResult({ type: "Erro", message: error.response.data.message });
    }
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">
          {bookingId ? "Editar Reserva" : "Adicionar Reserva"}
        </CardTitle>
        <Form className="mt-4" onSubmit={saveBooking}>
          <Row>
            <Col md="4" className="mb-2">
              <Label className="form-label" for="booking-room">
                Sala da Reserva
              </Label>
              <Select
                id="booking-room"
                value={room}
                onChange={setRoom}
                options={rooms}
              />
            </Col>
            <Col md="4" className="mb-2">
              <Label className="form-label" for="booking-start">
                Data de Inicio
              </Label>
              <Flatpickr
                id="booking-start"
                className="form-control"
                data-enable-time
                value={start}
                onChange={([date]) => setStart(date)}
              />
            </Col>
            <Col md="4" className="mb-2">
              <Label className="form-label" for="booking-final">
                Data de Fim
              </Label>
              <Flatpickr
                id="booking-final"
                className="form-control"
                data-enable-time
                value={final}
                onChange={([date]) => setFinal(date)}
              />
            </Col>
            <Col md="12" className="mb-2">
              <Label className="form-label" for="booking-description">
                Descrição da Reserva
              </Label>
              <Input
                required
                id="booking-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Col>
            <Col className="mt-4">
              <Button color="primary" className="me-1" type="submit">
                {bookingId ? "Guardar" : "Adicionar"}
              </Button>
              <Link className="btn btn-outline-secondary" to="/bookings">
                Cancelar
              </Link>
            </Col>
          </Row>
        </Form>
        {result && (
          <div className="mt-3">
            <p style={{ margin: 0 }}>
              {result.type}: {result.message}
            </p>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default Booking;
