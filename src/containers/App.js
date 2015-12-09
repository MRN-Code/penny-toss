import React, { Component, PropTypes } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class App extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <Header />
                <main role="main">
                    {children}
                </main>
                <Footer />
            </div>
        );
    }
}
