import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
                            <LinkContainer to="/new">
                                <NavItem
                                    eventKey={1}
                                    href="/new">New Upload</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}
