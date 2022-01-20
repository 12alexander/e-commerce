import { useEffect, useState } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CategoriaComponent from "./mainComponents/Categorias";
import SliderComponent from "./mainComponents/Slider";
import ProductsComponents from "./mainComponents/Productos";

function MainFunction() {
  const [products, setProducts] = useState([]);
  const [categoria, setCategoria] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <Container>
      <Row>
        <Col lg={3} xl={3}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Buscar camisetas"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
          </InputGroup>

          <CategoriaComponent setCategori={setCategoria} />
        </Col>
        <Col lg={9} xl={9} md={12}>
          <SliderComponent />
          <ProductsComponents
            products={
              categoria === ""
                ? products
                : products.filter((e) => e.category === categoria)
            }
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MainFunction;
