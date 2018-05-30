import React from 'react';
import './styles/style.css';
import UserListContainer from './containers/UserListContainer';
import TodoListContainer from './containers/TodoListContainer';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';
import FullMap from './containers/FullMap';

const App = () => {
    return <Switch>
        <Route exact path='/' component={UserListContainer}/>
        <Route path='/todos/:userId' component={TodoListContainer}/>
        <Route path='/fullmap' component={FullMap} />
        <Route component={NoMatch} />
    </Switch>
};

export default App;
