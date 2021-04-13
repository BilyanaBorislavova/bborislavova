import './resume-title-with-icon.scss';

import * as React from 'react';
import TitleWithIcon from '../title/title-with-icon';

interface ResumeTitleWithIconProps {
    title: string,
    icon: React.ReactNode,
};

const ResumeTitleWithIcon: React.FC<ResumeTitleWithIconProps> = ({ title, icon }) => (
    <TitleWithIcon
      title={title}
      icon={icon}
      className="resume-title-with-icon"
    />
);

export default ResumeTitleWithIcon;
