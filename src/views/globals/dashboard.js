// React Imports
import React, { useEffect, useState } from "react";

// Third-party Imports
import { Col, Row } from "reactstrap";

// Services Imports
import useAuthContext from "../../context/auth";

const Dashboard = () => {
  // Hooks
  const { user } = useAuthContext();

  // Declare States
  const [areas, setAreas] = useState([]);
  const [clocks, setClocks] = useState([]);
  const [bookings, setBookings] = useState([]);

  //
  useEffect(() => {
    setAreas(user.areas);
    setClocks(user.lastclocks);
    setBookings(user.nextbookings);

    return () => {
      setAreas([]);
      setClocks([]);
      setBookings([]);
    };
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

  // Render Areas
  const renderAreas = () =>
    areas.map((area, i) => (
      <tr key={i}>
        <td>{area.id}</td>
        <td>{area.name}</td>
      </tr>
    ));

  // Render Clocks
  const renderClocks = () =>
    clocks.map((clock, i) => (
      <tr key={i}>
        <td>{clock.datetime}</td>
        <td>{clock.direction}</td>
      </tr>
    ));

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
      </div>

      <h4>Próximas Reservas</h4>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Data de Inicio</th>
              <th scope="col">Descrição</th>
            </tr>
          </thead>
          <tbody>{renderBookings()}</tbody>
        </table>
        {bookings.length === 0 && (
          <p>Não existem próximas reservas marcadas.</p>
        )}
      </div>
      <Row className="mt-5">
        <Col md="6">
          <h4>Áreas Autorizadas</h4>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome</th>
                </tr>
              </thead>
              <tbody>{renderAreas()}</tbody>
            </table>
            {areas.length === 0 && <p>Não existem áreas autorizadas.</p>}
          </div>
        </Col>
        <Col md="6">
          <h4>Últimos Pontos</h4>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Data</th>
                  <th scope="col">Direção</th>
                </tr>
              </thead>
              <tbody>{renderClocks()}</tbody>
            </table>
            {clocks.length === 0 && <p>Não existem pontos.</p>}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
