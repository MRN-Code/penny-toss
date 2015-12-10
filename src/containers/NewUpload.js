import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

import { addFiles } from '../actions';
import FileAdder from '../components/FileAdder';
import FileItem from '../components/FileItem';

export default class NewUpload extends Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);
        this.renderNavigation = this.renderNavigation.bind(this);

        /**
         * Set the initial state for testing.
         * @todo  Remove and use Redux props
         */
        this.state = {
            files: [],
        };
    }

    handleNavigation(event) {
        event.preventDefault();

        const { addFiles, pushState } = this.props;
        const { files } = this.state;

        addFiles(files);
        pushState(null, '/edit');
    }

    /**
     * Handle react-dropzone's 'drop' event.
     *
     * @param {array} newFiles
     * @return {undefined}
     */
    onDrop(newFiles) {
        const { files } = this.state;

        newFiles.forEach(file => {
            files.push(file);
        });

        this.setState({ files });
    }

    /** @todo  Convert to redux action */
    removeFile(name) {
        this.setState({
            files: this.state.files.filter(file => file.name !== name),
        });
    }

    renderFiles() {
        const { files } = this.state;

        return (
            <ul className="list-unstyled">
                {files.map((file, index) => {
                    const remove = this.removeFile.bind(this, file.name);
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
        if (this.state.files.length) {
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
    addFiles: PropTypes.func.isRequired,
    files: PropTypes.array.isRequired,
    pushState: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    const { files } = state.entities;

    return {
        files,
    };
}

export default connect(mapStateToProps, {
    addFiles,
    pushState,
})(NewUpload);
