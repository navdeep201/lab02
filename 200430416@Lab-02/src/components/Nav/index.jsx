import React from 'react';

// You're likely missing some imports...
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Styles from './styles';
import About from '../About/index';
import Home from '../Home/index';

// Don't forget to import your components

const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Styles.Nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>


      </Switch>
    </Router>
  );
}

export default Nav;