import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import ClassList from './components/ClassList';
import Student from './components/Student';

class Routes extends React.Component {
    render() {
        return(
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/classlist/:class" component={ClassList} />
                <Route path="/:class/student/:studentId" component={Student} />
            </Switch>
        );
    }
}

export default Routes;