import './styles/styles.scss';

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import { URLs } from './constants/constants';

const { home, resume, portfolio, skills, contact } = URLs;

const App = () => (
  <main className="page-content">
    <Navigation />
      <Switch>
        <Route path={home} component={Home} />
        <Route path={resume} component={Home} />
        <Route path={skills} component={Home} />
        <Route path={portfolio} component={Home} />
        <Route path={contact} component={Home} />
      </Switch>
  </main>
);

export default App;
