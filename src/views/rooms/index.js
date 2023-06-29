// ** React Imports
import React, { useEffect, useState } from "react";

// ** Third-party Imports
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
  Table,
} from "reactstrap";
import { Edit3, Trash } from "react-feather";

// ** Services Imports
import {
  createRoom,
  deleteRoom,
  getRooms,
  updateRoom,
} from "../../services/rooms";

const Rooms = () => {
  // States
  const [rooms, setRooms] = useState([]);
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState(0);

  // useEffect hook
  useEffect(() => {
    fetchRooms();
  }, []);

  // Fetch Rooms
  const fetchRooms = async () => {
    const { data } = await getRooms();
    setRooms(data);
  };

  // Set Edit Room
  const editRoom = (id, name) => {
    setRoomId(id);
    setName(name);
  };

  // Delete Room
  const destroyRoom = async (id) => {
    await deleteRoom(id);
    await fetchRooms();
  };

  // Clear Room
  const clearRoom = () => {
    setRoomId(0);
    setName("");
  };

  // Render Rooms
  const renderRooms = () =>
    rooms.map((room, i) => (
      <tr key={i}>
        <td>{room.id}</td>
        <td>{room.name}</td>
        <td>{room.bookings}</td>
        <td>
          <Button color="pw" onClick={() => editRoom(room.id, room.name)}>
            <Edit3 color="black" size={16} />
          </Button>
          {room.bookings === 0 && (
            <Button color="pw" onClick={() => destroyRoom(room.id)}>
              <Trash color="black" size={16} />
            </Button>
          )}
        </td>
      </tr>
    ));

  // Save Rooms
  const saveRoom = async (e) => {
    e.preventDefault();

    const roomData = {
      name: name,
    };

    try {
      if (roomId > 0) {
        await updateRoom(roomId, roomData);
      } else {
        await createRoom(roomData);
      }

      setName("");
      setRoomId(0);
      await fetchRooms();
    } catch (error) {}
  };

  return (
    <Row>
      <Col md={6}>
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              {roomId === 0 ? "Adicionar Sala" : "Editar Sala"}
            </CardTitle>
            <Form className="mt-4" onSubmit={saveRoom}>
              <div className="mb-3">
                <Label className="form-label" for="room-name">
                  Nome
                </Label>
                <Input
                  required
                  id="room-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <Button color="primary" type="submit" className="me-1">
                Guardar
              </Button>
              <Button color="danger" onClick={clearRoom}>
                Limpar
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Col md={6}>
        <Table className="align-middle" responsive striped size="sm">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Reservas</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>{renderRooms()}</tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default Rooms;
