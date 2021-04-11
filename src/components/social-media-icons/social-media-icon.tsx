import * as React from 'react';
import { getClassName } from '../../utils/string-utils';

interface SocialMediaIconProps {
    icon: React.ReactNode,
    href: string,
    className?: string,
}
const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ className = '', href, icon }) => {
    const combinedClassName = getClassName({
        'social-media-icon': true,
        [className]: !!className.length,
    });

    return (
        <a
          href={href}
          className={combinedClassName}
        >
            {icon}
        </a>
    );
};

export default SocialMediaIcon;
