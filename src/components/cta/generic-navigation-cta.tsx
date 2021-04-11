import './generic-navigation-cta.scss';

import * as React from 'react';
import GenericCta from './generic-cta';
import { getClassName } from '../../utils/string-utils';

interface GenericNavigationCtaProps {
    text: string,
    href: string,
    className?: string,
};

const GenericNavigationCta: React.FC<GenericNavigationCtaProps> = ({ text, href, className = '' }) => {
    const combinedClassName = getClassName({
      'generic-navigation-cta': true,
      [className]: !!className.length,
    });
    
    return (
      <GenericCta
        text={text}
        href={href}
        className={combinedClassName}
      />
    );
};

export default GenericNavigationCta;
