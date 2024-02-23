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
              <NavDropdown.Item className='nav-item' href="/carpetCleaning">Carpet Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="">Upholstery Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="">Leather Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="">Tile & Grout Floor Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="">Hardwood Floor Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="">In-home Areas Rug Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="">Stone Cleaning</NavDropdown.Item>
            </NavDropdown>
            <Button className='main-button'>CALL US TODAY XXX-XXX-XXXX</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;