import {useState, useEffect, useRef } from 'react';
import {
    Container, IconButton,
    Badge, Divider, 
    VStack, HStack,
    Image, Text, 
    Heading, Button, 
    Input, useToast, 
    InputGroup, InputRightElement, Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure, Select
} from "@chakra-ui/react"
import {
    MinusIcon,
    AddIcon,
} from "@chakra-ui/icons"

import { 
    Table, Column, 
    HeaderCell, Cell
} from "rsuite-table"

import Badges from '../../../components/Badges';
import QuestionOverview from './Question';

import '../../../style/css/rsuite-table-custom.css';
import QuestionsAPI from '../../../api/questions';
import QuestionTableUtils from '../../../utils/questionTableUtils';
import useWindowDimensions from '../../../utils/windowDimensions';
import unknowQuestion from '../../../images/question.png'
import SearchEngine from '../../../utils/SearchEngine';
import KnowledgeAreaAPI from '../../../api/knowledgeArea';

const rowKey = 'id';

const ExpandCell = ({ rowData, dataKey, expandedRowKeys, onChange, ...props }) => (
  <Cell {...props}>
    <IconButton
      size="xs"
      appearance="subtle"
      onClick={() => {
        onChange(rowData);
      }}
      icon={
        expandedRowKeys.some((key) => key === rowData[rowKey]) ? <MinusIcon /> : <AddIcon />
      }
    />
  </Cell>
);

const StatusCell = ({ rowData, dataKey, ...props }) => (
    <Cell {...props}>
        <Badges.StatusBadge size="0.8em" used={rowData.used} />
    </Cell>
);

const ReviewCell = ({ rowData, dataKey, ...props }) => (
    <Cell {...props}>
        <Badges.ReviewedBadgeSimple size="0.8em" reviewed={rowData.reviewed} />
    </Cell>
);

