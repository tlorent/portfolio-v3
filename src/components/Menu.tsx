import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';
import Body from './Body';

const Menu: FC = () => (
    <Navigation>
        <NavItems>
            <Logo src="logo.png" />
            <NavLinks>
                <Link to="/projects">
                    <Body>projects</Body>
                </Link>
                <Link to="/about">
                    <Body>about</Body>
                </Link>
            </NavLinks>
        </NavItems>
    </Navigation>
);

const Navigation = styled.nav`
    height: 50px;
    margin-bottom: 80px;
    background-color: ${({ theme }) => theme.colors.main};

    @media (min-width: ${({ theme }) => theme.mediaQueries.large}) {
        margin-bottom: 140px;
    }
`;

const NavItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;
    cursor: pointer;

    :hover {
        transform: scale(1.1);
    }

    @media (min-width: ${({ theme }) => theme.mediaQueries.large}) {
        width: 40px;
        height: 40px;
    }
`;

const NavLinks = styled.div`
    display: flex;
    min-width: 170px;
    justify-content: space-between;
    align-items: center;

    p {
        font-family: 'Archivo Black', sans-serif;
        position: relative;
        transition: all 0.3s ease;

        &:hover {
            &:before {
                width: 100%;
            }
        }

        &:before {
            content: '';
            position: absolute;
            height: 3px;
            background-color: ${({ theme }) => theme.colors.yellow};
            bottom: 0px;
            width: 0%;
            transition: width 0.3s ease-out 0s;
        }
    }
`;

export default Menu;
