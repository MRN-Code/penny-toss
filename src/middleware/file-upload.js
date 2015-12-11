/**
 * Upload files in response to the `EDIT_UPLOAD` action.
 *
 * @todo  Make a new, more appropriately named action for this and add response
 *        actions for network events.
 */

import axios from 'axios';
import Promise from 'bluebird';
import tus from 'tus-js-client';
import {
    UPLOAD_EDIT,
    uploadComplete,
    uploadNetworkError,
    uploadNetworkProgress,
} from '../actions';

//TODO Use actual API
// const API_URL = 'https://localcoin.mrn.org:8443/api/v1.3.0';
const API_URL = 'http://localhost:7113/files';
const CHUNK_SIZE = 1024;

function tryDryRun(options) {
    return axios.post(API_URL + '/filerecords&dryrun=true', options);
}

function initUpload(options) {
    return axios.post(API_URL + '/fileuploads', options);
}

function endUploadProcess(options) {
    return axios.put(API_URL + '/fileuploads', options);
}

export default store => next => action => {
    if (action.type !== UPLOAD_EDIT) {
        return next(action);
    }

    /**
     * Need to fire the `UPLOAD_EDIT` action to persist edits to the `entities`
     * cache.
     * @todo  Better way to handle this
     */
    next(action);

    const {
        entities: { uploads },
        uiActive: { upload: currentUploadId }
    } = store.getState();
    const upload = uploads.find(upload => upload.id === currentUploadId);

    const options = {
        attributes: {},
        ursi: upload.ursi,
        deviceModalityDetailId: upload.deviceId,
        segmentIntervalId: upload.segmentIntervalId,
    };

    function uploadFile(file) {
        return new Promise((resolve, reject) => {
            /**
            * Fire up a tus upload.
            * @{@link  https://github.com/tus/tus-js-client#example}
            */
            const upload = new tus.Upload(file, {
                chunkSize: CHUNK_SIZE,
                endpoint: API_URL + '/files',
                onChunkComplete(chunkSize, bytesAccepted, bytesTotal) {
                    console.log('onChunkComplete fired', chunkSize, bytesAccepted, bytesTotal);
                },
                onError(error) {
                    reject(error);
                },
                onProgress(bytesUploaded, bytesTotal) {
                    const percentage = (bytesUploaded / bytesTotal * 100).toFixed(2);
                    return next(uploadNetworkProgress(currentUploadId, percentage));
                },
                onSuccess() {
                    next(uploadNetworkProgress(currentUploadId, 100));
                    resolve({
                        name: upload.file.name,
                        url: upload.url,
                    });
                },
            });
            upload.start();
        });
    }

    //TODO  Uncomment when API is ready
    // tryDryRun(options)
    //     .then(() => initUpload(options))
    //     .then(() => Promise.all(upload.files.map(uploadFile)))
    //     .then(() => endUploadProcess(options))
    //     .catch(error => {
    //         console.error(error);
    //     });

    return Promise.all(upload.files.map(uploadFile))
        .then(response => {
            console.log(response); //TODO Remove
            return next(uploadComplete(currentUploadId));
        })
        .catch(error => {
            console.error(error); //TODO Remove
            return next(uploadNetworkError(error));
        });
}
