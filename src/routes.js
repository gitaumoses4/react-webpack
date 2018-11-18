import React, {Component} from 'react';
import {ROUTES} from "./utilities/routes";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Landing from "./components/Landing";
import Login from "./containers/Login";
import {getCurrentUser, isAdmin} from "./utilities/authentication";
import Register from "./containers/Register";
import Dashboard from "./containers/User/Dashboard";

class AuthenticatedRoute extends Component {

    constructor(props) {
        super(props);
        this.user = getCurrentUser();
        this.isAuthenticated = this.user != null;
    }

    renderIfNotAuthenticated = (component) => (
        this.props.path === ROUTES.login || this.props.path === ROUTES.register ?
            (component) :
            (<Redirect to={{pathname: ROUTES.login}}/>)
    );

    renderIfAuthenticated = (component) => (
        component
    );

    render() {
        const {component: Component, ...rest} = this.props;
        return (
            <Route
                {...rest}
                render={props => (
                    this.isAuthenticated ?
                        (this.renderIfAuthenticated(<Component {...props} user={this.user}/>)) :
                        (this.renderIfNotAuthenticated(<Component {...props} user={this.user}/>))
                )}
            />
        )
    }
}

class UserRoute extends AuthenticatedRoute {
    renderIfAuthenticated = (component, props) => (
        this.props.path === ROUTES.login || this.props.path === ROUTES.register ? (
            <Redirect
                to={{pathname: isAdmin() ? ROUTES.admin.index : ROUTES.user.index, state: {from: props.location}}}/>
        ) : (
            super.renderIfAuthenticated(component, props)
        )
    )
}

class AdminRoute extends UserRoute {
    renderIfAuthenticated = (component, props) => (
        isAdmin() ? super.renderIfAuthenticated(component, props) :
            (
                <Redirect to={{pathname: ROUTES.user.index, state: {from: props.location}}}/>
            )
    )
}

export default () => (
    <Router>
        <Switch>
            <Route exact path={ROUTES.index} component={Landing}/>
            <UserRoute exact path={ROUTES.login} component={Login}/>
            <UserRoute exact path={ROUTES.register} component={Register}/>
            <Route exact path={ROUTES.user.index} component={Dashboard}/>
        </Switch>
    </Router>
);
