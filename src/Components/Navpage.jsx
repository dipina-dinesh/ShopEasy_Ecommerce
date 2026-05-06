import React, { useContext } from "react";   // ✅ added useContext
import { NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "./Context/CartContext"; // ✅ import context
import "./Ecommerce.css";

function Navpage() {
  const navigate = useNavigate();

  // ✅ Get login status
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  // ✅ Get cart from context
  const { cart } = useContext(CartContext);

  // ✅ Total items count (better than just length)
const totalItems = Array.isArray(cart)
  ? cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
  : 0;

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand className="logo">ShopEasy</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link as={NavLink} to="/" end className="nav-link-custom">
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/products" className="nav-link-custom">
              Products
            </Nav.Link>

            {/* ✅ Cart with count */}
            <Nav.Link as={NavLink} to="/cart" className="nav-link-custom">
              Cart ({totalItems})
            </Nav.Link>

            {/* ✅ Login / Logout */}
            {isLoggedIn ? (
              <Nav.Link onClick={handleLogout} className="nav-link-custom">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={NavLink} to="/login" className="nav-link-custom">
                Login
              </Nav.Link>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navpage;