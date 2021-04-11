import './navigation.scss';

import * as React from 'react';
import GenericNavigationCta from '../cta/generic-navigation-cta';

const navData = [
  {
    id: 1,
    text: 'Home',
    href: '#home',
  },
  {
    id: 2,
    text: 'Resume',
    href: '#resume',
  },
  {
    id: 3,
    text: 'Skills',
    href: '#skills',
  },
  {
    id: 4,
    text: 'Portfolio',
    href: '#portfolio',
  },
  {
    id: 5,
    text: 'Contact',
    href: '#contact',
  },
];

const Navigation: React.FC<{}> = () => (
    <nav className="navigation">
      <ul className="navigation-list">
          {
            navData.map(({ id, text, href }) => (
              <li
                key={id}
                className="navigation-list-item"
              >
                <GenericNavigationCta
                  text={text}
                  href={href}
                />
              </li>)
            )
          }
      </ul>
    </nav>
);

export default Navigation;
