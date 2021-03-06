import React, { Component, PropTypes } from 'react';
import {
    Button,
    ButtonGroup,
    Panel,
    ProgressBar
} from 'react-bootstrap';
import FileItem from './FileItem';

export default function Upload(props) {
    const { deviceId, files, id, progress, status, studyId, ursi } = props;

    /**
     * Map upload status to Bootstrap class names.
     * @todo Make a status mapper utility
     */
    let progressStyle;
    let controls;
    if (status === 'complete') {
        progressStyle = 'success';
    } else if (status === 'paused') {
        progressStyle = 'warning';
        controls = (
            <ButtonGroup className="pull-right">
                <Button bsStyle="primary">Resume</Button>
                <Button bsStyle="danger">Delete</Button>
            </ButtonGroup>
        );
    } else if (status === 'error') {
        progressStyle = 'danger';
        controls = (
            <ButtonGroup className="pull-right">
                <Button bsStyle="primary">Fix Errors</Button>
                <Button bsStyle="danger">Delete</Button>
            </ButtonGroup>
        );
    } else {
        controls = (
            <ButtonGroup className="pull-right">
                <Button bsStyle="warning">Pause</Button>
                <Button bsStyle="danger">Delete</Button>
            </ButtonGroup>
        );
    }

    return (
        <Panel className="upload">
            <ProgressBar
                bsStyle={progressStyle}
                label="%(percent)s%"
                now={progress} />
            <h4>Upload #{id}</h4>
            <ul className="list-unstyled">
                <li>Study ID: <strong>{studyId}</strong></li>
                <li>Device ID: <strong>{deviceId}</strong></li>
                <li>URSI: <strong>{ursi}</strong></li>
                <li>Files #: <strong>{files.length}</strong></li>
            </ul>
            <ul className="list-unstyled">
                {files.map((file, index) => {
                    if (file) {
                        return (
                            <li key={index}>{file.name}</li>
                        );
                    }
                })}
            </ul>
            <div className="clearfix">
                {controls}
            </div>
        </Panel>
    );
}

Upload.propTypes = {
    deviceId: PropTypes.number.isRequired,
    files: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    studyId: PropTypes.number.isRequired,
    ursi: PropTypes.string.isRequired,
}
