import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import EditUpload from './containers/EditUpload';
import NewUpload from './containers/NewUpload'

export default (
    <Route path="/" component={App}>
        <Route path="/new" component={NewUpload} />
        <Route path="/edit" component={EditUpload} />
    </Route>
);
