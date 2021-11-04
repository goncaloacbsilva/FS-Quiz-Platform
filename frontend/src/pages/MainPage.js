import { Flex, Heading, Button, Container, VStack, Text, Icon } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Navigation from "./Navigation";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'

function MainPage() {
    return (
      <>
      <Navigation />
      <Container maxW="container.lg" p={0}>
        <Flex h="80vh">
            <VStack w="full" h="full" p={15}>
              <Heading size="2xl">FST Suite</Heading>
              <Heading paddingBottom={10} fontWeight="light" size="xl">
                <Typist startDelay={200} stdTypingDelay={50} avgTypingDelay={70}>
                  <span>Made for performance</span>
                </Typist>
              </Heading>
              <Link to="/quizApp/">
                <VStack w="lg" align="stretch">
                  <Button rightIcon={<Icon as={FiArrowRight} />} colorScheme="blue" size="lg">FST Quiz App</Button>
                </VStack>
              </Link>
              <Link to="/logDBApp/">
                <VStack w="lg" align="stretch">
                  <Button disabled size="lg">Log DB</Button>
                </VStack>
              </Link>
            </VStack>
        </Flex>
      </Container>
      </>
    );
}

export default MainPage;