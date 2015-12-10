import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import filesize from 'filesize';


export default function FileItem(props) {
    /**
     * `props.file` is a browser `File` object.
     * @{@link  https://developer.mozilla.org/en-US/docs/Web/API/File}
     */
    const { file: { name, size, preview }, remove } = props;

    return (
        <div className="file-item">
            <div className="media">
                <div className="media">
                    <div className="media-left">
                        <img className="media-object" src={preview} />
                    </div>
                    <div className="media-body">
                        <h5 className="media-heading">{name}</h5>
                        <p className="file-item-size text-muted">
                            {filesize(size)}
                        </p>
                        <Button
                            bsStyle="danger"
                            className="file-item-button"
                            onClick={remove}>Remove</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

FileItem.propTypes = {
    file: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired,
};
