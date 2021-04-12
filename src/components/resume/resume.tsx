import './resume.scss';

import * as React from 'react';
import PageContentWrapper from '../page-content-wrapper';
import ResumeEducation from './resume-education';
import ResumeWork from './resume-work';

const Resume: React.FC<{}> = () => (
    <PageContentWrapper
      className="resume"
      title="Resume"
    >
        <ResumeWork />
    </PageContentWrapper>
);

export default Resume;
