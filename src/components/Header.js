import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <header role="banner">
                <Navbar fixedTop fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Penny Toss</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Link</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}
