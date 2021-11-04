import axios from 'axios'


function getKnowledgeAreas() {
  return axios.get('https://994b-2001-690-2100-110-a403-ab89-7bb9-268b.ngrok.io/api/getKnowledgeAreas')
}

function getKnowledgeAreaById(id) {
  return axios.get('/api/getKnowledgeArea/' + id)
}

const KnowledgeAreaAPI = {
    getKnowledgeAreas,
    getKnowledgeAreaById
}

export default KnowledgeAreaAPI;