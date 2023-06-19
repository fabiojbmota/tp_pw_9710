// ** React Imports
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Third-Party Imports
import Select from "react-select";
import Flatpickr from "react-flatpickr";

// ** Configs
import { getRooms } from "../../services/rooms";
import * as bookings from "../../services/bookings";

// ** Reactstrap Imports
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";

const AddBooking = () => {
  const navigate = useNavigate();
  let { bookingId } = useParams();

  console.log(bookingId);

  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState([]);
  const [start, setStart] = useState(new Date());
  const [final, setFinal] = useState(new Date());
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchRooms();
    if (bookingId !== undefined) fetchBooking(bookingId);
  }, [bookingId]);

  const fetchBooking = async () => {
    const { data } = await bookings.getBookings();

    setRoom(data.room);
    //const startISO = new Date(start[0]).toISOString();
    const startISO = new Date(data.start);
    const finalISO = new Date(data.final);
    setStart(startISO);
    setFinal(finalISO);
    setDescription(data.description);
  };

  const fetchRooms = async () => {
    const rooms = await getRooms();
    const { data } = rooms;
    const options = data.map((i) => {
      return { value: i.id, label: i.name };
    });
    setRooms(options);
    setRoom(options[0]);
  };

  const saveBooking = async (e) => {
    e.preventDefault();

    const startISO = new Date(start[0]).toISOString();
    const finalISO = new Date(final[0]).toISOString();

    console.log(startISO);

    const bookingData = {
      room: room.value,
      start: startISO,
      final: finalISO,
      description: description,
    };

    try {
      if (bookingId !== undefined) {
        await bookings.updateBooking(bookingId, bookingData);
      } else {
        await bookings.createBooking(bookingData);
        navigate("../bookings");
      }
    } catch (error) {}
  };

  return (
    <div className="booking-edit-wrapper">
      <Row>
        <Col>
          <Card>
            <CardBody>
              <div className="d-flex">header avatar</div>
              <Form className="mt-2" onSubmit={saveBooking}>
                <Row>
                  <Col md="10" className="mb-2">
                    <Label className="form-label" for="booking-room">
                      Sala
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
                      Inicio
                    </Label>
                    <Flatpickr
                      id="booking-start"
                      className="form-control"
                      data-enable-time
                      value={start}
                      onChange={(start) => setStart(start)}
                    />
                  </Col>
                  <Col md="4" className="mb-2">
                    <Label className="form-label" for="booking-final">
                      Fim
                    </Label>
                    <Flatpickr
                      id="booking-final"
                      className="form-control"
                      data-enable-time
                      value={final}
                      onChange={(final) => setFinal(final)}
                    />
                  </Col>
                  <Col md="10" className="mb-2">
                    <Label className="form-label" for="booking-description">
                      Descrição
                    </Label>
                    <Input
                      id="booking-description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></Input>
                  </Col>
                  <Col className="mt-50">
                    <Button color="primary" className="me-1" type="submit">
                      Save Changes
                    </Button>
                    <Link className="btn btn-outline-secondary" to={"/bookings"}>
                      Cancel
                    </Link>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddBooking;
