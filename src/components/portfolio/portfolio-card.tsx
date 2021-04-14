import './portfolio-card.scss';

import * as React from 'react';

interface PortfolioCardProps {
    imgSrc: string,
    title: string,
    description: string,
    href: string,
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ imgSrc, title, description, href }) => (
    <a
      className="portfolio-card"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
        <img
          src={imgSrc}
          className="portfolio-card-image"
          alt={title}
        />
        <article className="portfolio-card-content">
            <h2 className="portfolio-card-content-title">
                {title}
            </h2>
            <p className="portfolio-card-content-description">
                {description}
            </p>
        </article>
    </a>
);

export default PortfolioCard;
