import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ConnectedRouter as Router} from 'connected-react-router';
import {Route, Redirect, Switch} from 'react-router-dom';
import NotFound from './components/NotFound';
import route from '../router';


export default class App extends Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        const {store} = this.props;
        const state = store.getState();
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to={'/'}/>}/>
                    {route.map(i => <Route path={i.path} component={i.component} key={i.path} exact />)}
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}
