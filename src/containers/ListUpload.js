/**
 * @todo  Come up with a better name for this component/container.
 */
import React, { Component, PropTypes } from 'react';
import Upload from '../components/Upload';
import { connect } from 'react-redux';

import { Label, Nav, NavItem } from 'react-bootstrap';

class ListUpload extends Component {
    constructor(props) {
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.renderFilters = this.renderFilters.bind(this);
        this.renderUploads = this.renderUploads.bind(this);
        this.state = {
            activeFilter: 'active',
        };
    }
    handleFilterChange(eventKey) {
        this.setState({
            activeFilter: eventKey,
        });
    }
    renderFilters() {
        const { activeFilter } = this.state;
        const { uploads } = this.props;

        /** @todo  Convert counts to selectors with reselect */
        function getCount(status) {
            return uploads
                .filter(x => x.status === status)
                .length;
        }

        const activeCount = getCount('active');
        const pausedCount = getCount('paused');
        const errorCount = getCount('error');
        const completeCount = getCount('complete');

        return (
            <Nav
                activeKey={activeFilter}
                bsStyle="tabs"
                className="uploads-filters"
                onSelect={this.handleFilterChange}>
                <NavItem eventKey="active">
                    Active{' '}
                    <Label>{activeCount}</Label>
                </NavItem>
                <NavItem eventKey="paused">
                    Paused{' '}
                    <Label>{pausedCount}</Label>
                </NavItem>
                <NavItem eventKey="error">
                    Error{' '}
                    <Label>{errorCount}</Label>
                </NavItem>
                <NavItem eventKey="complete">
                    Complete{' '}
                    <Label>{completeCount}</Label>
                </NavItem>
            </Nav>
        );
    }
    renderUploads() {
        const { activeFilter } = this.state;
        const { uploads } = this.props;
        const filteredUploads = uploads.filter(u => u.status === activeFilter);

        return (
            <ul className="uploads-list list-unstyled">
                {filteredUploads.map((upload, index) => {
                    return (
                        <li key={index}>
                            <Upload {...upload} />
                        </li>
                    );
                })}
            </ul>
        );
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                        {this.renderFilters()}
                        {this.renderUploads()}
                    </div>
                </div>
            </div>
        );
    }
}

ListUpload.propTypes = {
    // activeFilter: PropTypes.string, // @todo  Move to routing/state/Redux?
    uploads: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    return {
        uploads: state.entities.uploads,
    };
}

export default connect(mapStateToProps)(ListUpload);
