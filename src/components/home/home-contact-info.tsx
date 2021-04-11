import './home-contact-info.scss';

import * as React from 'react';

const HomeContactInfo: React.FC<{}> = () => (
    <article className="home-contact-info">
        <span className="home-contact-info-email">
            email: happy.bozanko@gmail.com
        </span>
        <span className="home-contact-info-phone">
            phone: +359 882 514 092
        </span>
    </article>
);

export default HomeContactInfo;
