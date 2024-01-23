import { Button, Stack } from 'react-bootstrap';
import { BellFill, PersonFill } from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Stack direction="horizontal" gap={5} className="border-bottom border-body-tertiary px-5">
      <div>
        <Navbar expand="lg" >
          <Navbar.Brand href="/">Company Logo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Material">
                <NavDropdown.Item href="/materials/add-material-serial">Add Material Serial</NavDropdown.Item>
                <NavDropdown.Item href="/materials/manufacture-information">Manufacture Information</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Material Requisition">
                <NavDropdown.Item href="/material-requisition/create-material-requisition">Create Material Requisition</NavDropdown.Item>
                <NavDropdown.Item href="/material-requisition/requisition-update">Requisition Update</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Settings">
                <NavDropdown.Item href="/settings/user-information">User Information</NavDropdown.Item>
                <NavDropdown.Item href="/settings/user-role-control">User Role Control</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="p-2 ms-auto">
        <Stack direction="horizontal" gap={2}>
          <Button variant="link"><BellFill /></Button>
          <Button variant="link"><PersonFill /></Button>
        </Stack>
      </div>
    </Stack>
  );
}

export default Header; 