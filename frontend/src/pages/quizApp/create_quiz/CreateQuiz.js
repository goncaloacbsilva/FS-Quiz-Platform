import { 
    Flex, Heading, VStack, Text, Container, //useToast
} from "@chakra-ui/react"
import useWindowDimensions from '../../../utils/windowDimensions';
import Navigation from "../Navigation";
import AsyncBoard from "./QuestionsBoard";

function CreateQuiz() {
    const dimensions = useWindowDimensions();
    //const toast = useToast()

    /*
    function errorMsg(type, title, msg) {
        console.log("ERROR_MSG: " + msg)
        toast({
            title: title,
            position: "top",
            description: msg + (title.includes("API") ? ". Please try to reload the page or contact EL&SW team" : ""),
            status: type,
            duration: 3000,
            isClosable: true,
        })
    }
    */

    return (
        <>
            <Navigation />
            <Container maxW="-moz-max-content" p={0}>
                <Flex paddingLeft={5}>
                    <VStack alignItems="stretch" w="full" h="full" p={15}>
                        <Heading size="xl">Create quiz</Heading>
                        <Text >Just drag the questions from the right table to the left table</Text>
                        <AsyncBoard dimensions={dimensions} />
                        
                    </VStack>
                </Flex>
            </Container>
        </>
    );
}
export default CreateQuiz;