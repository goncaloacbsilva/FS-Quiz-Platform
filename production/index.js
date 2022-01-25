const { request, response } = require('express')
const path = require('path')
const cors = require('cors')
const express = require('express')
const multer  = require('multer')
const storage = require('./multer_storage_conf')
const upload = multer({ storage: storage })
const app = express()
const db = require('./queries')
const port = 3000

// Multer file upload configuration

const cpUpload = upload.fields(
  [
    { name: 'questionImage', maxCount: 1 }, 
    { name: 'resolutionImage', maxCount: 1 }
  ]
)

// CORS Policy configuration

const corsOptions = {
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(cors(corsOptions));
//app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/getQuestions', db.getQuestions)
app.get('/api/getKnowledgeAreas', db.getKnowledgeAreas)
app.get('/api/getAuthors', db.getAuthors)

app.post('/api/submitQuestion', cpUpload, db.postQuestion)

app.get('/api/requestFile/:file', db.requestFile)
app.get('/api/getKnowledgeArea/:id', db.retrieveKnowledgeArea)

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
