import * as React from 'react';
import { CodingIcon } from '../icons/icons';
import SkillWithText from './skill-with-text';
import SkillsSection from './skills-section';

const CodingSkillsSection: React.FC<{}> = () => (
    <SkillsSection
      title="Coding Skills"
      icon={<CodingIcon />}
      className="coding-skills-section"
    >
        <article className="coding-skills-section-content">
            <SkillWithText
              text="JavaScript"
              numberToIncrementTo={70}
            />
            <SkillWithText
              text="React"
              numberToIncrementTo={70}
            />
            <SkillWithText
              text="HTML / CSS"
              numberToIncrementTo={70}
            />
            <SkillWithText
              text="SASS / SCSS"
              numberToIncrementTo={70}
            />
            <SkillWithText
              text="jQuery"
              numberToIncrementTo={70}
            />
        </article>
    </SkillsSection>
);

export default CodingSkillsSection;
