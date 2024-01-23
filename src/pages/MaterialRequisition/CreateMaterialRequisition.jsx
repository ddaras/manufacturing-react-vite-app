import { Button, Card, Col, Container, Form, InputGroup, Row, Stack, Table, } from "react-bootstrap";
import Page from "../../components/Page";
import { useState } from "react";
import Modal from "../../components/Modal";


function CreateMaterialRequisition() {
  const [showAddMaterial, setShowAddMaterial] = useState(false)
  const [showReject, setShowReject] = useState(false)

  return (
    <Page title="Create Material Requisition">
      <Container className="pt-4">
        <Form>
          <Stack direction="horizontal" className="border-bottom border-body-tertiary pb-4 mb-4">
            <div>
              <h3 style={{ margin: 0, fontWeight: 'bold' }}>Material Requisition (MR)</h3>
            </div>
            <Stack direction="horizontal" gap={2} className="ms-auto">
              <Form.Control
                type="text"
                placeholder="Project"
              />

              <InputGroup>
                <InputGroup.Text id="rmNumber">RM Number</InputGroup.Text>
                <Form.Control placeholder="1497142" />
              </InputGroup>

              <InputGroup>
                <InputGroup.Text id="createdBy">Created by</InputGroup.Text>
                <Form.Control placeholder="User" />
              </InputGroup>
            </Stack>
          </Stack>

          <Row>
            <Col sm={3}>
              <Form.Group className="mb-3" controlId="timeDate">
                <Form.Label>Time & Date</Form.Label>
                <Form.Control type="datetime-local" disabled />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="warehouseName">
                <Form.Label>Warehouse Name</Form.Label>
                <Form.Select>
                  <option>Main Warehouse</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="siteName">
                <Form.Label>Site Name</Form.Label>
                <Form.Select>
                  <option>NAMEXXXXXXX</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group className="mb-3" controlId="outboundDate">
                <Form.Label>Outbound Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={3}>
              <Form.Group className="mb-3" controlId="pickupPerson">
                <Form.Label>Pick-up Person</Form.Label>
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="pickupPersonNumber">
                <Form.Label>Pick-up Person Number</Form.Label>
                <Form.Control type="number" placeholder="+880XXXXXXXXX" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="receiverCompany">
                <Form.Label>Receiver Company</Form.Label>
                <Form.Control type="text" placeholder="XXXXXXXXXXX" />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group className="mb-3" controlId="rransportMode">
                <Form.Label>Transport Mode</Form.Label>
                <Form.Control type="text" placeholder="Pickup" />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group className="mb-3" controlId="transportNumber">
                <Form.Label>Transport Number</Form.Label>
                <Form.Control type="text" placeholder="Pickup" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="destinationAddress">
                <Form.Label>Destination Address</Form.Label>
                <Form.Control type="text" placeholder="Integate with Site name" disabled />
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <Card style={{ minHeight: 400 }} className="mb-5">
          <Card.Body>
            <div className="mb-4">
              <Button size="sm" onClick={() => { setShowAddMaterial(true) }}>Add Material</Button>
            </div>

            <Table>
              <thead>
                <tr>
                  <th style={{ width: 40 }}>No</th>
                  <th>PackingNO./Box NO.</th>
                  <th>Material Name</th>
                  <th>Material Description</th>
                  <th>Prodcut Number</th>
                  <th>Material S/N</th>
                  <th>Unit</th>
                  <th>Quantity</th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Button size="sm">Add S/N</Button></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>


        <Row className="mb-4" style={{ minHeight: 220 }}>
          <Col sm={3}>
            <h6>MR Creator By : TVN POC</h6>
            <Button variant="secondary" disabled size="lg">SUBMIT</Button>
          </Col>
          <Col sm={3}>
            <h6>S/N Creator By : WH Team (Proj & TVN)</h6>
            <Button size="lg">SUBMIT</Button>
          </Col>
          <Col style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
            <h6 style={{ opacity: 0 }}>{'-'}</h6>
            <Button variant="secondary" disabled size="lg" style={{ minWidth: 240 }}>PRINT</Button>
          </Col>
        </Row>

        <Row className="mb-4" style={{ minHeight: 180 }}>
          <Col>
            <h6>Checked By : TVN PM</h6>

            <Stack direction="horizontal" gap={2}>
              <Button variant="secondary" disabled>Approved</Button>
              <Button variant="outline-secondary" onClick={() => { setShowReject(true) }}>Reject</Button>
            </Stack>
          </Col>
          <Col>
            <h6>Accpeted By : TVN Head</h6>

            <Stack direction="horizontal" gap={2}>
              <Button variant="secondary" disabled>Approved</Button>
              <Button variant="outline-secondary" onClick={() => { setShowReject(true) }}>Reject</Button>
            </Stack>
          </Col>
          <Col>
            <h6>Review By : Purchaser POC</h6>

            <Stack direction="horizontal" gap={2}>
              <Button variant="secondary" disabled>Approved</Button>
              <Button variant="outline-secondary" onClick={() => { setShowReject(true) }}>Reject</Button>
            </Stack>
          </Col>
          <Col>
            <h6>Approved By : Purchaser PM</h6>

            <Stack direction="horizontal" gap={2}>
              <Button variant="secondary" disabled>Approved</Button>
              <Button variant="outline-secondary" onClick={() => { setShowReject(true) }}>Reject</Button>
            </Stack>
          </Col>
        </Row>

        <Row className="mb-4" style={{ minHeight: 180, fontSize: 13 }}>
          <Col>
            <p>MR Recived by TVN WH:  -------/-------/202</p>
            <p>Name:______________________________</p>
            <p>Contact No:_________________________</p>
            <p>E-mail:_____________________________</p>
            <p>Track No:___________________________</p>
          </Col>
          <Col>
            <p>MR Checked by DGFI:  -------/-------/202</p>
            <p>Name:______________________________</p>
            <p>Contact No:_________________________</p>
            <p>E-mail:_____________________________</p>
            <p>Track No:___________________________</p>
          </Col>
          <Col>
            <p>Handover by:  -------/-------/202</p>
            <p>Name:______________________________</p>
            <p>Contact No:_________________________</p>
            <p>E-mail:_____________________________</p>
            <p>Track No:___________________________</p>
          </Col>
          <Col>
            <p>Recived by:  -------/-------/202</p>
            <p>Name:______________________________</p>
            <p>Contact No:_________________________</p>
            <p>E-mail:_____________________________</p>
            <p>Track No:___________________________</p>
          </Col>
        </Row>
      </Container>

      <Modal show={showAddMaterial} onHide={() => { setShowAddMaterial(false) }} title="Add Material" submitLabel="Add">
        <Form>
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
            <Col>
              <Form.Group className="mb-3" controlId="material">
                <Form.Label>Material</Form.Label>
                <Form.Select>
                  <option>-</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="qty">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal>

      <Modal show={showReject} onHide={() => { setShowReject(false) }} title="Reject" submitLabel="Submit">
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="rejectionNote">
                <Form.Label>Rejection Note</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal>
    </Page>
  );
}

export default CreateMaterialRequisition;
