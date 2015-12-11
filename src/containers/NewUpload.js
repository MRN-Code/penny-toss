import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

import { addFiles, removeFiles, uploadNew } from '../actions';
import FileAdder from '../components/FileAdder';
import FileItem from '../components/FileItem';

export default class NewUpload extends Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);
        this.renderNavigation = this.renderNavigation.bind(this);
    }

    handleNavigation(event) {
        event.preventDefault();

        const { files, pushState, uploadNew } = this.props;

        uploadNew({ files });
        pushState(null, '/edit');
    }

    /**
     * Handle react-dropzone's 'drop' event.
     *
     * @param {array} files
     * @return {undefined}
     */
    onDrop(files) {
        const { addFiles } = this.props;

        addFiles(files);
    }

    /**
     * Remove a file.
     *
     * @param {(File|array)} files
     * @return {undefined}
     */
    removeFile(files) {
        const { removeFiles } = this.props;

        removeFiles(Array.isArray(files) ? files : [files]);
    }

    renderFiles() {
        const { files } = this.props;

        return (
            <ul className="list-unstyled">
                {files.map((file, index) => {
                    const remove = this.removeFile.bind(this, file);
                    return (
                        <li key={index}>
                            <FileItem file={file} remove={remove} />
                        </li>
                    );
                })}
            </ul>
        )
    }

    renderNavigation() {
        if (this.props.files.length) {
            return (
                <div className="clearfix">
                    <Button
                        bsStyle="primary"
                        className="pull-right"
                        onClick={this.handleNavigation}>
                        Next &rarr;
                    </Button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <FileAdder onDrop={this.onDrop} />
                    </div>
                    <div className="col-sm-6">
                        {this.renderFiles()}
                    </div>
                </div>
                {this.renderNavigation()}
            </div>
        );
    }
}

NewUpload.propTypes = {
    files: PropTypes.array.isRequired,
    pushState: PropTypes.func.isRequired,
    uploadNew: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    const { files } = state.uiActive;

    return { files };
}

export default connect(mapStateToProps, {
    addFiles,
    pushState,
    removeFiles,
    uploadNew,
})(NewUpload);
