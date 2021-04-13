import * as React from 'react';
import { LanguagesIcon } from '../icons/icons';
import SkillWithText from './skill-with-text';
import SkillsSection from './skills-section';

const LanguagesSkillsSection: React.FC<{}> = () => (
    <SkillsSection
      title="Language Skills"
      icon={<LanguagesIcon />}
      className="laanguages-skills-section"
    >
        <article className="languages-skills-section-content">
            <SkillWithText
              text="Bulgarian - Native"
              numberToIncrementTo={70}
            />
            <SkillWithText
              text="English - C1"
              numberToIncrementTo={70}
            />
        </article>
    </SkillsSection>
);

export default LanguagesSkillsSection;
