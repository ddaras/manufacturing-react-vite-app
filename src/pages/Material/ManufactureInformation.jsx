import { Button, ButtonGroup, Card, Col, Form, Row, Stack, } from "react-bootstrap";
import Page from "../../components/Page";
import { Eye, Pencil, Trash } from "react-bootstrap-icons";

const MANUFACTURERS = [
  {
    title: 'AB international',
    location: 'North China, China',
  },
  {
    title: 'AB international',
    location: 'North China, China',
  }
]


function ManufactureInformation() {
  return (
    <Page title="Manufacture Information">
      <Form className="border-bottom border-body-tertiary pb-4 mb-4">
        <Stack direction="horizontal" gap={2}>
          <div>
            <Form.Control
              type="text"
              placeholder="Manufacture"
            />
          </div>
          <div>
            <Form.Control
              type="text"
              placeholder="Manufacturer Location"
            />
          </div>
          <div>
            <Form.Control
              type="text"
              placeholder="XXXX"
              disabled
            />
          </div>
          <Button>Add Manufacturer</Button>
        </Stack>
      </Form>

      <Row>
        <Col sm={6}>
          <Stack gap={2}>
            {MANUFACTURERS.map((item, idx) => (
              <Card key={idx} body>
                <Stack direction="horizontal">
                  <div>
                    <h5>{item.title}</h5>
                    <small>{item.location}</small>
                  </div>

                  <ButtonGroup className="ms-auto">
                    <Button variant="outline-secondary"><Trash /></Button>
                    <Button variant="outline-secondary"><Pencil /></Button>
                    <Button variant="outline-secondary"><Eye /></Button>
                  </ButtonGroup>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Col>
      </Row>
    </Page>
  );
}

export default ManufactureInformation;
