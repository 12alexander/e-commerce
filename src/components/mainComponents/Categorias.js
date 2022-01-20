import { useState, useEffect } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import "./Categorias.css";
function CategoriaComponent({ setCategori }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setdata(json));
  }, []);

  const filtrar = (item) => {
    setCategori(item);
  };

  return (
    <ListGroup as="ol" numbered className="component-Hidem">
      <h2>Categorías</h2>
      {data.map((item, index) => (
        <ListGroup.Item
          key={index}
          onClick={() => filtrar(item)}
          style={{ cursor: "pointer" }}
          className="d-flex justify-content-between align-items-start"
        >
          {item} {process.env.REACT_APP_VIEW2}
          {process.env.REACT_APP_VIEW2}
          <Badge pill bg="secondary">
            {0}
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CategoriaComponent;
