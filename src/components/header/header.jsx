import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import './header.css';

function Header() {
  const location = useLocation();

  return (
    <Navbar expand='lg' className='nav-bar'>
      <Container>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} width={100} height={100} />
          </Link>
        </div>
        <Navbar.Brand as={Link} to='/'>
          <h3>Jenna's Cupcakes</h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='ml-auto'>
            <Nav.Link
              as={Link}
              to='/'
              className={location.pathname === '/' ? 'active' : ''}
            >
              Welcome
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/about'
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/portfolio'
              className={location.pathname === '/menu' ? 'active' : ''}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/contact'
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <NavDropdown title='Social Media'>
              <NavDropdown.Item href=''>Instagram</NavDropdown.Item>
              <NavDropdown.Item href=''>Facebook</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
