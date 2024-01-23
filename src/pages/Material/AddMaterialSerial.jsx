import { Button, Col, Form, InputGroup, Row, Stack, } from "react-bootstrap";
import Page from "../../components/Page";
import { Trash } from "react-bootstrap-icons";


function AddMaterialSerial() {
  return (
    <Page title="Add Material Serial">
      <Form>
        <Row>
          <Col>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="materialId">
                  <Form.Label>Material ID</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="dateOfUpload">
                  <Form.Label>Date of Upload</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="shipmentId">
                  <Form.Label>Shipment ID</Form.Label>
                  <Form.Select>
                    <option>-</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="packingNo">
                  <Form.Label>Packing/Box NO.</Form.Label>
                  <Form.Select>
                    <option>-</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Select>
                    <option>-</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="subCategory">
                  <Form.Label>Sub Category</Form.Label>
                  <Form.Select>
                    <option>-</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="materialType">
                  <Form.Label>Material Type</Form.Label>
                  <Form.Select>
                    <option>-</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="materialType">
                  <Form.Label>Material Name</Form.Label>
                  <Form.Select>
                    <option>-</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="purchasedQty">
                  <Form.Label>Purchased Quantity</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="receivedQty">
                  <Form.Label>Received Quantity</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="remainingQty">
                  <Form.Label>Remaining Quantity</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="materialDescr">
                  <Form.Label>Material Description</Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="unit">
                  <Form.Label>Unit</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="qty">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="manufactureName">
                  <Form.Label>Manufacture Name</Form.Label>
                  <Form.Select>
                    <option>-</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="primary">Upload</Button>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row>
              <Col>
                <Stack direction="horizontal" className="mb-3">
                  <label>Material Serial Number</label>
                  <Button size="sm" className="ms-auto">Upload CVC File</Button>
                </Stack>
              </Col>
              <Col>
                <Stack direction="horizontal" gap={2} style={{ justifyContent: 'flex-end' }}>
                  <Stack direction="horizontal" gap={2} >
                    <Form.Control
                      type="text"
                      placeholder="Type"
                      size="sm"
                    />
                    <Button size="sm" className="ms-auto">Upload</Button>
                  </Stack>
                </Stack>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Serial Number"
                    value="TP3040-1612-BI"
                    disabled
                  />
                  <Button variant="outline-secondary">
                    <Trash />
                  </Button>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Serial Number"
                    value="TP3040-1612-BI"
                    disabled
                  />
                  <Button variant="outline-secondary">
                    <Trash />
                  </Button>
                </InputGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Page>
  );
}

export default AddMaterialSerial;
