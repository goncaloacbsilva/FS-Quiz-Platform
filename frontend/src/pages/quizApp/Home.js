import { Flex, Heading, Button, Container, VStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function QuizAppHome() {
    return (
      <>
        <Navigation />
        <Container maxW="container.lg" p={0}>
          <Flex h="80vh">
              <VStack w="full" h="full" p={15}>
                <Heading size="2xl">FST Quizz App</Heading>
                <Text fontSize="xl">
                  A tool that gets you ready for those hard af FSG quizzes
                </Text>
                <Link to="/quizApp/questions/submit">
                  <VStack w="lg" align="stretch">
                      <Button size="lg" colorScheme="blue">Submit question</Button>
                  </VStack>
                </Link>
              </VStack>
          </Flex>
        </Container>
      </>
    );
}

export default QuizAppHome;