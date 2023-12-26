import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <span>
          <img src='logo1080.png' className='nav-logo' alt='Star Clean up LLC logo' />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-link' href="">About us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item className='nav-item' href="">Tile & Grout</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="">
                Terrazzo Floors Polishing
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="">Limestone Restoration</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="">Travertine Polishing</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="">Shower Restoration</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="">Carpet Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="">Upholstery Cleaning</NavDropdown.Item>
            </NavDropdown>
            <Button variant="success">CALL US TODAY 786-877-6460</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;