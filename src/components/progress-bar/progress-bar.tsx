import './animated-progress-bar.scss';

import * as React from 'react';
import { Line } from 'rc-progress';
import { increaseNumber } from '../../utils/func-utils';
import { getClassName } from '../../utils/string-utils';

interface ProgressBarProps {
    children: React.ReactNode,
    numberToIncrementTo: number,
    timeoutInMs?: number,
    strokeColor?: string,
    strokeWidth?: number,
    shouldShowPercentage?: boolean,
    className?: string,
}

const NUMBER_TO_INCREMENT_WITH = 1;
const TIMEOUT_IN_MS = 75;
const MAX_NUMBER_TO_INCREMENT_TO = 100;
const DEFAULT_STROKE_COLOR = '#19f6e8';
const DEFAULT_STROKE_WIDTH = 1;

const ProgressBar: React.FC<ProgressBarProps> = ({
    children,
    numberToIncrementTo,
    timeoutInMs = TIMEOUT_IN_MS,
    strokeColor = DEFAULT_STROKE_COLOR,
    strokeWidth = DEFAULT_STROKE_WIDTH,
    shouldShowPercentage,
    className = '',
}) => {
    const [ percent, setPercent ] = React.useState(0);

    const combinedClassName = getClassName({
      'animated-progress-bar': true,
      [className]: !!className.length,  
    });

    const maxNumberToIncrementTo = numberToIncrementTo
        ? numberToIncrementTo
        : MAX_NUMBER_TO_INCREMENT_TO;

    React.useEffect(() => {
        increaseNumber(
            percent,
            NUMBER_TO_INCREMENT_WITH,
            setPercent,
            timeoutInMs,
            maxNumberToIncrementTo
        );
    }, [ percent, maxNumberToIncrementTo, timeoutInMs ]);

    const percentageText = (
        shouldShowPercentage && <p className="animated-progress-bar-content">
            {`${percent}%`}
        </p>
    );

    return (
        <section className={combinedClassName}>
            <article className="animated-progress-bar-content-wrapper">
                {children}
                {percentageText}
            </article>
            <Line
              percent={percent}
              strokeColor={strokeColor}
              strokeWidth={strokeWidth}
              trailWidth={strokeWidth}
            />
        </section>
    );
};

export default ProgressBar;
