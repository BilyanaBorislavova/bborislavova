import * as React from 'react';
import { getClassName } from '../../utils/string-utils';
import SkillsTitleWithIcon from './skills-title-with-icon';

interface SkillsSectionProps {
    title: string,
    icon: React.ReactNode,
    children: React.ReactNode,
    className?: string,
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, icon, children, className = '' }) => {
    const combinedClassName = getClassName({
        'skills-section': true,
        [className]: !!className.length,
    });
    
    return (
        <section className={combinedClassName}>
            <SkillsTitleWithIcon
              title={title}
              icon={icon}
            />
            {children}
        </section>
    );
};

export default SkillsSection;
