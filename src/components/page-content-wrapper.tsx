import './page-content-wrapper.scss';

import * as React from 'react';
import { getClassName } from '../utils/string-utils';

interface PageContentWrapperProps {
    children: React.ReactNode,
    className?: string,
};

const PageContentWrapper: React.FC<PageContentWrapperProps> = ({ children, className = '' }) => {
    const combinedClassName = getClassName({
        'page-content-wrapper': true,
        [className]: !!className.length,
    });

    return (
        <section className={combinedClassName}>
            {children}
        </section>
    );
};

export default PageContentWrapper;
