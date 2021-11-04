import {
    SimpleGrid,
    useRadioGroup
} from "@chakra-ui/react"

import RadioCard from './CustomRadioButton'

function postProcessing(options) {
    let newOptions = []
    options.forEach(element => {
        if (element !== "") {
            newOptions.push(element)
        }
    });
    return newOptions
}

function MultipleChoice(props) {

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: props.question["correctanswer"],
        onChange: console.log,
    })
    
    const group = getRootProps()

    let options = [
        props.question["answera"],
        props.question["answerb"],
        props.question["answerc"],
        props.question["answerd"],
    ]


    return (
        <SimpleGrid {...group} paddingTop={5} minChildWidth="120px" spacing="40px">
            {postProcessing(options).map((value) => {
                const radio = getRadioProps({ value })
                return (
                <RadioCard key={value} {...radio}>
                    {value}
                </RadioCard>
                )
            })}
        </SimpleGrid>
    );
}

export default MultipleChoice;