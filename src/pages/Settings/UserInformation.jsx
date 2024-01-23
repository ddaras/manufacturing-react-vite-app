import { Button, ButtonGroup, Col, Form, Row, Stack, Table, } from "react-bootstrap";
import Page from "../../components/Page";
import { Pencil, Trash } from "react-bootstrap-icons";

const USERS = [
  {
    fullName: 'Sample Name',
    email: 'example@company.com',
    role: 'ADMIN',
    username: 'example_username',
    password: '*****',
    mobileNumber: '555555555',
    emergencyContact: 'Emergency contact sample',
    presentAddress: '#1 street, city, country',
    status: 'ACTIVE'
  },
]


function UserInformation() {
  return (
    <Page title="User Information">
      <Form className="border-bottom border-body-tertiary pb-4 mb-4">
        <Stack direction="horizontal" gap={2} className="mb-3">
          <div>
            <Form.Control
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div>
            <Form.Control
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <Form.Select>
              <option>- Role</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div>
            <Form.Control
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <Form.Control
              type="password"
              placeholder="Password"
            />
          </div>
        </Stack>

        <Stack direction="horizontal" gap={2}>
          <div>
            <Form.Control
              type="tel"
              placeholder="Mobile Number"
            />
          </div>
          <div>
            <Form.Control
              type="text"
              placeholder="Emergency  Contact"
            />
          </div>
          <div>
            <Form.Control
              type="text"
              placeholder="Present Address"
            />
          </div>
          <Button>Add User</Button>
        </Stack>
      </Form>

      <Row>
        <Col>
          <Table bordered>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Username</th>
                <th>Password</th>
                <th>Mobile Number</th>
                <th>Emergency  Contact</th>
                <th>Present Address</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {USERS.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>{item.mobileNumber}</td>
                  <td>{item.emergencyContact}</td>
                  <td>{item.presentAddress}</td>
                  <td>{item.status}</td>
                  <td align="center">
                    <ButtonGroup size="sm" className="ms-auto">
                      <Button variant="outline-secondary"><Trash /></Button>
                      <Button variant="outline-secondary"><Pencil /></Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Page>
  );
}

export default UserInformation;
