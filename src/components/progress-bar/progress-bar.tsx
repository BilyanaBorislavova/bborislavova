import './progress-bar.scss';

import * as React from 'react';
import { Line } from 'rc-progress';
import { increaseNumber } from '../../utils/func-utils';
import { getClassName } from '../../utils/string-utils';

const NUMBER_TO_INCREMENT_WITH = 1;
const TIMEOUT_IN_MS = 75;
const MAX_NUMBER_TO_INCREMENT_TO = 100;
const DEFAULT_STROKE_COLOR = '#00c7fe';
const DEFAULT_STROKE_WIDTH = 3;
const DEFAULT_TRAIL_WITH = 3;

interface ProgressBarProps {
    children: React.ReactNode,
    numberToIncrementTo: number,
    timeoutInMs?: number,
    strokeColor?: string,
    strokeWidth?: number,
    trailWidth?: number,
    shouldShowPercentage?: boolean,
    className?: string,
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    children,
    numberToIncrementTo,
    timeoutInMs = TIMEOUT_IN_MS,
    strokeColor = DEFAULT_STROKE_COLOR,
    strokeWidth = DEFAULT_STROKE_WIDTH,
    trailWidth = DEFAULT_TRAIL_WITH,
    shouldShowPercentage,
    className = '',
}) => {
    const [ percent, setPercent ] = React.useState(0);

    const combinedClassName = getClassName({
      'progress-bar': true,
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
        shouldShowPercentage && <p className="progress-bar-content-percentage">
            {`${percent}%`}
        </p>
    );

    return (
        <section className={combinedClassName}>
            <article className="progress-bar-content">
                {children}
                {percentageText}
            </article>
            <Line
              percent={percent}
              strokeColor={strokeColor}
              strokeWidth={strokeWidth}
              trailWidth={trailWidth}
            />
        </section>
    );
};

export default ProgressBar;
