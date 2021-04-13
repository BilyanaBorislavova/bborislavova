import * as React from 'react';
import SvgIcon from './svg-icon';

import instagramLogo from '../../assets/icons/instagram.svg';
import facebookLogo from '../../assets/icons/facebook.svg';
import githubLogo from '../../assets/icons/github.svg';
import linkedinLogo from '../../assets/icons/linkedin.svg'
import graduationHatIcon from '../../assets/icons/graduation-hat.svg';
import suitcaseIcon from '../../assets/icons/suitcase.svg';
import codingIcon from '../../assets/icons/coding.svg';
import languagesIcon from '../../assets/icons/languages.svg';

const createIcon = src => props => <SvgIcon src={src} {...props} />;

const InstagramLogo = createIcon(instagramLogo);
const FacebookLogo = createIcon(facebookLogo);
const GithubLogo = createIcon(githubLogo);
const LinkedinLogo = createIcon(linkedinLogo);
const GraduationHatIcon = createIcon(graduationHatIcon);
const SuitcaseIcon = createIcon(suitcaseIcon);
const CodingIcon = createIcon(codingIcon);
const LanguagesIcon = createIcon(languagesIcon);

export {
    InstagramLogo,
    FacebookLogo,
    GithubLogo,
    LinkedinLogo,
    GraduationHatIcon,
    SuitcaseIcon,
    CodingIcon,
    LanguagesIcon,
};
