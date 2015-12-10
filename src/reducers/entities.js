import merge from 'lodash/object/merge';

const initialState = {
    devices: [{
        id: 1,
        name: 'MRI',
    }, {
        id: 2,
        name: 'MEG',
    }],
    uploads: [{
        id: 3,
        studyId: 100,
        deviceId: 1,
        files: [6, 7, 8],
        ursi: 'M1000000',
    }, {
        id: 4,
        studyId: 101,
        deviceId: 1,
        files: [9, 10],
        ursi: 'M1000001'
    }, {
        id: 5,
        studyId: 100,
        deviceId: 2,
        files: [11, 12],
        ursi: 'M1000002',
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
};

export default function entities(state = initialState, action) {
    //debugger;
    if (action.response && action.response.entities) {
        return merge({}, state, action.response.entities);
    }

    return state;
}
