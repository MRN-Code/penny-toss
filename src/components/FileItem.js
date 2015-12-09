import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import filesize from 'filesize';


export default function FileItem(props) {
    /**
     * `props.file` is a browser `File` object.
     * @{@link  https://developer.mozilla.org/en-US/docs/Web/API/File}
     */
    const { file: { name, size }, remove } = props;

    return (
        <div className="file-item">
            <h3 className="file-item-name h5">{name}</h3>
            <p className="file-item-size text-muted h6">{filesize(size)}</p>
            <Button
                bsStyle="danger"
                className="file-item-button"
                onClick={remove}>Remove</Button>
        </div>
    );
}

FileItem.propTypes = {
    file: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired,
};
