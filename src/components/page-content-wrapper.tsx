import './page-content-wrapper.scss';

import * as React from 'react';
import { getClassName } from '../utils/string-utils';

interface PageContentWrapperProps {
    children: React.ReactNode,
    className?: string,
    title?: string,
};

const PageContentWrapper: React.FC<PageContentWrapperProps> = ({ children, title = '', className = '' }) => {
    const combinedClassName = getClassName({
        'page-content-wrapper': true,
        [className]: !!className.length,
    });

    return (
        <section className={combinedClassName}>
            {
                title && (
                    <h2 className="page-content-wrapper-title">
                        {title}
                    </h2>
                )
            }
            {children}
        </section>
    );
};

export default PageContentWrapper;
