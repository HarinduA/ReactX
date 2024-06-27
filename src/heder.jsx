import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import About from "./components/about";
import Contact from "./components/contact";
import Blog from "./components/blog";
import Profile from "./components/profile";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar expand="lg" bg="light">
                        <Navbar.Brand><Link to="/">React-Bootstrap</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                                <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/" element={<App />} />
                </Routes>
            </Router>
        );
    }
}
