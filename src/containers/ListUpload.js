/**
 * @todo  Come up with a better name for this component/container.
 */
import React, { Component, PropTypes } from 'react';
import Upload from '../components/Upload';

import { Label, Nav, NavItem } from 'react-bootstrap';

export default class ListUpload extends Component {
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

ListUpload.defaultProps = {
    // @todo  Don't hard code!
    uploads: [{
        id: 3,
        studyId: 100,
        deviceId: 1,
        files: [6, 7, 8],
        ursi: 'M1000000',
        status: 'error',
        progress: 67,
    }, {
        id: 4,
        studyId: 101,
        deviceId: 1,
        files: [9, 10],
        ursi: 'M1000001',
        status: 'complete',
        progress: 100,
    }, {
        id: 5,
        studyId: 100,
        deviceId: 2,
        files: [11, 12],
        ursi: 'M1000002',
        status: 'active',
        progress: 21,
    }, {
        id: 6,
        studyId: 100,
        deviceId: 2,
        files: [55, 56, 57, 58],
        ursi: 'M1000003',
        status: 'active',
        progress: 80,
    }]
};

ListUpload.propTypes = {
    // activeFilter: PropTypes.string, // @todo  Move to routing/state/Redux?
    uploads: PropTypes.array.isRequired,
};
