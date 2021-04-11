import './home-header.scss';

import * as React from 'react';

const HomeHeader: React.FC<{}> = () => (
    <section className="home-header">
        <img
          src="https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/e35/120500076_2810435175903781_2103389502367425261_n.jpg?tp=1&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=1QSkYFu2EjcAX9l73Ka&edm=AP_V10EAAAAA&ccb=7-4&oh=c5d0bc4c829610e0764edaf0a31b358c&oe=60996F98&_nc_sid=4f375e"
          alt="Yo, me"
          className="home-header-img"
        />
    </section>
)

export default HomeHeader;
