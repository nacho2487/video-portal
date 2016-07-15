import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import VideosPage from './components/video/VideoPage';
import LoginPage from './components/login/LoginPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={VideosPage} />
    <Route path="login" component={LoginPage}></Route>
	</Route>
);
