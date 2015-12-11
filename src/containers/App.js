import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class App extends Component {
    render() {
        const { children, uploadsCounts } = this.props;
        return (
            <div>
                <Header {...uploadsCounts} />
                <main role="main">
                    {children}
                </main>
                <Footer />
            </div>
        );
    }
}

function getStatusCounter(uploads) {
    return status => uploads.filter(u => u.status === status).length;
}

function mapStateToProps(state) {
    const count = getStatusCounter(state.entities.uploads);

    return {
        uploadsCounts: {
            activeCount: count('active'),
            completeCount: count('complete'),
            errorCount: count('error'),
            pausedCount: count('paused'),
        },
    };
}

export default connect(mapStateToProps)(App);
