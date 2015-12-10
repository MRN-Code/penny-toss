import React, { Component } from 'react';
import { Button, Input } from 'react-bootstrap';
import InputDatePicker from '../components/InputDatePicker';
import FileTable from '../components/FileTable';

export default class EditUpload extends Component {
    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
    }
    handleDateChange() {

    }
    render() {
        //TODO:  Reduxify files
        const files = [{
            name: 'cool.txt',
            size: 200,
        }, {
            name: 'my-sweet-file.mov',
            size: 1400,
        }, {
            name: 'radical.exe',
            size: 40,
        }, {
            name: 'dope-analysis.blob',
            size: 2048,
        }];
        return (
            <form className="container-fluid">
                <div className="row">
                    <Input
                        defaultValue="0"
                        groupClassName="col-sm-4 col-md-3"
                        id="form-control-study"
                        label="Study:"
                        type="select">
                        <option value="0" disabled></option>
                        <option value="1">Study #1</option>
                        <option value="2">Study #2</option>
                        <option value="3">Study #3</option>
                    </Input>
                    <Input
                        defaultValue="0"
                        groupClassName="col-sm-4 col-md-3"
                        id="form-control-device"
                        label="Device:"
                        type="select">
                        <option value="0" disabled></option>
                        <option value="MEG">MEG</option>
                        <option value="EEG">EEG</option>
                        <option value="MRI">MRI</option>
                        <option value="Genetic">Genetic</option>
                    </Input>
                </div>

                <div className="row">
                    <div className="col-sm-8">
                        <FileTable files={files} />
                    </div>
                    <div className="col-sm-4">
                        <Input
                            id="form-control-ursi"
                            label="URSI:"
                            type="text" />
                        <Input
                            id="form-control-visit"
                            label="Visit:"
                            type="text" />
                        <Input
                            id="form-control-session-id"
                            label="Session ID:"
                            type="text" />
                        <InputDatePicker
                            id="form-control-date"
                            label="Visit Date:"
                            handleChange={this.handleDateChange} />
                    </div>
                </div>
                <div className="clearfix">
                    <Button
                        bsStyle="primary"
                        className="pull-left">&larr; Previous</Button>
                    <Button
                        bsStyle="primary"
                        className="pull-right">Next &rarr;</Button>
                </div>
            </form>
        );
    }
}
