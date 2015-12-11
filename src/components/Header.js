import React, { PropTypes } from 'react';
import { Button, Label, Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

export default function Header(props) {
    const {
        activeCount,
        completeCount,
        errorCount,
        pausedCount,
    } = props;

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
                        <IndexLinkContainer to="/">
                            <NavItem href="/">
                                Active
                                {' '}
                                <Label>{activeCount}</Label>
                            </NavItem>
                        </IndexLinkContainer>
                        <LinkContainer to="/" query={{ filter: 'paused'}}>
                            <NavItem href="/">
                                Paused
                                {' '}
                                <Label>{pausedCount}</Label>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/" query={{ filter: 'error'}}>
                            <NavItem href="/">
                                Error
                                {' '}
                                <Label>{errorCount}</Label>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/" query={{ filter: 'complete'}}>
                            <NavItem href="/">
                                Complete
                                {' '}
                                <Label>{completeCount}</Label>
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                    <LinkContainer to="/new">
                        <Button
                            bsStyle="primary"
                            className="navbar-btn navbar-right">
                            New Upload
                        </Button>
                    </LinkContainer>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

Header.propTypes = {
    activeCount: PropTypes.number.isRequired,
    completeCount: PropTypes.number.isRequired,
    errorCount: PropTypes.number.isRequired,
    pausedCount: PropTypes.number.isRequired,
};
