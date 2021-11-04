import axios from 'axios'


function submitQuestion(formData) {
    return axios.post('/api/submitQuestion', formData)
};

function getQuestions() {
    return axios.get('https://994b-2001-690-2100-110-a403-ab89-7bb9-268b.ngrok.io/api/getQuestions')
}

const QuestionsAPI = {
    submitQuestion,
    getQuestions
}

export default QuestionsAPI;