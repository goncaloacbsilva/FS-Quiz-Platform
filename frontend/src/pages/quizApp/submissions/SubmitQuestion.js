import {useState, useRef, useEffect } from 'react';
import { 
        Flex, Heading, 
        Button, Container, 
        VStack, FormErrorMessage,
        Textarea, FormControl,
        FormLabel, Input,
        Select, Slider,
        SliderTrack, SliderFilledTrack,
        SliderThumb, StatNumber, 
        Stat, HStack,
        useToast
      } from "@chakra-ui/react"

import { Redirect } from "react-router-dom";
import { Formik, Field, Form } from "formik"
import { ArrowUpIcon } from '@chakra-ui/icons'
import SubmitUtils from '../../../utils/submitUtils'
import MultipleChoice from './SubmitMultipleChoice'

import KnowledgeAreaAPI from '../../../api/knowledgeArea';
import QuestionsAPI from '../../../api/questions';
import Navigation from '../Navigation';



function OpenAnswer({correctCallback}) {
  return (
    <Textarea onChange={(event) => {
      correctCallback({"correctAnswer": event.target.value})
    }} placeholder="Open answer goes here..." isRequired/>
  );
}

function SubmitQuestion() {
    const [dificulty, setDificulty] = useState(2);
    const [ type, setType ] = useState("default");
    const [ openAnswer, setOpenAnswer ] = useState("");
    const [ questionImageUploaded, setQuestionImageUploaded ] = useState("");
    const [ resolutionImageUploaded, setResolutionImageUploaded ] = useState("");
    const [ knowledgeAreas, updateKnowledgeAreas] = useState([]);
    const [ knowledgeAreaId, updateKnowledgeAreaId] = useState(0);
    const [ redirect, setRedirect ] = useState(false)
    const multipleChoiceRef = useRef();
    const questionImage = useRef(null);
    const resolutionImage = useRef(null);
    const toast = useToast()

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

    function onChangeQuestionImage(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      if (!SubmitUtils.validateFile(evt.target.files[0], errorMsg)) {
        setQuestionImageUploaded("");
        return;
      }
      setQuestionImageUploaded(evt.target.files[0]);
    }
    
    function onChangeResolutionImage(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      if (!SubmitUtils.validateFile(evt.target.files[0], errorMsg)) {
        setResolutionImageUploaded("");
        return;
      }
      setResolutionImageUploaded(evt.target.files[0]);
    }

    useEffect(() => {
      updateKnowledgeAreas([])
      KnowledgeAreaAPI.getKnowledgeAreas()
      .then(res => res.data)
      .then((data) => {
        updateKnowledgeAreas(data)
      })
      .catch((err) => {
        updateKnowledgeAreas([])
        console.log(err)
        errorMsg("error", "KnowledgeArea API Error:", err.message)
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <>
        <Navigation />
        <Container maxW="container.lg" p={0}>
          <Flex h="90vh">
              <VStack alignItems="start" w="full" h="full" p={15}>
                  <Heading paddingBottom="5" size="xl">Submit question:</Heading>

                  <Formik
                    initialValues={
                      {
                        author: "",
                        question: "",
                      }
                    }
                    onSubmit={(values, actions) => {
                      setTimeout(() => {

                        var formData = new FormData()

                        var answers = (type === "multiple") ? multipleChoiceRef.current.getCorrectAnswer() : openAnswer

                        formData.append("author", values.author);
                        formData.append("question", values.question);
                        formData.append("areaId", knowledgeAreaId);
                        formData.append("difficulty", dificulty);
                        formData.append("type", type);
                        Object.keys(answers).map((key, index) => (
                          formData.append(key, answers[key])
                        ))
                        formData.append("questionImage", questionImageUploaded);
                        formData.append("resolutionImage", resolutionImageUploaded);

                        console.log("SUBMIT REPORT: ")

                        console.log(formData)
                        
                        QuestionsAPI.submitQuestion(formData).then((res) => {
                          console.log("Submitted!")
                          setRedirect(true)
                        })
                        .catch((err) => {
                          console.log("Submission error: ")
                          console.log(err)
                          errorMsg("error", "Submission API Error: ", err.message)
                        }).finally(() => {
                          actions.setSubmitting(false)
                        });
                        

                      }, 500)
                    }}
                  >
                    {(props) => (
                      <Form style={{display: "contents"}}>

                        <Field name="author" validate={SubmitUtils.validateName}>
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.author && form.touched.author} isRequired>
                              <FormLabel>Author:</FormLabel>
                              <Input {...field} id="author" placeholder="First and last name" type="text" />
                              <FormErrorMessage>{form.errors.author}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>

                        <Field name="question" validate={SubmitUtils.validateQuestion}>
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.question && form.touched.question} isRequired>
                              <FormLabel paddingTop="5">Question:</FormLabel>
                              <Textarea {...field} id="question" placeholder="Your question goes here..." />
                              <FormErrorMessage>{form.errors.question}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>

                        <FormControl id="area" isRequired>
                          <FormLabel paddingTop="5">Knowledge Area:</FormLabel>
                          <Select onChange={(event) => {
                            updateKnowledgeAreaId(event.target.value)
                          }} placeholder="Select option" isDisabled={(knowledgeAreas.length === 0)}>
                            {
                              knowledgeAreas.map((area)=>{
                                return(
                                  <option key={area["id"]} value={area["id"]}>{area["areaname"]}</option>
                                )
                              })
                            }
                          </Select>
                        </FormControl>


                        <FormControl id="dificulty" isRequired>
                          <FormLabel paddingTop="5">Question dificulty:</FormLabel>
                          <Stat>
                            <StatNumber>{dificulty}</StatNumber>
                            <Slider onChange={setDificulty} defaultValue={2} min={0} max={5} step={1}>
                              <SliderTrack>
                                <SliderFilledTrack />
                              </SliderTrack>
                              <SliderThumb />
                            </Slider>
                          </Stat>
                        </FormControl>

                        <FormControl paddingBottom="5" id="response" isRequired>
                          <FormLabel paddingTop="5">Answer type:</FormLabel>
                          <Select onChange={
                            (e) => {
                              setType(e.target.value);
                            }
                          } placeholder="Select option">
                            <option value="multiple">Multiple choice</option>
                            <option value="open">Open answer</option>
                          </Select>
                        </FormControl>

                        {(type === "open") ? <OpenAnswer correctCallback={setOpenAnswer} /> : null}
                        {(type === "multiple") ?  <MultipleChoice ref={multipleChoiceRef} /> : null}
                        
                        {redirect ? <Redirect to="/quizApp/questions/submit/submission_success" push /> : null }  
                        {
                          // ^^^^ Redirect on submission success
                        }
                        <Input onChange={onChangeQuestionImage.bind(this)} ref={questionImage} id="question-img" type="file" style={{display: 'none'}} />
                        <Input onChange={onChangeResolutionImage.bind(this)} ref={resolutionImage} id="resolution-img" type="file" style={{display: 'none'}} />
                        <HStack paddingTop="5" paddingBottom="5">
                          <Button colorScheme={questionImageUploaded !== "" ? "blue" : "gray"} onClick={() => {questionImage.current.click()}} leftIcon={ questionImageUploaded ? null : <ArrowUpIcon />} >{questionImageUploaded ? "Change" : "Upload"} question image</Button>
                          <Button colorScheme={resolutionImageUploaded !== "" ? "blue" : "gray"} onClick={() => {resolutionImage.current.click()}} leftIcon={resolutionImageUploaded ? null : <ArrowUpIcon />}>{resolutionImageUploaded ? "Change" : "Upload"} resolution image</Button>
                        </HStack>

                        <VStack paddingBottom="5" alignItems="stretch" w="full">
                            <Button type="submit" isLoading={props.isSubmitting} isDisabled={(knowledgeAreas.length === 0)} colorScheme="blue">Submit</Button>
                        </VStack>
                      </Form>
                      )}
                  </Formik>
                  
              </VStack>
          </Flex>
        </Container>
      </>
    );
}

export default SubmitQuestion;