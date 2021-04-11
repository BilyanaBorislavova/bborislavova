import * as React from 'react';
import { GithubLogo } from '../icons/icons';
import SocialMediaIcon from './social-media-icon';

const GithubIcon: React.FC<{}> = () => (
    <SocialMediaIcon
      className="github-icon"
      icon={<GithubLogo />}
      href=""
    />
);

export default GithubIcon;
