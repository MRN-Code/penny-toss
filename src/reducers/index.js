import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';
import entities from './entities';
import { ADD_FILES, REMOVE_FILES, UPLOAD_NEW } from '../actions';
import merge from 'lodash/object/merge';

// const initialUploadState = {
//     date: null,
//     deviceId: null,
//     files: [],
//     segmentIntervalId: null,
//     studyId: null,
//     ursi: null,
//     user: 'test-username', //TODO: Don't hard code!
//     visitDate: null,
// };

const initialUiState = {
    upload: null,
    files: [],
};

/** @todo  Figure out a better state tree */
function uiActive(state = initialUiState, action) {
    switch(action.type) {
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
        case UPLOAD_NEW:
            return Object.assign({}, state, { upload: action.upload.id });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    entities,
    router,
    uiActive,
});

export default rootReducer;
