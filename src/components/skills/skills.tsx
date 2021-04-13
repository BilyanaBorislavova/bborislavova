import * as React from 'react';
import PageContentWrapper from '../page-content-wrapper';
import CodingSkillsSection from './coding-skills-section';

const Skills: React.FC<{}> = () => (
    <PageContentWrapper title="Skills">
        <CodingSkillsSection />
    </PageContentWrapper>
);

export default Skills;
