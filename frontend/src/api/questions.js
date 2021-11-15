import axios from 'axios'
import { API_ENDPOINT } from './apiEndpoint'


function submitQuestion(formData) {
    return axios.post(API_ENDPOINT + '/api/submitQuestion', formData)
};

function getQuestions() {
    return axios.get(API_ENDPOINT + '/api/getQuestions')
}

const QuestionsAPI = {
    submitQuestion,
    getQuestions
}

export default QuestionsAPI;