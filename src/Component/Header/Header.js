import React, { useState } from "react";
import { CloseButton, Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    const [headerClassName, setHeaderClassName] = useState("");

    const handleScroll = (headerClassName) => {
      if (headerClassName !== "fixed" && window.pageYOffset >= 5) {
        setHeaderClassName("fixed");
      } else if (headerClassName === "fixed" && window.pageYOffset < 5) {
        setHeaderClassName("");
      }
    };
  
    React.useEffect(() => {
      window.onscroll = () => handleScroll(headerClassName);
    }, [headerClassName]); // IMPORTANT, This will cause react to update depending on change of this value
  
  return (
    <>
        <header className={headerClassName}>
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand}>
            <Container>
              <Navbar.Brand href="/">
                <Image src="/image/logo.svg" />
              </Navbar.Brand>
              <Navbar.Toggle
                className="ms-auto"
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center flex-grow-1 pe-3">
                    <Link onClick={CloseButton} to="/">Home</Link>
                    <Link onClick={CloseButton} to="/games">Games</Link>
                    <Link onClick={CloseButton} to="/about">About us</Link>
                    <Link onClick={CloseButton} to="/contact">Contact us</Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <div className="HeaderBtnWrap">
                <Link to="/" className="btn btn-border-green">Log in</Link>
                <Link to="/" className="btn btn-green">Sign up</Link>
              </div>
            </Container>
          </Navbar>
        ))}
      </header>
    </>
  );
}

export default Header;
