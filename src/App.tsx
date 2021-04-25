import "./styles/styles.scss";

import * as React from "react";
import { Switch, Route } from "react-router-dom";

import { URLs } from "./constants/constants";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import Resume from "./components/resume/resume";
import Skills from "./components/skills/skills";
import Portfolio from "./components/portfolio/portfolio";
import ToggleThemeButton from "./components/toggle-theme-button";
import ThemeContext from "./context/theme-context";
import { DEFAULT_THEMES } from './providers/theme-provider';
import { getClassName } from "./utils/string-utils";

const { resume, portfolio, skills } = URLs;
const { LIGHT, DARK } = DEFAULT_THEMES;

const App = () => {
  const { theme } = React.useContext(ThemeContext);
  
  const combinedClassName = getClassName({
    'dark-theme': theme === DARK,
    'light-theme': theme === LIGHT,
  });

  return (
    <main className={combinedClassName}>
      <ToggleThemeButton />
      <section className="page-content">
        <Navigation />
        <Home />
        <Switch>
          <Route path={resume} component={Resume} />
          <Route path={skills} component={Skills} />
          <Route path={portfolio} component={Portfolio} />
        </Switch>
      </section>
    </main>
  );
};

export default App;
