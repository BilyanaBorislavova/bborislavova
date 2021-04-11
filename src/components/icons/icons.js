import * as React from 'react';
import SvgIcon from './svg-icon';

import instagramLogo from '../../assets/icons/instagram.svg';
import facebookLogo from '../../assets/icons/facebook.svg';
import githubLogo from '../../assets/icons/github.svg';
import linkedinLogo from '../../assets/icons/linkedin.svg'

const createIcon = src => props => <SvgIcon src={src} {...props} />;

const InstagramLogo = createIcon(instagramLogo);
const FacebookLogo = createIcon(facebookLogo);
const GithubLogo = createIcon(githubLogo);
const LinkedinLogo = createIcon(linkedinLogo);

export {
    InstagramLogo,
    FacebookLogo,
    GithubLogo,
    LinkedinLogo,
};
