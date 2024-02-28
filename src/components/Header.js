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
            <Nav.Link className='nav-link' href="/AboutUs">About us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item className='nav-item' href="/carpetCleaning">Carpet Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="/UpholsteryCleaning">Upholstery Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="/leathercleaning">Leather Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="/tilegroutfloorcleaning">Tile & Grout Floor Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="/hardwoodfloorcleaning">Hardwood Floor Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="/inhomeareasrugcleaning">In-home Areas Rug Cleaning</NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href="/stonecleaning">Stone Cleaning</NavDropdown.Item>
            </NavDropdown>
            <Button className='main-button'>CALL US TODAY XXX-XXX-XXXX</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;