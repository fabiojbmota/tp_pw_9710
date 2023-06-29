// ** React Imports
import React, { useEffect, useState } from "react";

// ** Third-party Imports
import { Col, Row, Table } from "reactstrap";
import { LogIn, LogOut } from "react-feather";

// ** Context Imports
import useAuthContext from "../../context/auth";

const Dashboard = () => {
  // Hooks
  const { user } = useAuthContext();

  // States
  const [areas, setAreas] = useState([]);
  const [clocks, setClocks] = useState([]);
  const [bookings, setBookings] = useState([]);

  // useEffect Hook
  useEffect(() => {
    setAreas(user.areas);
    setClocks(user.lastclocks);
    setBookings(user.nextbookings);
  }, [user]);

  // Render next bookings
  const renderBookings = () =>
    bookings.map((booking, i) => (
      <tr key={i}>
        <td>{booking.id}</td>
        <td>{booking.start}</td>
        <td>{booking.description}</td>
      </tr>
    ));

  // Render areas
  const renderAreas = () =>
    areas.map((area, i) => (
      <tr key={i}>
        <td>{area.id}</td>
        <td>{area.name}</td>
      </tr>
    ));

  // Render clocks
  const renderClocks = () =>
    clocks.map((clock, i) => (
      <tr key={i}>
        <td>{clock.datetime}</td>
        <td>
          {clock.direction === "in" ? (
            <LogIn size={14} />
          ) : (
            <LogOut size={14} />
          )}
        </td>
      </tr>
    ));

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
      </div>

      <h4>Próximas Reservas</h4>
      <Table responsive striped size="sm">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Data de Inicio</th>
            <th scope="col">Descrição</th>
          </tr>
        </thead>
        <tbody>{renderBookings()}</tbody>
      </Table>
      {bookings.length === 0 && (
        <p style={{ marginTop: "-1rem" }}>
          Não existem próximas reservas marcadas.
        </p>
      )}
      <Row className="mt-5">
        <Col md="6">
          <h4>Áreas Autorizadas</h4>
          <Table responsive striped size="sm">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
              </tr>
            </thead>
            <tbody>{renderAreas()}</tbody>
          </Table>
          {areas.length === 0 && (
            <p style={{ marginTop: "-1rem" }}>Não existem áreas autorizadas.</p>
          )}
        </Col>
        <Col md="6">
          <h4>Últimos Pontos</h4>
          <Table responsive striped size="sm">
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Direção</th>
              </tr>
            </thead>
            <tbody>{renderClocks()}</tbody>
          </Table>
          {clocks.length === 0 && (
            <p style={{ marginTop: "-1rem" }}>Não existem pontos.</p>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
