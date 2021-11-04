import { Flex, Heading, Button, Container, VStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";

function NotFound() {
    return (
      <Container maxW="container.lg" p={0}>
        <Flex h="80vh">
            <VStack w="full" h="full" p={15}>
              <Heading size="2xl">Oops, its a 404</Heading>
              <Text fontSize="xl">
                We gave our best effort but we couldn't find what you are looking for
              </Text>
              <Link to="/"><Button size="lg" colorScheme="blue">Take me home</Button></Link>
            </VStack>
        </Flex>
      </Container>
    );
}

export default NotFound;