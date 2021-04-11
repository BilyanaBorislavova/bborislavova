import './generic-navigation-cta.scss';

import * as React from 'react';
import GenericCta from './generic-cta';

interface GenericNavigationCtaProps {
    text: string,
    href: string,
};

const GenericNavigationCta: React.FC<GenericNavigationCtaProps> = ({ text, href }) => (
    <GenericCta
      text={text}
      href={href}
      className="generic-navigation-cta"
    />
);

export default GenericNavigationCta;
