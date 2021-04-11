import * as React from 'react';
import { SuitcaseIcon } from '../icons/icons';
import ResumeSubTitle from './resume-sub-title';

const ResumeWork: React.FC<{}> = () => (
    <section className="resume-work">
        <ResumeSubTitle
          title="Work Experience"
          icon={<SuitcaseIcon />}
        />
    </section>
);

export default ResumeWork;
