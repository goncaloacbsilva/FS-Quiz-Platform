import axios from 'axios'
import { API_ENDPOINT } from './apiEndpoint';


function getAuthors() {
  return axios.get(API_ENDPOINT + '/api/getAuthors')
}

const AuthorAPI = {
    getAuthors
}

export default AuthorAPI;