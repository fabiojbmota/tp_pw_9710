// ** React Imports
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  // ** Post States
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState([]);
  const [start, setStart] = useState(new Date());
  const [final, setFinal] = useState(new Date());
  const [description, setDescription] = useState("");

  useEffect(() => {
    getBookingRooms();
  }, []);

  const getBookingRooms = async () => {
    try {
      const rooms = await getRooms();
      const { data } = rooms;
      const options = data.map((i) => {
        return { value: i.id, label: i.name };
      });
      setRooms(options);
      setRoom(options[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const saveBooking = async (e) => {
    e.preventDefault();

    const bookingData = {
      room: room.value,
      start: start.toISOString(),
      final: final.toISOString(),
      description: description,
    };

    try {
      await bookings.createBooking(bookingData);
      navigate("../bookings");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("response");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log("request");
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("message");
        console.log("Error", error.message);
      }
      console.log("config");
      console.log(error.config);
    }
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
                    <Input
                      id="booking-room"
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                    ></Input>
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
                    <Link className="btn btn-outline-secondary" to={"/booking"}>
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
