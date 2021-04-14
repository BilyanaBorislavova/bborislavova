import './portfolio.scss';

import softUniLogo from '../../assets/images/portfolio-logos/softuni-logo.jpg';
import softwareUniversityLogo from '../../assets/images/portfolio-logos/software-university-logo.jpg';
import softUniCreativeLogo from '../../assets/images/portfolio-logos/softuni-creative-logo.jpg';
import softUniDigitalLogo from '../../assets/images/portfolio-logos/softuni-digital-logo.jpg';
import softUniKidsLogo from '../../assets/images/portfolio-logos/softuni-kids-logo.jpg';

import * as React from 'react';
import PageContentWrapper from '../page-content-wrapper';
import PortfolioCard from './portfolio-card';

const portfolioProjectsData = [
    {
        id: 1,
        title: 'SoftUni International',
        imgSrc: softUniLogo,
        description: '123',
        href: 'http://softuni.org/',
    },
    {
        id: 1,
        title: 'Software University',
        imgSrc: softwareUniversityLogo,
        description: '123',
        href: 'http://softuni.bg/',
    },
    {
        id: 1,
        title: 'SoftUni Creative',
        imgSrc: softUniCreativeLogo,
        description: '123',
        href: 'http://creative.softuni.bg/',
    },
    {
        id: 1,
        title: 'SoftUni Digital',
        imgSrc: softUniDigitalLogo,
        description: '123',
        href: 'http://digital.softuni.bg/',
    },
    {
        id: 1,
        title: 'SoftUni Kids',
        imgSrc: softUniKidsLogo,
        description: '123',
        href: 'http://kids.softuni.bg/',
    },
]

const Portfolio: React.FC<{}> = () => (
    <PageContentWrapper
      title="Portfolio"
      className="portfolio"
    >
        <ul className="portfolio-list">
            {
                portfolioProjectsData.map(({ id, title, imgSrc, description, href }) => (
                    <li
                      key={id}
                      className="portfolio-list-item"
                    >
                        <PortfolioCard
                          title={title}
                          imgSrc={imgSrc}
                          description={description}
                          href={href}
                        />
                    </li>
                ))
            }
        </ul>
    </PageContentWrapper>
);

export default Portfolio;
