import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';
import entities from './entities';
import { ADD_FILES, ADD_UPLOAD, EDIT_UPLOAD, REMOVE_FILES } from '../actions';
import merge from 'lodash/object/merge';

const initialUploadState = {
    date: null,
    deviceId: null,
    files: [],
    sessionId: null,
    studyId: null,
    ursi: null,
    user: 'test-username', //TODO: Don't hard code!
    visitDate: null,
};

/** @todo  Figure out a better state tree */
function upload(state = initialUploadState, action) {
    switch(action.type) {
        case ADD_UPLOAD:
        case EDIT_UPLOAD:
            return merge({}, state, action.upload);
        case ADD_FILES:
            return Object.assign({}, state, {
                files: state.files.concat(action.files),
            });
        case REMOVE_FILES:
            return Object.assign({}, state, {
                files: state.files.filter(file => {
                    return !action.files.some(x => x.name === file.name);
                }),
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    entities,
    router,
    upload,
});

export default rootReducer;
