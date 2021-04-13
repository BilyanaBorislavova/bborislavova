import './title-with-icon.scss';

import * as React from 'react';
import { getClassName } from '../../utils/string-utils';

interface TitleWithIconProps {
    title: string,
    icon: React.ReactNode,
    className?: string,
}

const TitleWithIcon: React.FC<TitleWithIconProps> = ({ title, icon, className = '' }) => {
    const combinedClassName = getClassName({
        'title-with-icon': true,
        [className]: !!className.length,
    });

    return (
        <h3 className={combinedClassName}>
            {icon}
            {title}
        </h3>
    )
}

export default TitleWithIcon;
