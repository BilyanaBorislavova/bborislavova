import * as React from 'react';
import PageContentWrapper from '../page-content-wrapper';
import CodingSkillsSection from './coding-skills-section';
import LanguagesSkillsSection from './languages-skills-section';

const Skills: React.FC<{}> = () => (
    <PageContentWrapper
      title="Skills"
      className="skills"
    >
        <CodingSkillsSection />
        <LanguagesSkillsSection />
    </PageContentWrapper>
);

export default Skills;
