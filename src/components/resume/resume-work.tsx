import * as React from 'react';
import { SuitcaseIcon } from '../icons/icons';
import ResumeCard from './resume-card';
import ResumeTitleWithIcon from './resume-title-with-icon';

const ResumeWork: React.FC<{}> = () => (
    <section className="resume-work">
        <ResumeTitleWithIcon
          title="Work Experience"
          icon={<SuitcaseIcon />}
        />
        <ResumeCard
          title="Front End Developer"
          info="Software University - Sep 2019 - Present"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <ResumeCard
          title="Resource Designer - Trainee"
          info="Software University - Feb 2019 - Sep 2019"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
    </section>
);

export default ResumeWork;
