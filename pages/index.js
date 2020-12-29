import React from 'react';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  Image
} from '@chakra-ui/core';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import ProjectCard from '../components/ProjectCard';

const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
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
            Vasilios Oliver Walsh
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            is a computer scientist & software developer originating from
            Philadelphia, PA.
          </Text>
        </Flex>
        <Image src="/static/images/Nasdaq.png" pt={0} pb={0} />
        <Timeline />
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Projects & Research
          </Heading>
          <ProjectCard
            title="Machine Learning"
            description="Here's a link to my github machine learning repo. 
            As I continue to develop as a programmer, ML will be my main focus.
            Working hard to understand the complexities of the space!"
            href="https://github.com/oliverwalsh7/machinelearning"
            icon="robot"
          />
          <ProjectCard
            title="The Grade Wizard"
            description="For students to optimize their GPA's after COVID moved many universities nationwide to adopt a pass-fail grading policy."
            href="https://thegradewizard.com"
            icon="gradewizard"
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;
