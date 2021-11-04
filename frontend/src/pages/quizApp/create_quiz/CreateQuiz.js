import { 
    Flex, Heading, VStack, Text, Button, Container
} from "@chakra-ui/react"
import useWindowDimensions from '../../../utils/windowDimensions';
import Board from 'react-trello'
import Navigation from "../Navigation";

const data = {
    lanes: [
        {
            id: 'lane1',
            title: 'My quiz #1',
            editLaneTitle: true,
            label: '',
            cards: []
        },
        {
            id: 'lane2',
            title: 'From questions database',
            label: '',
            cards: [
                {id: '88', title: 'EL&SW', description: 'Can AI make memes', label: 'Multiple choice'},
                {id: '89', title: 'EL&SW', description: 'Can AI make memes', label: 'Multiple choice'},
                {id: '90', title: 'EL&SW', description: 'Can AI make memes', label: 'Multiple choice'},
                {id: '45', title: 'EL&SW', description: 'Can AI make memes', label: 'Multiple choice'},
                {id: '16', title: 'EL&SW', description: 'Can AI make memes', label: 'Multiple choice'},
                {id: '10', title: 'EL&SW', description: 'Can AI make memes', label: 'Multiple choice'},
            ]
        }
    ]
}
  

function CreateQuiz() {
    const { height, width } = useWindowDimensions();

    return (
        <>
            <Navigation />
            <Container maxW="-moz-max-content" p={0}>
                <Flex paddingLeft={5}>
                    <VStack alignItems="stretch" w="full" h="full" p={15}>
                        <Heading size="xl">Create quiz</Heading>
                        <Text >Just drag the questions from the right table to the left table</Text>
                        
                        <Board 
                            cardDragClass="draggingCard"
                            data={data} 
                            laneStyle={{
                                "maxHeight": height * 0.60,
                                "width": (width * 0.94) / 2,
                                "backgroundColor": "#161b24",
                                "color": "#ffffffeb",
                            }}
                            cardStyle={{
                                "maxWidth": "none",
                                "backgroundColor": "#ffffff14",
                                "borderRadius": "6px",
                            }}
                            style={{
                                "height": height * 0.65,
                                "backgroundColor": "transparent",
                                "padding": 0,
                                "alignSelf": "center",
                            }}
                        />
                        
                        <Button size="lg" colorScheme="blue">Create quiz</Button>
                        
                    </VStack>
                </Flex>
            </Container>
        </>
    );
}
export default CreateQuiz;