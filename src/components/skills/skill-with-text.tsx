import React from 'react';
import ProgressBar from '../progress-bar/progress-bar';

interface SkillWithTextProps {
    text: string,
    numberToIncrementTo: number,
}

const SkillWithText: React.FC<SkillWithTextProps> = ({ text, numberToIncrementTo }) => (
    <ProgressBar
      className="skill-with-text"
      strokeColor='#313131'
      strokeWidth='3'
      numberToIncrementTo={numberToIncrementTo}
      timeoutInMs={15}
      shouldShowPercentage={false}
    >
        {text}
    </ProgressBar>
);

export default SkillWithText;
