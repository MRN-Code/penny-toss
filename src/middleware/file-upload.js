/**
 * Upload files in response to the `EDIT_UPLOAD` action.
 *
 * @todo  Make a new, more appropriately named action for this and add response
 *        actions for network events.
 */

import axios from 'axios';
import tus from 'tus-js-client';
import Promise from 'bluebird';
import { EDIT_UPLOAD } from '../actions';

//TODO Use actual API
// const API_URL = 'https://localcoin.mrn.org:8443/api/v1.3.0';
const API_URL = 'http://localhost:7113/files';

function logProgress(bytesUploaded, bytesTotal) {
    const percentage = (bytesUploaded / bytesTotal * 100).toFixed(2);
    console.log(bytesUploaded, bytesTotal, percentage + "%");
}

function tryDryRun(options) {
    return axios.post(API_URL + '/filerecords&dryrun=true', options);
}
function initUpload(options) {
    return axios.post(API_URL + '/fileuploads', options);
}

function uploadFile(file) {
    return new Promise((resolve, reject) => {
        /**
         * Fire up a tus upload.
         * @{@link  https://github.com/tus/tus-js-client#example}
         */
        const upload = new tus.Upload(file, {
            endpoint: API_URL + '/files',
            onError(error) {
                reject(error);
            },
            onProgress: logProgress,
            onSuccess() {
                resolve({
                    name: upload.file.name,
                    url: upload.url,
                });
            },
        });
        upload.start();
    });
}

function uploadFiles(files) {
    return Promise.all(files.map(uploadFile));
}

function endUploadProcess(options) {
    return axios.put(API_URL + '/fileuploads', options);
}

export default store => next => action => {
    if (action.type !== EDIT_UPLOAD) {
        return next(action);
    }

    const { upload } = store.getState();
    const options = {
        attributes: {},
        ursi: upload.ursi,
        deviceModalityDetailId: upload.deviceId,
        segmentIntervalId: upload.segmentIntervalId,
    };

    //TODO  Uncomment when API is ready
    // tryDryRun(options)
    //     .then(() => initUpload(options))
    //     .then(() => uploadFiles(upload.files))
    //     .then(() => endUploadProcess(options))
    //     .catch(error => {
    //         console.error(error);
    //     });
    uploadFiles(upload.files)
        .then(response => {
            console.log('Done!', response);
        })
        .catch(error => {
            console.error(error);
        });

    return next(action);
}
