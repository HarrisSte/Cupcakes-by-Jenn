import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import './header.css';

function Header() {
  const location = useLocation();

  return (
    <Navbar expand='lg' className='nav-bar'>
      <Container>
        <div className='nav-socials'>
          <Nav.Link
            href='https://www.instagram.com/cupcakes_by_jenn/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bi bi-instagram'></i>
          </Nav.Link>
          <Nav.Link
            href='https://www.facebook.com/cupcakesbyjenn515'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bi bi-facebook'></i>
          </Nav.Link>
        </div>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} width={100} height={100} />
          </Link>
        </div>
        <Navbar.Brand as={Link} to='/'>
          Cupcakes by <span>Jenn</span>
          <p>Award Winning Cupcakes</p>
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
              to='/menu'
              className={location.pathname === '/menu' ? 'active' : ''}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/awards'
              className={location.pathname === '/awards' ? 'active' : ''}
            >
              Awards
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/gallery'
              className={location.pathname === '/gallery' ? 'active' : ''}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/contact'
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
