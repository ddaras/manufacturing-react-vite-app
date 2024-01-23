import { Button, Card, Col, Container, Form, Row, Stack, } from "react-bootstrap";
import Page from "../../components/Page";

const USER_ROLES = [
  'Admin', 'User', '2nd User'
]

const BASIC_PERMISSIONS = [
  'Add Material',
  'Add Material Category',
  'Add Material S/N',
  'Manufacture Information',
  'Shipment Information',
  'Warehouse Information',
  'Site Information',
  'Company  Information',
  'Add Site Requisition',
]

const ADVANCED_PERMISSIONS = [
  'Create Requisition',
  'Requisition Update',
  'User Information',
  'User Role Control'
]


function UserRoleControl() {
  return (
    <Page title="User Information">
      <Form className="border-bottom border-body-tertiary pb-4 mb-4">
        <Stack direction="horizontal" gap={2} className="mb-3">
          <div>
            <Form.Control
              type="text"
              placeholder="Write the Role"
            />
          </div>
          <Button>Add Role</Button>
        </Stack>
      </Form>

      <Container>
        <Row>
          {USER_ROLES.map((role, idx) => (
            <Col key={idx}>
              <Card key={idx}>
                <Card.Header>{role}</Card.Header>
                <Card.Body>
                  <div className="mb-4">
                    {BASIC_PERMISSIONS.map((basic, idx) => (
                      <Stack key={idx}>
                        <Form.Check
                          type="checkbox"
                          id={`${role}-${basic}`}
                          label={basic}
                          defaultChecked
                        />
                      </Stack>
                    ))}
                  </div>

                  <div className="mb-4">
                    {ADVANCED_PERMISSIONS.map((basic, idx) => (
                      <Stack key={idx}>
                        <Form.Check
                          type="checkbox"
                          id={`${role}-${basic}`}
                          label={basic}
                          defaultChecked
                          style={{ fontWeight: 'bold' }}
                        />
                      </Stack>
                    ))}
                  </div>

                  <Button variant="primary">Update</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Page>
  );
}

export default UserRoleControl;
