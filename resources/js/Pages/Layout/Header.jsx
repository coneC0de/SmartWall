import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from "./style.module.css";

export default function Header()
{
    return(<div className={styles.nav}>
         <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Smart Wall</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Smart Wall
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href={route('/')}>Kreiraj Kabinet</Nav.Link>
                  <Nav.Link href={route('/kreiranje-korisnika')}>Kreiraj Korisnika</Nav.Link>
                  <Nav.Link href="#action2">Kreiraj Predmet</Nav.Link>
                  <Nav.Link href="#action2">Kreiraj Odeljenje</Nav.Link>
                  <Nav.Link href="#action2">Lista Kabineta</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    </div>);
}