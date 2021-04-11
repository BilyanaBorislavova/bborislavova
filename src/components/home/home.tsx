import './home.scss';

import * as React from 'react';
import PageContentWrapper from '../page-content-wrapper';
import HomeHeader from './home-header';
import HomeContent from './home-content';
import HomeFooter from './home-footer';

const Home: React.FC<{}> = () => (
    <PageContentWrapper className="home">
        <HomeHeader />
        <HomeContent />
        <HomeFooter />
    </PageContentWrapper>
);

export default Home;
