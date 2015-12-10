import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';
import entities from './entities';

const rootReducer = combineReducers({
    entities,
    router,
});

export default rootReducer;
