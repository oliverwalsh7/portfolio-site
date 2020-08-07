import React from 'react';
import {NextSeo} from 'next-seo';
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Link,
    Icon
} from '@chakra-ui/core';

import Container from '../components/Container';
import {CustomLink} from '../components/MDXComponents';

const url = 'https://leerob.io/about';
const title = 'About Me – Lee Robinson';

const About = () => {
    const {colorMode} = useColorMode();
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400'
    };

    return (
        <>
            <NextSeo
                title={title}
                canonical={url}
                openGraph={{
                    url,
                    title
                }}
            />
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                    >
                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            About Me
                        </Heading>
                        <Text color={secondaryTextColor[colorMode]} mb={4}>
                            I'm Vasilios Walsh. Most people really know me as Oliver, which is certainly understandable.
                        </Text>
                        <Text color={secondaryTextColor[colorMode]} mb={4}>
                            I'm currently a 21 year old computer scientist & programmer, originating from Philadelphia.
                            Right now I'm working as a Software Engineer at&nbsp;
                            <CustomLink href="https://beta.dolomite.io">Dolomite</CustomLink>
                            , a decentralized cryptocurrency exchange based in Metuchen, New Jersey.
                            I'm also currently a Software Engineering Intern at Sony Research & Development.
                        </Text>
                        <Text color={secondaryTextColor[colorMode]} mb={4}>
                            As of now, my focus is mastering the art of full-stack application development.
                            I'm concurrently studying machine learning and artificial intelligence, while also having
                            a strong interest in the world of blockchain and cryptocurrency.
                        </Text>
                        <Text color={secondaryTextColor[colorMode]} mb={4}>
                            I'm a firm believer that the exponential increase of technology will change our world drastically.
                            This is why every day I am excited to wake up and experience the future as it unfolds,
                            and perpetually motivated to achieve greater feats.
                        </Text>
                        <Text color={secondaryTextColor[colorMode]} mb={4}>
                            I hope to one day be working towards a better world, and maximizing my own capabilities.
                            I'm learning in order to be as impactful as I can, so one day I can code my own dreams into reality.
                        </Text>
                        <Heading letterSpacing="tight" mt={8} mb={4} as="h2" size="xl">
                            Skills & Programming Languages
                        </Heading>
                        <Heading size="md" as="h3" mb={2} fontWeight="medium">
                            <Icon name="javascript" />
                        </Heading>
                        <Text color={secondaryTextColor[colorMode]} mb={8}>
                            During this workshop, you'll learn how to integrate Prisma with
                            Next.js and build a statically-generated site that displays a list
                            of your favorite songs. We'll use Chakra UI for styling and deploy
                            our site with Vercel.
                        </Text>
                        <Heading size="md" as="h3" mb={2} fontWeight="medium">
                            <Link
                                display="flex"
                                href="/building-component-libraries-with-a-monorepo.pdf"
                                isExternal
                            >
                                <Flex align="center">
                                    Building Component Libraries with a Monorepo
                                    <Icon name="external-link" mx={2} size="16px"/>
                                </Flex>
                            </Link>
                        </Heading>
                        <Text color={secondaryTextColor[colorMode]} mb={8}>
                            Learn why your organization needs a component library and discover
                            the best practices for building, scaling, and adopting it across
                            all platforms. We'll be using industry-standard technology (React,
                            JavaScript, Storybook) alongside cutting-edge solutions
                            (CSS-in-JS, Monorepo).
                        </Text>
                        <Heading size="md" as="h3" mb={2} fontWeight="medium">
                            <Link
                                display="flex"
                                href="/recruiting-engineers-talent42-lee-robinson.pdf"
                                isExternal
                            >
                                <Flex align="center">
                                    Recruiting Engineers (From An Engineer's Perspective)
                                    <Icon name="external-link" mx={2} size="16px"/>
                                </Flex>
                            </Link>
                        </Heading>
                        <Text color={secondaryTextColor[colorMode]} mb={8}>
                            Hiring talent is becoming increasingly difficult with low
                            unemployment rates and the tech industry booming. What you can do
                            to stick out? Learn from an engineer who's been involved on both
                            sides - both as a candidate and with hiring - on what candidates
                            really want out of a position.
                        </Text>
                        <iframe
                            height="280"
                            src="https://www.google.com/maps/d/embed?mid=1QOGi-u8d4vwoQ4vC4zQjKxrSfsDIQdOK&hl=en"
                            title="Lee's Travel Map"
                            width="100%"
                        />
                    </Flex>
                </Stack>
            </Container>
        </>
    );
};

export default About;
