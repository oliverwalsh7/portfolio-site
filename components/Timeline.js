import React, {useState} from 'react';
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Button,
    List,
    ListItem,
    Icon,
    Stack,
    Divider
} from '@chakra-ui/core';

const YearDivider = () => {
    const {colorMode} = useColorMode();
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    };

    return <Divider borderColor={borderColor[colorMode]} my={8} w="100%"/>;
};

const TimelineStep = ({title, children}) => {
    const {colorMode} = useColorMode();
    const color = {
        light: 'gray.700',
        dark: 'gray.400'
    };

    return (
        <ListItem>
            <Stack ml={2} mb={4}>
                <Flex align="center">
                    <Icon name="check-circle" mr={2} color="twitter.400"/>
                    <Text fontWeight="medium">{title}</Text>
                </Flex>
                <Text color={color[colorMode]} ml={6}>
                    {children}
                </Text>
            </Stack>
        </ListItem>
    );
};

const FullTimeline = () => (
    <>
        <YearDivider/>
        <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
            2017
        </Heading>
        <List>
            <TimelineStep title="Accepted to Lehigh University 🎓">
                Started studying within the dually-accredited, joint Computer Science & Business bachelors degree
                program. Expected to get my undergraduate degree by May 2021.
            </TimelineStep>
        </List>
        <YearDivider/>
        <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
            2014
        </Heading>
        <List>
            <TimelineStep title="Took My First Programming Class">
                and afterwards I knew JavaScript and HTML!
            </TimelineStep>
        </List>
        <YearDivider/>
        <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
            2009
        </Heading>
        <List>
            <TimelineStep title="Wrote My First Line of Code">
                in Java at a coffee shop!
            </TimelineStep>
        </List>
        <YearDivider/>
        <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
            1999
        </Heading>
        <List>
            <TimelineStep title="Born">

            </TimelineStep>
        </List>
        <YearDivider/>
    </>
);

const Timeline = () => {
    const [isShowingFullTimeline, showFullTimeline] = useState(false);

    return (
        <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
        >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
                Timeline
            </Heading>
            <Heading
                as="h3"
                size="lg"
                fontWeight="bold"
                mb={4}
                letterSpacing="tighter"
            >
                2020
            </Heading>
            <List>
                <TimelineStep title="Software Engineering Intern at Sony Research & Development">
                    Coding with Swift and React in an agile, sprint environment to make a next-generation networking application.
                    Collaborating with a development team based in Japan and project leaders in San Mateo, California.
                </TimelineStep>
                <TimelineStep title="Summer Software Development Intern at ecomedes">
                    Gained this wonderful experience thanks to the NASDAQ Entrepreneurial Center in San Francisco.
                    Integrated a PostgreSQL backend through express.js & node into a Next.js driven frontend to provide
                    insights about user activity on various company platforms.
                </TimelineStep>
                <TimelineStep title="Started as a Software Engineer at Dolomite">
                    Dolomite is a U.S. based decentralized cryptocurrency exchange.
                    Developed with React.jsx to create an order detail page of all historical fills on Dolomite.
                    Currently working on various frontend improvements and some backend stuff with the hummingbot API & web3j.
                </TimelineStep>
            </List>
            <YearDivider/>
            <Heading
                as="h3"
                size="lg"
                fontWeight="bold"
                mb={4}
                letterSpacing="tighter"
            >
                2019
            </Heading>
            <List>
                <TimelineStep title="Completed First Internship at PhillyTech">
                    Gained valuable experience in the early-stage tech start-up environment.
                    Developed frontend components with React. Concurrently optimized an SQL DB's schema structure & data.
                    Extensively mentored in the art of lead generation & leveraging software to find solutions.
                </TimelineStep>
                <TimelineStep title="Created the Lehigh Coders' Community">
                    Had an epiphany which led to me starting a university-backed social network for computer scientists from LU.
                    Worked hard to get student senate approval, and blossomed to over 200 members within a year.
                    Facilitated lectures about programming and tech, collaborated with other clubs on campus & from around the country
                    (bitproject @ UC Davis). Major hit!
                </TimelineStep>
                <TimelineStep title="Hired as a Junior Systems Administrator at Lehigh">
                    Mentored by the head Systems Administrator on a frequent basis on how to maintain Lehigh's massive
                    labyrinth of UNIX & Linux machines. Many hours spent in the JSA lounge working with virtual machines &
                    UNIX environments. Immense exposure to the synthesis of hardware and low-level software.
                </TimelineStep>
            </List>
            {isShowingFullTimeline ? (
                <FullTimeline/>
            ) : (
                <Button
                    my={4}
                    mx="auto"
                    fontWeight="medium"
                    rightIcon="chevron-down"
                    variant="ghost"
                    onClick={() => showFullTimeline(true)}
                >
                    See More
                </Button>
            )}
        </Flex>
    );
};

export default Timeline;
