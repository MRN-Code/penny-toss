import merge from 'lodash/object/merge';
import {
    UPLOAD_NEW,
    UPLOAD_EDIT,
    UPLOAD_PAUSE,
    UPLOAD_REMOVE,
    UPLOAD_NETWORK_PROGRESS,
    UPLOAD_NETWORK_ERROR,
    UPLOAD_COMPLETE
} from '../actions';

const initialState = {
    devices: [{
        id: 1,
        name: 'MRI',
    }, {
        id: 2,
        name: 'MEG',
    }],
    files: [{
        id: 6,
        name: 'sample-0001.txt',
        size: 100,
        type: 'text',
    }, {
        id: 7,
        name: 'sample-0002.txt',
        size: 1300,
        type: 'text',
    }, {
        id: 8,
        name: 'sample-0003.txt',
        size: 1205,
        type: 'text',
    }, {
        id: 9,
        name: 'sample-0004.txt',
        size: 500,
        type: 'text',
    }, {
        id: 10,
        name: 'sample-0005.txt',
        size: 100,
        type: 'text',
    }, {
        id: 11,
        name: 'sample-0006.txt',
        size: 865,
        type: 'text',
    }, {
        id: 12,
        name: 'sample-0007.txt',
        size: 23051,
        type: 'text',
    }],
    studies: [{
        id: 100,
        name: 'NITEST',
    }, {
        id: 101,
        name: 'Sweetest Test',
    }],
    uploads: [{
        id: 3,
        studyId: 100,
        deviceId: 1,
        files: [6, 7, 8],
        progress: 67,
        status: 'error',
        ursi: 'M1000000',
    }, {
        id: 4,
        studyId: 101,
        deviceId: 1,
        files: [9, 10],
        progress: 100,
        status: 'complete',
        ursi: 'M1000001'
    }, {
        id: 5,
        studyId: 100,
        deviceId: 2,
        files: [11, 12],
        progress: 100,
        status: 'complete',
        ursi: 'M1000002',
    }],
};

function entitiesUploads(state = [], action) {
    switch(action.type) {
        case UPLOAD_NEW:
            return state.concat(action.upload);
        case UPLOAD_EDIT:
            return state.map(upload => {
                return upload.id === action.id ?
                    Object.assign({}, upload, action.upload) :
                    upload;
            });
        case UPLOAD_PAUSE:
            return state.map(upload => {
                if (upload.id === action.id) {
                    upload.status = 'paused';
                }
                return upload;
            });
        case UPLOAD_REMOVE:
            return state.filter(upload => upload.id === action.id);
        case UPLOAD_NETWORK_PROGRESS:
            return state.map(upload => {
                if (upload.id === action.id) {
                    upload.progress = action.progress;
                }
                return upload;
            });
        case UPLOAD_NETWORK_ERROR:
            return state.map(upload => {
                if (upload.id === action.id) {
                    upload.status = 'error'
                }
                return upload;
            });
        case UPLOAD_COMPLETE:
            return state.map(upload => {
                if (upload.id === action.id) {
                    upload.progress = 100;
                    upload.status = 'complete'
                }
                return upload;
            })
        default:
            return state;
    }
}

export default function entities(state = initialState, action) {
    switch(action.type) {
        case UPLOAD_NEW:
        case UPLOAD_EDIT:
        case UPLOAD_PAUSE:
        case UPLOAD_REMOVE:
        case UPLOAD_NETWORK_PROGRESS:
        case UPLOAD_NETWORK_ERROR:
        case UPLOAD_COMPLETE:
            return Object.assign({}, state, {
                uploads: entitiesUploads(state.uploads, action),
            });
        default:
            return state;
    }
}
