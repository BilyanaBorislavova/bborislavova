import './skills-title-with-icon.scss';

import * as React from 'react';
import TitleWithIcon from '../title/title-with-icon';

interface SkillsTitleWithIconProps {
    title: string,
    icon: React.ReactNode,
}

const SkillsTitleWithIcon: React.FC<SkillsTitleWithIconProps> = ({ title, icon }) => (
    <TitleWithIcon
      title={title}
      icon={icon}
      className="skills-title-with-icon"
    />
);

export default SkillsTitleWithIcon;
