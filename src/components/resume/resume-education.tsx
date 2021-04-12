import * as React from 'react';
import { GraduationHatIcon } from '../icons/icons';
import ResumeTitleWithIcon from './resume-sub-title';
import ResumeCard from './resume-card';

const ResumeEducation: React.FC<{}> = () => (
    <section className="resume-education">
        <ResumeTitleWithIcon
          title="Education"
          icon={<GraduationHatIcon />}
        />
        <ResumeCard
          title="JavaScript Web Developer"
          info="Software University - 2017 - 2019"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
    </section>
);

export default ResumeEducation;
