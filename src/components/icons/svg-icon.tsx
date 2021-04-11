import * as React from 'react';
import { ReactSVG } from 'react-svg';

interface SvgIconProps {
    src: string,
    props?: object,
}

const SvgIcon: React.FC<SvgIconProps> = ({ src, props = {} }) => (
    <ReactSVG src={src} {...props} />
);

export default SvgIcon;
