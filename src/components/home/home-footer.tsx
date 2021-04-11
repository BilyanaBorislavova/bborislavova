import './home-footer.scss';

import * as React from 'react';
import FacebookIcon from '../social-media-icons/facebook-icon';
import GithubIcon from '../social-media-icons/github-icon';
import InstagramIcon from '../social-media-icons/instagram-icon';
import LinkedinIcon from '../social-media-icons/linkedin-icon';

const HomeFooter: React.FC<{}> = () => (
    <section className="home-footer">
        <InstagramIcon />
        <FacebookIcon />
        <GithubIcon />
        <LinkedinIcon />
    </section>
);

export default HomeFooter;
