import { Route, Switch } from 'react-router'
import React from 'react';
import Home from './components/Home';
import User from './components/User';
const MyRoutes =() => {
    return(
        <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/user/:username" component={User} />
        <Route  component={Home} />
      </Switch>
    );
}

export default MyRoutes;