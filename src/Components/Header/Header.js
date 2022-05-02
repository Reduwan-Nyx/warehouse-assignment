
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";


const Header = () => {
  const [user] = useAuthState(auth)

  const handleSignOut = () =>{
    signOut(auth)
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container className="text-center">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height="40px" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link href="home#inventory">Inventory</Nav.Link>

            </Nav>
            <Nav>

              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              
                {
                  user ?
                    <button className="btn btn-link text-danger text-decoration-none" onClick={handleSignOut}>SignOut</button>
                  :
                  <Nav.Link as={Link} to="login">
                  LogIn
                </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

