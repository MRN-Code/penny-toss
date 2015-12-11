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
        const { uploads } = this.props;

        return (
            <ul className="uploads-list list-unstyled">
                {uploads.map((upload, index) => {
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
    uploads: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    const { files, uploads } = state.entities;
    const queryParams = state.router.location.search.substring(1).split('=');
    const activeFilter = queryParams[1] || 'active'; //TODO Use a query param parser
    const filteredUploads = uploads
        .filter(upload => upload.status === activeFilter)
        .map(upload => {
            return Object.assign({}, upload, {
                files: upload.files.map(id => {
                    return files.find(f => f.id === id);
                })
            });
        });

    return {
        uploads: filteredUploads,
    };
}

export default connect(mapStateToProps)(ListUpload);
