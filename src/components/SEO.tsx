import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

const SEO: FC = () => (
    <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Source+Sans+Pro:wght@300;400;700&display=swap"
            rel="stylesheet"
        />
    </Helmet>
);

export default SEO;
