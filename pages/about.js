import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Icon,
  Image
} from '@chakra-ui/core';

import Container from '../components/Container';
import { CustomLink } from '../components/MDXComponents';

const url = 'https://vasilioswalsh.com/about';
const title = 'About Me';

const About = () => {
  const { colorMode } = useColorMode();
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
            <Image
              src="/static/images/umcompahgre.jpg"
              size={'100%'}
              pt={0}
              pb={5}
            />
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Welcome to my website!
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I'm currently a 21 year old computer scientist & programmer,
              originating from Philadelphia. Right now I'm working as a Software
              Engineer at&nbsp;
              <CustomLink href="https://beta.dolomite.io">Dolomite</CustomLink>,
              a decentralized cryptocurrency exchange based in Metuchen, New
              Jersey. I'm also currently a Software Engineering Intern at Sony
              Research & Development in San Mateo, CA.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              As of now, my focus is mastering the art of full-stack application
              development. I'm concurrently studying machine learning and
              artificial intelligence, while also having a strong interest in
              the world of blockchain and cryptocurrency.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I'm a firm believer that the exponential increase of technology
              will change our world drastically. This is why every day I am
              excited to wake up and experience the future as it unfolds, and am
              perpetually motivated to achieve greater feats.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I hope to one day be working towards a better world, and
              maximizing my own capabilities. I'm learning in order to be as
              impactful as I can, so one day I can code my own dreams into
              reality.
            </Text>
            <Heading letterSpacing="tight" mt={8} mb={4} as="h2" size="xl">
              Programming Languages & Tech
            </Heading>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              Proficient:
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Java 14, JavaScript ES6+, TypeScript, Python, HTML5,
              CSS3/SASS/SCSS, React, Vue, Node.js, SQL, PostgreSQL, C & C++,
              RESTful APIs, UNIX, Git, Swift, Heroku Cloud, AWS
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              Very Comfortable:
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              JDBC, Linux (Arch, Kali), TensorFlow & PyTorch, OracleDB, MongoDB,
              Docker, Firebase, Rust
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              Strongly Familiar:
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              C#, Microsoft Azure, express.js, Scala, PHP
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
