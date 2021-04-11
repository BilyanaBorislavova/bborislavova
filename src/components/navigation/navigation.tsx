import * as React from 'react';
import GenericNavigationCta from '../cta/generic-navigation-cta';

const navData = [
  {
    id: 1,
    text: 'Home',
    href: '',
  },
  {
    id: 2,
    text: 'Resume',
    href: '',
  },
  {
    id: 3,
    text: 'Skills',
    href: '',
  },
  {
    id: 4,
    text: 'Portfolio',
    href: '',
  },
  {
    id: 5,
    text: 'Contact',
    href: '',
  },
];

const Navigation: React.FC<{}> = () => (
    <nav className="navigation">
      <ul className="navigation-list">
          {
            navData.map(({ id, text, href }) => (
              <li key={id}>
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
