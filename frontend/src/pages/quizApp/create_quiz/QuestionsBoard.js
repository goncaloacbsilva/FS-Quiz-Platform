import { Component } from "react";
import { Button, Text } from "@chakra-ui/react"
import Board from 'react-trello'
import QuestionsAPI from "../../../api/questions";
import KnowledgeAreaAPI from "../../../api/knowledgeArea";
import QuestionTableUtils from "../../../utils/questionTableUtils";

class AsyncBoard extends Component {
    state = {
        boardData: {
            lanes: [
                {id: 'lane1', title: 'loading...', cards: []},
                {id: 'lane2', title: 'loading...', cards: []},
            ]
        },
        knowledgeAreas: []
    }
  
    componentDidMount() {
        //errorMsg("info", "Loading questions, please wait...", "")
        QuestionsAPI.getQuestions()
        .then(res => res.data)
        .then((data) => QuestionTableUtils.postProcessing(data))
        .then((data) => {
            let questionsCards = [];
            data.forEach(question => {
                questionsCards.push({
                    id: question.id.toString(), 
                    title: question.knowledgeArea, 
                    description: question.content, 
                    label: "Resolution Time: 1:30",
                    tags: [
                        QuestionTableUtils.checkMultipleChoice(question) ?
                        {
                            bgcolor: 'rgba(154, 230, 180, 0.16)',
                            color: 'var(--chakra-colors-green-200)',
                            title: 'Multiple choice'
                        }
                        :
                        {
                            bgcolor: 'rgba(144, 205, 244, 0.16)',
                            color: 'var(--chakra-colors-blue-200)',
                            title: 'Open answer'
                        }
                    ]
                })
            });
            this.setState({
                boardData: {
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
                            title: 'Questions Database', 
                            cards: questionsCards
                        },
                    ]
                }
            })
        })
        .then(KnowledgeAreaAPI.getKnowledgeAreas()
        .then(res => res.data)
        .then((data) => {
            this.setState({knowledgeAreas: data})
        }))
        .catch((err) => {
            console.log(err)
            //errorMsg("error", "QuestionsAPI Error:", err.message)
        })
    }
  
    render() {
        return (
            <>
                <Board 
                    cardDragClass="draggingCard"
                    data={this.state.boardData}
                    hideCardDeleteIcon={true}
                    laneStyle={{
                        "maxHeight": this.props.dimensions.height * 0.60,
                        "width": (this.props.dimensions.width * 0.94) / 2,
                        "backgroundColor": "#161b24",
                        "color": "#ffffffeb",
                    }}
                    cardStyle={{
                        "maxWidth": "none",
                        "backgroundColor": "#ffffff14",
                        "borderRadius": "6px",
                    }}
                    style={{
                        "height": this.props.dimensions.height * 0.65,
                        "backgroundColor": "transparent",
                        "padding": 0,
                        "alignSelf": "center",
                    }}
                    components={{
                        LaneFooter: function noRefCheck() { return <Text>Ola</Text> }
                    }}
                />
                <Button size="lg" colorScheme="blue" onClick={() => {
                    
                }} >Create quiz</Button>
            </>
        )
    }
  }

export default AsyncBoard;