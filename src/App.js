import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Component/Home/index';
import History from './Component/History/index';
import './index.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <div>
                <NavLink activeClassName="lien-active" exact to="/"> Accueil </NavLink>
                <NavLink activeClassName="lien-active" to="/notre-histoire"> History </NavLink>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/notre-histoire" component={History} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;