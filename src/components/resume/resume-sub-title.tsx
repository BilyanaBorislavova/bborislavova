import './resume-sub-title.scss';

import * as React from 'react';

interface ResumeSubTitleProps {
    title: string,
    icon: React.ReactNode,
};

const ResumeSubTitle: React.FC<ResumeSubTitleProps> = ({ title, icon }) => (
    <h3 className="resume-sub-title">
        {icon}
        {title}
    </h3>
);

export default ResumeSubTitle;
