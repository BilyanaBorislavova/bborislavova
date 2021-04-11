import * as React from 'react';
import { getClassName } from '../../utils/string-utils';

interface GenericCtaProps {
    text: string,
    href: string,
    children?: React.ReactNode,
    className?: string,
};

const GenericCta: React.FC<GenericCtaProps> = ({ text, href, children, className = '' }) =>{
    const combinedClassName = getClassName({
        'generic-cta': true,
        [className]: !!className.length,
    });

    return (
      <a
        className={combinedClassName}
        href={href}
      >
          {text}
          {children}
      </a>  
    );
}

export default GenericCta;
