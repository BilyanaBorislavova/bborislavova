import './styles/styles.scss';

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { URLs } from './constants/constants';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import Resume from './components/resume/resume';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';

const { home, resume, portfolio, skills } = URLs;

const App = () => (
  <main className="page-content">
    <Navigation />
    <Home />
      <Switch>
        <Route path={resume} component={Resume} />
        <Route path={skills} component={Skills} />
        <Route path={portfolio} component={Portfolio} />
      </Switch>
  </main>
);

export default App;
