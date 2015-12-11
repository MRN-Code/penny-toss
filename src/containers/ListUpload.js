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
        this.renderUploads = this.renderUploads.bind(this);
    }
    renderUploads() {
        const { activeFilter, uploads } = this.props;
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
                        {this.renderUploads()}
                    </div>
                </div>
            </div>
        );
    }
}

ListUpload.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    uploads: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    const queryParams = state.router.location.search.substring(1).split('=');
    const activeFilter = queryParams[1] || 'active'; //TODO Use a query param parser
    return {
        activeFilter,
        uploads: state.entities.uploads,
    };
}

export default connect(mapStateToProps)(ListUpload);
