import * as React from 'react';
import { FacebookLogo } from '../icons/icons';
import SocialMediaIcon from './social-media-icon';

const FacebookIcon: React.FC<{}> = () => (
    <SocialMediaIcon
      className="facebook-icon"
      icon={<FacebookLogo />}
      href=""
    />
);

export default FacebookIcon;
