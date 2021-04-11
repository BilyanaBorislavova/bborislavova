import * as React from 'react';
import { InstagramLogo } from '../icons/icons';
import SocialMediaIcon from './social-media-icon';

const InstagramIcon: React.FC<{}> = () => (
    <SocialMediaIcon
      className="instagram-icon"
      icon={<InstagramLogo />}
      href=""
    />
);

export default InstagramIcon;
