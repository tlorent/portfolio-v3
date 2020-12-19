import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../constants/theme';
import GlobalStyle from '../globalStyling';
import Menu from './Menu';
import SEO from './SEO';

const Layout: FC = ({ children }) => {
    return (
        <>
            <SEO />
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <Menu />
                    {children}
                </Container>
            </ThemeProvider>
        </>
    );
};

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.main};
    padding: 40px;
    padding-bottom: 60px;
    min-width: 100vw;
    min-height: 100vh;
    overflow: hidden;

    @media (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
        padding: 40px 90px;
    }
`;

export default Layout;
