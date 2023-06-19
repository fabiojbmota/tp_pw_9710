// ** React Imports
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Third-Party Imports
import Select from "react-select";
import Flatpickr from "react-flatpickr";

// ** Configs
import { getBookingRooms } from "../../services/bookingRooms";
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
  const [bookingRooms, setBookingRooms] = useState([]);
  const [room, setRoom] = useState([]);
  const [start, setStart] = useState(new Date());
  const [final, setFinal] = useState(new Date());
  const [description, setDescription] = useState("");

  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = async () => {
    try {
      const bookingRooms = await getRooms();
      const { data } = bookingRooms;
      const options = data.map((i) => {
        return { value: i.id, label: i.name };
      });
      setBookingRooms(options);
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
      } else if (error.request) {S
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
                    <Label className="form-label" for="booking-title">
                      Title
                    </Label>
                    <Input
                      id="booking-title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    ></Input>
                  </Col>
                  <Col md="2" className="mb-2">
                    <Label for="post-featured" className="form-check-label">
                      Featured
                    </Label>
                    <div className="form-switch">
                      <Input
                        type="switch"
                        id="booking-featured"
                        value={featured}
                        onChange={(e) => setFeatured(e.target.checked)}
                      />
                    </div>
                  </Col>
                  <Col md="4" className="mb-2">
                    <Label className="form-label" for="booking-date">
                      Date
                    </Label>
                    <Flatpickr
                      id="booking-date"
                      className="form-control"
                      data-enable-time
                      value={date}
                      onChange={(date) => setDate(date)}
                    />
                  </Col>
                  <Col md="4" className="mb-2">
                    <Label className="form-label" for="booking-room">
                      Room
                    </Label>
                    <Select
                      id="booking-room"
                      value={room}
                      onChange={setRoom}
                      options={bookingRooms}
                    />
                  </Col>
                  <Col md="4" className="mb-2">
                    <Label className="form-label" for="booking-status">
                      Status
                    </Label>
                    <Select
                      id="booking-status"
                      value={status}
                      onChange={setStatus}
                      options={statusOpts}
                    />
                  </Col>
                  <Col sm="12" className="mb-2">
                    <Label className="form-label" for="booking-excerpt">
                      Excerpt
                    </Label>
                    <Input
                      type="textarea"
                      id="booking-excerpt"
                      rows="3"
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                    />
                  </Col>
                  <Col sm="12" className="mb-2">
                    <Label className="form-label" for="booking-content">
                      Content
                    </Label>
                    <Editor
                      editorState={content}
                      onEditorStateChange={(data) => setContent(data)}
                    />
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
