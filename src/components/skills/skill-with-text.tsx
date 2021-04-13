import React from 'react';
import ProgressBar from '../progress-bar/progress-bar';

interface SkillWithTextProps {
    text: string,
    numberToIncrementTo: number,
    props?: any,
}

const SkillWithText: React.FC<SkillWithTextProps> = ({ text, numberToIncrementTo, ...props }) => (
    <ProgressBar
      className="skill-with-text"
      numberToIncrementTo={numberToIncrementTo}
      timeoutInMs={15}
      shouldShowPercentage
      {...props}
    >
        {text}
    </ProgressBar>
);

export default SkillWithText;
