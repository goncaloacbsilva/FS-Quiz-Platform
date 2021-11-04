import {useState, forwardRef, useImperativeHandle} from 'react';
import { 
    Input, HStack,
    Radio, RadioGroup,
} from "@chakra-ui/react"


const MultipleChoice = forwardRef((props, ref) => {
    const [correctOption, setCorrectOption] = useState(0);
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");
    const choiceChars = "ABCD"

    useImperativeHandle(ref, () => ({

      getCorrectAnswer() {
        var tempAnswerArray = []
        tempAnswerArray[0] = optionA;
        tempAnswerArray[1] = optionB;
        tempAnswerArray[2] = optionC;
        tempAnswerArray[3] = optionD;
        return ({
          "correctAnswer": tempAnswerArray[correctOption],
          "answerA": optionA,
          "answerB": optionB,
          "answerC": optionC,
          "answerD": optionD
        })
      }
  
    }));

    return (
      <RadioGroup onChange={(value) => {
        setCorrectOption(value)
      }
      } defaultValue="0">
        <HStack paddingBottom="5">
            <Radio value="0"></Radio>
            <Input onChange={event => setOptionA(event.target.value)} id="A" placeholder="Answer A" type="text" />
            <Radio paddingLeft="10" value="1"></Radio>
            <Input onChange={event => setOptionB(event.target.value)} id="B" placeholder="Answer B" type="text" />
        </HStack>
        <HStack paddingBottom="5">
            <Radio value="2"></Radio>
            <Input onChange={event => setOptionC(event.target.value)} id="C" placeholder="Answer C" type="text" />
            <Radio paddingLeft="10" value="3"></Radio>
            <Input onChange={event => setOptionD(event.target.value)} id="D" placeholder="Answer D" type="text" />
        </HStack>
        <p>Option {choiceChars[correctOption]} is the correct option</p>
      </RadioGroup>
    );
});

export default MultipleChoice;