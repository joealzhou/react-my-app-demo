import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/home';
import DetailPage from '../pages/detail';
import NoMatch from '../pages/404';
import User from '../pages/user';

export default () => {
    return (
    <Switch>
        <Route exact path="/detail" component={DetailPage}/>
        <Route exact path="/user/:name" component={User}/>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
    </Switch>
    )
}