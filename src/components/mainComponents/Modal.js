import {
  Button,
  Row,
  Col,
  Modal,
  Container,
  Image,
  Badge,
  Tab,
  Tabs,
  ListGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

function ModalComponent(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose} animation={props.false}>
      <Modal.Header closeButton>
        <Modal.Title> Hipster Ultimate </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={6}>
              <Image
                style={{ width: "100%" }}
                src={props.url}
                rounded
                className="border border-gray"
              />
            </Col>
            <Col md={6}>
              <div className="p-4">
                <h6> Precio: $229</h6>
                <h6>
                  {" "}
                  Calificacion: <br />
                  <FontAwesomeIcon icon={faStar} />,
                </h6>
                <Badge pill bg="warning">
                  Hipster
                </Badge>
                <Badge pill bg="secondary">
                  Deportiva
                </Badge>
                <br />
                <h7 className="text-primary">
                  <FontAwesomeIcon icon={faHeart} /> Agregar A los deseos{" "}
                </h7>
              </div>
            </Col>

            <Col md={12}>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" title="Home">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam pellentesque turpis mauris, eget blandit tortor
                  vehicula vel. Etiam placerat laoreet venenatis
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <ListGroup>
                    <ListGroup.Item>
                      Germán Escobar comentó hace dos días
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Esta camiseta está increible,la quiero!
                    </ListGroup.Item>
                  </ListGroup>
                  <InputGroup>
                    <FormControl as="textarea" aria-label="With textarea" />
                  </InputGroup>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
