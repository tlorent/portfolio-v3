import React, { FC } from 'react';
import styled from 'styled-components';
import Body from '../components/Body';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';

const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1.5 },
};

const animationTwo = {
    initial: { x: 300 },
    animate: { x: 0 },
    exit: { x: -300 },
    transition: { duration: 1.5 },
};

const Home: FC = () => (
    <Layout>
        <AnimatePresence>
            <motion.div {...animation}>
                <Container>
                    <Content>
                        <Heading>
                            Hi, I’m Tim.
                            <br />A front-end developer from Amsterdam
                            <Dot>.</Dot>
                        </Heading>
                        <Body style={{ marginTop: '20px', maxWidth: '400px' }}>
                            Currently working with React, TypeScript,
                            styled-components, GraphQL, and the JAMStack.
                        </Body>
                    </Content>
                    <motion.div {...animationTwo}>
                        <Illustrations>
                            <Illustration
                                src="coding.svg"
                                alt="Illustration of a person writing code"
                            />
                            <Blob
                                src="blob1.svg"
                                alt="Illustration of a person writing code"
                            />
                            <Blob
                                src="blob2.svg"
                                alt="Illustration of a person writing code"
                            />
                        </Illustrations>
                    </motion.div>
                </Container>
            </motion.div>
        </AnimatePresence>
    </Layout>
);

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: ${({ theme }) => theme.mediaQueries.large}) {
        flex-direction: row;
    }
`;

const Content = styled.div`
    margin-bottom: 100px;

    @media (min-width: ${({ theme }) => theme.mediaQueries.large}) {
        width: 50%;
    }
`;

const Dot = styled.span`
    color: ${({ theme }) => theme.colors.yellow};
`;

const Illustration = styled.img`
    max-width: 250px;

    @media (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
        max-width: 350px;
    }

    @media (min-width: ${({ theme }) => theme.mediaQueries.large}) {
        max-width: none;
        margin-left: 50px;
    }
`;

const Blob = styled.img`
    position: absolute;
    left: 0;
    top: -20%;
    max-width: 250px;

    @media (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
        max-width: 350px;
    }

    @media (min-width: ${({ theme }) => theme.mediaQueries.large}) {
        max-width: none;
    }
`;

const Illustrations = styled.div`
    position: relative;
    display: flex;
`;

export default Home;
