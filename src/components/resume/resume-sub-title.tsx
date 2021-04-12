import './resume-title-with-icon.scss';

import * as React from 'react';

interface ResumeSubTitleProps {
    title: string,
    icon: React.ReactNode,
};

const ResumeTitleWithIcon: React.FC<ResumeSubTitleProps> = ({ title, icon }) => (
    <h3 className="resume-title-with-icon">
        {icon}
        {title}
    </h3>
);

export default ResumeTitleWithIcon;
