import React, { Component, PropTypes } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main role="main"></main>
                <Footer />
            </div>
        );
    }
}
