import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

const Heading: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children }) => (
    <Inner>{children}</Inner>
);

const Inner = styled.h1`
    font-family: 'Archivo Black', sans-serif;
    font-size: 50px;
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
`;

export default Heading;
