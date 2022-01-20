import { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "./Modal";

function ProductsComponents({ products }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row>
        {products.map((product, index) => (
          <Col lg={4} xl={4} sm={6} xs={6} md={4} key={product.id}>
            <Card style={{ width: "100%", height: "650px" }}>
              <Card.Img variant="top" src={product.image} height="200px" />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">
                  {product.price} <FontAwesomeIcon icon={faShoppingCart} />
                </Button>
                <Button variant="outline-dark" onClick={handleShow}>
                  {" "}
                  Detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ModalComponent
        show={show}
        handleClose={handleClose}
        false={false}
        url={
          "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg"
        }
      />
    </>
  );
}

export default ProductsComponents;
