import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

/**
 * Uses react-dropzone component:
 * @{@link  https://github.com/paramaggarwal/react-dropzone}
 */
import Dropzone from 'react-dropzone';

export default class FileAdder extends Component {
    constructor(props) {
        super(props);
        this.onOpenClick = this.onOpenClick.bind(this);
    }
    onOpenClick() {
      this.refs.dropzone.open();
    }
    render() {
        const { onDrop } = this.props;
        return (
            <div className="file-adder">
                <Dropzone
                    className="file-adder-dropzone"
                    onDrop={onDrop}
                    ref="dropzone">
                    <div className="file-adder-dropzone-text">
                        Drag files here to upload
                    </div>
                </Dropzone>
                <span className="file-adder-info text-muted">
                    Or use the button:
                </span>
                <Button
                    className="file-adder-btn"
                    onClick={this.onOpenClick}>Add files</Button>
            </div>
        );
    }
}

FileAdder.propTypes = {
    onDrop: PropTypes.func.isRequired,
};
