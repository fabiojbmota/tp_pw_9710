import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ** Configs
import { getAreas } from "../../../services/areas";

// ** Reactstrap Imports
import { Table } from "reactstrap";
import { Edit } from "react-feather";

const ListAreas = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const areas = await getAreas();
    setAreas(areas.data);
  }

  function renderPost() {
    return areas.map((areas, i) => {
      return (
        <tr key={i}>
          <td>{areas.id}</td>
          <td>{areas.status}</td>
          <td>{areas.date}</td>
          <td>
            <Link to={`/blog/${post.id}`}>
              <Edit className="feather" />
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <h2>Posts</h2>
      <Table>
        <thead>
          <tr>
            <td>ID</td>
            <td>start</td>
            <td>end</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>{renderPost()}</tbody>
      </Table>
    </div>
  );
};

export default ListPosts;