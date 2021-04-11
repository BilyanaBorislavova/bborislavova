import * as React from 'react';
import { LinkedinLogo } from '../icons/icons';
import SocialMediaIcon from './social-media-icon';

const LinkedinIcon: React.FC<{}> = () => (
    <SocialMediaIcon
      className="linkedin-icon"
      icon={<LinkedinLogo />}
      href=""
    />
);

export default LinkedinIcon;
