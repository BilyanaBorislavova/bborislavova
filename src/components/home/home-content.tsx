import './home-content.scss';

import * as React from 'react';
import HomeContactInfo from './home-contact-info';

const HomeContent: React.FC<{}> = () => (
    <article className="home-content">
        <h1 className="home-content-title">
            Hello, I`m
            <span className="home-content-title-name">
                Bilyana Borislavova!
            </span>
        </h1>
        <h3 className="home-content-occupation">
            Front End Developer
        </h3>
        <p className="home-content-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse dolor nihil provident totam eum, nemo eius temporibus molestias neque ex earum magnam fugit sunt sed minus assumenda fugiat possimus.
        </p>
        <HomeContactInfo />
    </article>
);

export default HomeContent;
