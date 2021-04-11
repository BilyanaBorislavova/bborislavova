import './styles/styles.scss';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import { URLs } from './constants/constants';

const { home, resume, portfolio, skills, contact } = URLs;

const App = () => (
  <main className="page-content">
    <Navigation />
    <BrowserRouter>
      <Switch>
        <Route path={home} component={Home} />
        <Route path={resume} component={Home} />
        <Route path={skills} component={Home} />
        <Route path={portfolio} component={Home} />
        <Route path={contact} component={Home} />
      </Switch>
    </BrowserRouter>
  </main>
);

export default App;