function ViewQuestions() {
    const [expandedRowKeys, setExpandedRowKeys] = useState([]);
    const [questions, updateQuestions] = useState([]);
    const [ knowledgeAreas, updateKnowledgeAreas] = useState([]);
    const [ knowledgeArea, updateKnowledgeArea] = useState("all");
    const [query, updateQuery] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { height, width } = useWindowDimensions();
    const toast = useToast()
    const selectedEntry = useRef(null)
    const searchEngine = useRef(null)

    const renderRowExpanded = (rowData) => {
        return (
            <>
                <VStack spacing="2" alignItems="start">
                    <HStack>
                        {QuestionTableUtils.checkMultipleChoice(rowData) ?
                            <Badge ml="1" fontSize="0.9em" colorScheme="green">
                                Multiple Choice 
                            </Badge>
                            :
                            <Badge ml="1" fontSize="0.9em" colorScheme="blue">
                               Open Answer 
                            </Badge>
                        }
                        <Button onClick={() => {
                            // Transfer question
                            selectedEntry.current.updateQuestion(rowData)
                            onOpen()
                        }} size="xs">
                            Show full question
                        </Button>
                    </HStack>
                    <HStack>
                        <Image
                            borderRadius="10"
                            boxSize="110px"
                            src={"/api/requestFile/" + rowData["image_path"].split("/")[1]}
                            fallbackSrc={unknowQuestion}
                            alt="Segun Adebayo"
                        />
                        <Container maxWidth="3xl" alignItems="start">
                            <Heading as="h4" size="md">Question: </Heading>
                            <Text noOfLines={4}>
                                {rowData.content}
                            </Text>
                        </Container>
                    </HStack>
                    <Divider orientation="horizontal" />
                    <HStack>
                        <Image
                            borderRadius="10"
                            boxSize="110px"
                            src={"/api/requestFile/" + rowData["resolution_path"].split("/")[1]}
                            fallbackSrc={unknowQuestion}
                            alt="Segun Adebayo"
                        />
                        <Container maxWidth="3xl" alignItems="start">
                            <Heading as="h4" size="md">Solution: </Heading>
                            <Text noOfLines={[1, 2, 3, 4]}>
                                {rowData.correctanswer}
                            </Text>
                        </Container>
                    </HStack>
                </VStack>
            </>
        );
    };

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

    useEffect(() => {
        selectedEntry.current = new QuestionTableUtils.TransferQuestion()
        updateQuestions([])
        updateKnowledgeAreas([])
        errorMsg("info", "Loading questions, please wait...", "")
        QuestionsAPI.getQuestions()
        .then(res => res.data)
        .then((data) => QuestionTableUtils.postProcessing(data))
        .then((data) => {
            updateQuestions(data)
            searchEngine.current = new SearchEngine('id', data)
        })
        .then(KnowledgeAreaAPI.getKnowledgeAreas()
        .then(res => res.data)
        .then((data) => {
            updateKnowledgeAreas(data)
        }))
        .catch((err) => {
            updateQuestions([])
            console.log(err)
            errorMsg("error", "QuestionsAPI Error:", err.message)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    

    const handleExpanded = (rowData, dataKey) => {
        let open = false;
        const nextExpandedRowKeys = [];
    
        expandedRowKeys.forEach((key) => {
          if (key === rowData[rowKey]) {
            open = true;
          } else {
            nextExpandedRowKeys.push(key);
          }
        });
    
        if (!open) {
          nextExpandedRowKeys.push(rowData[rowKey]);
        }
    
        setExpandedRowKeys(nextExpandedRowKeys);
        
    }; 

    return (
        <>
            <Box padding={5}>
                <HStack>
                    <InputGroup paddingBottom={4} size="md">
                        <Input
                            pr="4.5rem"
                            type="text"
                            placeholder="Search for question"
                            value={query}
                            onChange={(evt) => updateQuery(evt.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            {
                                (query.length !== 0) ? <Button h="1.75rem" onClick={() => {updateQuery("")}} size="sm">Clear</Button> : null
                            }
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup paddingBottom={4} width="sm" size="md">
                        <Select width="sm" onChange={(event) => {
                            if (event.target.value === "") {
                                updateKnowledgeArea("all")
                            } else {
                                updateKnowledgeArea(event.target.value)
                            }
                            }} placeholder="All Knowledge Areas" isDisabled={(knowledgeAreas.length === 0)}>
                            {
                                knowledgeAreas.map((area)=>{
                                return(
                                    <option key={area["id"]} value={area["areaname"]}>{area["areaname"]}</option>
                                )
                                })
                            }
                        </Select>
                    </InputGroup>
                </HStack>
                <Table
                    height={height * 0.70}
                    width={width*0.9}
                    rowKey={rowKey}
                    rowExpandedHeight={300}
                    expandedRowKeys={expandedRowKeys}
                    data={ QuestionTableUtils.filterArea(knowledgeArea, (query.length !== 0) ? searchEngine.current.performSearch(['content'], query) : questions)}
                    shouldUpdateScroll={false}
                    renderRowExpanded={renderRowExpanded}
                    affixHeader
                    virtualized
                >
                    <Column width={70} align="center">
                        <HeaderCell>#</HeaderCell>
                        <ExpandCell dataKey="id" expandedRowKeys={expandedRowKeys} onChange={handleExpanded} />
                    </Column>

                    <Column width={120}>
                        <HeaderCell>State: </HeaderCell>
                        <StatusCell/>
                    </Column>

                    <Column width={120}>
                        <HeaderCell>Reviewed: </HeaderCell>
                        <ReviewCell/>
                    </Column>

                    <Column width={500}>
                        <HeaderCell>Question</HeaderCell>
                        <Cell dataKey="content" />
                    </Column>
                    
                    <Column width={280}>
                        <HeaderCell>Knowledge Area</HeaderCell>
                        <Cell dataKey="knowledgeArea" />
                    </Column>

                    <Column width={300}>
                        <HeaderCell>Author</HeaderCell>
                        <Cell dataKey="authorName" />
                    </Column>

                    <Column flexGrow={1}>
                        <HeaderCell>Difficulty</HeaderCell>
                        <Cell dataKey="difficultyid" />
                    </Column>
                </Table>
            </Box>
            <Modal size="full" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{(isOpen) ? selectedEntry.current.question["knowledgeArea"] : ""}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {(isOpen) ? 
                          <QuestionOverview question={selectedEntry.current.question} />
                        : ""}
                    </ModalBody>
        
                    <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ViewQuestions;