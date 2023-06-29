import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from "reactstrap";
import { getAreas } from "../../services/areas";
import { Eye } from "react-feather";

const Areas = () => {
  const [areas, setAreas] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [auth, setAuth] = useState([]);

  useEffect(() => {
    fetchAreas();
  }, []);

  const fetchAreas = async () => {
    const { data } = await getAreas();
    setAreas(data);
  };

  const viewArea = (area) => {
    setId(area.id);
    setName(area.name);
    setAuth(area.authorized);
  };

  const clearArea = () => {
    setId("");
    setName("");
    setAuth([]);
  };

  const renderAuth = () => auth.map((user, i) => <li key={i}>{user.name}</li>);

  const renderAreas = () =>
    areas.map((area, i) => (
      <tr key={i}>
        <td>{area.id}</td>
        <td>{area.name}</td>
        <td>
          <Button color="pw" onClick={() => viewArea(area)}>
            <Eye size={16} />
          </Button>
        </td>
      </tr>
    ));

  return (
    <div className="areas">
      <Row>
        <Col md={6}>
          <Table responsive striped size="sm" className="align-middle">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>{renderAreas()}</tbody>
          </Table>
        </Col>
        <Col md={6}>
          <Card>
            <CardHeader className="d-flex align-items-center justify-content-between">
              <h5>Detalhes da Área</h5>
              <Button color="danger" onClick={clearArea}>
                Limpar
              </Button>
            </CardHeader>
            <CardBody>
              <p>
                <b>ID:</b> {id}
              </p>
              <p>
                <b>Nome:</b> {name}
              </p>
              <p style={{ marginBottom: 0 }}>
                <b>Autorizados:</b>
              </p>
              {auth.length !== 0 && (
                <ul className="no-margin">{renderAuth()}</ul>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Areas;
