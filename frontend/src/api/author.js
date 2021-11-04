import axios from 'axios'


function getAuthors() {
  return axios.get('https://994b-2001-690-2100-110-a403-ab89-7bb9-268b.ngrok.io/api/getAuthors')
}

const AuthorAPI = {
    getAuthors
}

export default AuthorAPI;