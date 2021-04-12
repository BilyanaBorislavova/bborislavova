import './resume-card.scss';

import * as React from 'react';
import { getClassName } from '../../utils/string-utils';

interface ResumeCardProps {
    title: string,
    info: string,
    content: string,
    className?: string,
}

const ResumeCard: React.FC<ResumeCardProps> = ({ title, info, content, className = '' }) => {
    const combinedClassName = getClassName({
        'resume-card': true,
        [className]: !!className.length,
    });

    return (
        <article className={combinedClassName}>
            <h3 className="resume-card-title">
                {title}
            </h3>
            <span className="resume-card-info">
                {info}
            </span>
            <p className="resume-card-content">
                {content}
            </p>
        </article>
    );
};

export default ResumeCard;
