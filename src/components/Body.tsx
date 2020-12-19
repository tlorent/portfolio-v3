import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

const Body: FC<HTMLAttributes<HTMLParagraphElement>> = ({
    children,
    ...props
}) => <Inner {...props}>{children}</Inner>;

const Inner = styled.p`
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    line-height: ${({ theme }) => theme.lineHeights.regular};
`;

export default Body;
