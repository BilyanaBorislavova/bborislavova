import './resume.scss';

import * as React from 'react';
import PageContentWrapper from '../page-content-wrapper';
import ResumeWork from './resume-work';
import ResumeEducation from './resume-education';

const Resume: React.FC<{}> = () => (
    <PageContentWrapper
      className="resume"
      title="Resume"
    >
        <ResumeWork />
        <ResumeEducation />
    </PageContentWrapper>
);

export default Resume;
