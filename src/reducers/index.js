import { routerStateReducer as router } from 'redux-router'
import { combineReducers } from 'redux'

function dummyReducer(state = {}, action) {
    return state;
}

const rootReducer = combineReducers({
    dummyKey: dummyReducer,
    router,
});

export default rootReducer;
