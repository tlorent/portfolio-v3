import React, { FC } from 'react';
import styled from 'styled-components';

const Grid: FC = ({ children }) => <GridContainer>{children}</GridContainer>;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 70px);
    column-gap: 40px;
    row-gap: 0px;
    margin: 0 90px;
    height: 100vh;
`;

// const GridRow = styled.div`
// `;

export default Grid;
