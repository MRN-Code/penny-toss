import React, { Component, PropTypes } from 'react';
import {
    Button,
    ButtonGroup,
    Panel,
    ProgressBar
} from 'react-bootstrap';

export default function Upload(props) {
    const { deviceId, files, id, progress, status, studyId, ursi } = props;

    /**
     * Map upload status to Bootstrap class names.
     * @todo Make a status mapper utility
     */
    let progressStyle;
    if (status === 'complete') {
        progressStyle = 'success';
    } else if (status === 'paused') {
        progressStyle = 'warning';
    } else if (status === 'error') {
        progressStyle = 'danger';
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
            <div className="clearfix">
                <ButtonGroup className="pull-right">
                    <Button bsStyle="warning">Pause</Button>
                    <Button bsStyle="danger">Destroy</Button>
                </ButtonGroup>
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
