import React from 'react';
import { Switch,Redirect } from 'react-router-dom';
import AppliedRoute from './AppliedRoute';
import Home from './Home';
import Profile from "./components/profile/profile";
import {PrivateRoute} from './components/privateRoute/privateRoute';
export default ({ childProps }) => (
	<Switch>
		<PrivateRoute exact path="/profile" component={Profile} />
		<AppliedRoute path="/" exact component={Home} props={childProps} />
		<Redirect from="*" to="/" />
	</Switch>
);
