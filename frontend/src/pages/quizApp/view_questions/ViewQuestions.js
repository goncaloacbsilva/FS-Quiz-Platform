import { 
    Flex, Heading,
    Container, VStack
} from "@chakra-ui/react"
import Navigation from "../Navigation";
import QuestionsTable from './QuestionsTable';

function ViewQuestions() {

    return (
        <>
            <Navigation />
            <Container maxW="-moz-max-content" p={0}>
                <Flex>
                    <VStack alignItems="start" w="full" h="full" p={15}>
                        <Heading paddingLeft="5" size="xl">Submitted questions</Heading>
                        <QuestionsTable/>
                    </VStack>
                </Flex>
            </Container>
        </>
    );
}

export default ViewQuestions;