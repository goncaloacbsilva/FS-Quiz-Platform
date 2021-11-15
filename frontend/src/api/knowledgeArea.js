import axios from 'axios'
import { API_ENDPOINT } from './apiEndpoint'


function getKnowledgeAreas() {
  return axios.get(API_ENDPOINT + '/api/getKnowledgeAreas')
}

function getKnowledgeAreaById(id) {
  return axios.get(API_ENDPOINT + '/api/getKnowledgeArea/' + id)
}

const KnowledgeAreaAPI = {
    getKnowledgeAreas,
    getKnowledgeAreaById
}

export default KnowledgeAreaAPI;