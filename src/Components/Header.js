import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from "react-bootstrap/Container"






export default function Header() {
    return (
        // <Navbar bg="light" expand="lg" className="navbar" variant="light">
        // <Container className="container">
        // <Navbar.Brand href="#home" style={{color:"white",fontSize:"1.75rem",marginRight:"60px"}}>GPT-3</Navbar.Brand>
        //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
        // <Navbar.Collapse id="basic-navbar-nav">
        // <Nav className="me-auto nav-items">
        //     <Nav.Link href="#home" style={{color:"white",marginRight:"40px"}} className="nav--link">Home</Nav.Link>
        //     <Nav.Link href="#link" style={{color:"white",marginRight:"40px"}} className="nav--link">About Us</Nav.Link>
        //     <Nav.Link href="#link" style={{color:"white",marginRight:"40px"}} className="nav--link">Our Companies</Nav.Link>
        //     <Nav.Link href="#link" style={{color:"white",marginRight:"40px"}} className="nav--link">Contact Us</Nav.Link>
        //     {/* <Nav.Link href="#link" style={{color:"white"}}>Library</Nav.Link> */}
        //     </Nav>
          
        // </Navbar.Collapse>
        //   </Container>
        //   </Navbar>
        <div className="navbar">
                <div className="navbar--brand"><h1><a href="#home">GPT-3</a></h1></div>
                <div className="navbar--links">
                    <a href="#link">Home</a>
                    <a href="#link">About Us</a>
                    <a href="#link">Our Companies</a>
                    <a href="#link">Contact</a>
                </div>
        </div>
          
    )
}