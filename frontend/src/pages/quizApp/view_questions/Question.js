import {
    Divider, 
    VStack, HStack,
    Image, Text, 
    Box,
    Textarea
} from "@chakra-ui/react"

import Badges from '../../../components/Badges';
import useWindowDimensions from '../../../utils/windowDimensions';
import QuestionTableUtils from "../../../utils/questionTableUtils";
import unknowQuestion from '../../../images/question.png'
import MultipleChoice from "../../../components/MultipleChoice";

function QuestionOverview(props) {
    const { height, } = useWindowDimensions();
    


    return (
        <>
            <HStack>
                {(props.question["image_path"] !== undefined) ?
                    <Image
                        borderRadius="10"
                        boxSize="150px"
                        src={"/api/requestFile/" + props.question["image_path"].split("/")[1]}
                        fallbackSrc={unknowQuestion}
                        alt="Question image"
                    />
                    :
                    null
                }
                <VStack alignItems="start">
                    <Box borderRadius={5} borderWidth={1} borderColor="gray.600" overflowY="scroll" maxHeight={height * 0.2}>
                        <Text fontWeight="medium" padding={2}>{props.question["content"]}</Text>
                    </Box>
                    <HStack paddingTop={1}>
                        <Badges.StatusBadge size="0.9em" used={props.question["used"]} />
                        <Badges.ReviewedBadge size="0.9em" reviewed={props.question["reviewed"]} />
                    </HStack>
                </VStack>
            </HStack>
            
            {QuestionTableUtils.checkMultipleChoice(props.question) ?
                <MultipleChoice question={props.question} />
                :
                <>
                    <Text paddingBottom={2} fontWeight="semibold" fontSize="xl">Open answer: </Text> 
                    <Textarea resize="none" isReadOnly>
                        {props.question["correctanswer"]}
                    </Textarea>
                </>
            }
            <Divider paddingTop={5} orientation="horizontal" />
            <Text paddingTop={2} fontWeight="semibold" fontSize="x-large">Explanation: </Text> 
            <HStack>
                {(props.question["image_path"] !== undefined) ?
                    <Image
                        borderRadius="10"
                        boxSize="150px"
                        src={"/api/requestFile/" + props.question["resolution_path"].split("/")[1]}
                        fallbackSrc={unknowQuestion}
                        alt="Resolution image"
                    />
                    :
                    null
                }
                <VStack alignItems="start">
                    <Box borderRadius={5} borderWidth={1} borderColor="gray.600" overflowY="scroll" maxHeight={height * 0.2}>
                        <Text padding={2}>No explanation provided</Text>
                    </Box>
                </VStack>
            </HStack>

        </>
    );
}

export default QuestionOverview;