import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import EditUpload from './containers/EditUpload';
import ListUpload from './containers/ListUpload';
import NewUpload from './containers/NewUpload';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ListUpload} />
        <Route path="/new" component={NewUpload} />
        <Route path="/edit" component={EditUpload} />
    </Route>
);
