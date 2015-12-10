import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FileAdder from '../components/FileAdder';
import FileItem from '../components/FileItem';

export default class NewUpload extends Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);

        /**
         * Set the initial state for testing.
         * @todo  Remove and use Redux props
         */
        this.state = {
            files: [],
        };
    }

    onDrop(files) {
        this.setState({
            files: files
        });
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
                <div className="clearfix">
                    <Button bsStyle="primary" className="pull-right">Next &rarr;</Button>
                </div>
            </div>
        );
    }
}
