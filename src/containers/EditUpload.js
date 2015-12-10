import React, { Component, PropTypes } from 'react';
import { Button, Input } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import { editUpload } from '../actions';
import FileTable from '../components/FileTable';
import InputDatePicker from '../components/InputDatePicker';

class EditUpload extends Component {
    constructor(props) {
        super(props);
        this.handleNewUpload = this.handleNewUpload.bind(this);
        this.renderDeviceInput = this.renderDeviceInput.bind(this);
        this.renderNavigation = this.renderNavigation.bind(this);
        this.renderStudyInput = this.renderStudyInput.bind(this);
    }
    handleNewUpload(event) {
        event.preventDefault();

        const { editUpload, files } = this.props;
        const { device, sessionId, study, ursi, visitDate } = this.refs;

        editUpload({
            date: Date.now(),
            deviceId: device.getValue(),
            sessionId: sessionId.getValue(),
            studyId: study.getValue(),
            ursi: ursi.getValue(),
            visitDate: visitDate.getValue(),
        });
    }
    renderDeviceInput() {
        const { devices } = this.props;

        return (
            <Input
                defaultValue="0"
                groupClassName="col-sm-4 col-md-3"
                id="form-control-device"
                label="Device:"
                ref="device"
                type="select">
                <option value="0" disabled></option>
                {devices.map(({id, name}) => {
                    return <option key={id} value={id}>{name}</option>;
                })}
            </Input>
        );
    }
    renderNavigation() {
        return (
            <div className="clearfix">
                <LinkContainer to="/new">
                    <Button
                        bsStyle="default"
                        className="pull-left">&larr; Previous</Button>
                </LinkContainer>
                <Button
                    bsStyle="primary"
                    className="pull-right"
                    onClick={this.handleNewUpload}
                    type="submit">Next &rarr;</Button>
            </div>
        );
    }
    renderStudyInput() {
        const { studies } = this.props;

        return (
            <Input
                defaultValue="0"
                groupClassName="col-sm-4 col-md-3"
                id="form-control-study"
                label="Study:"
                ref="study"
                type="select">
                <option value="0" disabled></option>
                {studies.map(({id, name}) => {
                    return <option key={id} value={id}>{name}</option>;
                })}
            </Input>
        );
    }
    render() {
        const { files } = this.props;

        return (
            <form className="container-fluid">
                <div className="row">
                    {this.renderStudyInput()}
                    {this.renderDeviceInput()}
                </div>

                <div className="row">
                    <div className="col-sm-8">
                        <FileTable files={files} />
                    </div>
                    <div className="col-sm-4">
                        <Input
                            id="form-control-ursi"
                            label="URSI:"
                            ref="ursi"
                            type="text" />
                        <Input
                            id="form-control-session-id"
                            label="Session ID:"
                            ref="sessionId"
                            type="text" />
                        <InputDatePicker
                            id="form-control-date"
                            label="Visit Date:"
                            ref="visitDate"
                            handleChange={this.handleDateChange} />
                    </div>
                </div>
                {this.renderNavigation()}
            </form>
        );
    }
}

EditUpload.propTypes = {
    devices: PropTypes.array.isRequired,
    studies: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    const { devices, studies } = state.entities;
    const { files } = state.upload;

    return {
        files,
        devices,
        studies,
    };
}

export default connect(mapStateToProps, {
    editUpload,
})(EditUpload);
