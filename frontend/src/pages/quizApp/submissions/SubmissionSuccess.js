import { 
    Flex, Heading, VStack, Text, Button
  } from "@chakra-ui/react"
import Iframe from 'react-iframe'
import { Link } from "react-router-dom";


function SubmissionSuccess() {
    return (
        <Flex h="90vh">
            <VStack alignItems="center" w="full" h="full" p={15}>
                <Heading size="xl">Thank you for your submission!</Heading>
                <Text>Your question has been safely saved in our database</Text>
                <Link to="/quizApp/questions/submit">
                    <VStack alignItems="stretch" w="lg">
                        <Button colorScheme="blue">Submit another one!</Button>
                    </VStack>
                </Link>
                <Link to="/">
                    <VStack alignItems="stretch" w="lg">
                        <Button>Go home</Button>
                    </VStack>
                </Link>
                <Iframe class="giphy-embed" frameBorder="0" width="500" height="300" src="https://giphy.com/embed/342Zsv5S4W8XC"/>
            </VStack>
        </Flex>
    );
}
export default SubmissionSuccess;