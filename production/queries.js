const Pool = require('pg').Pool
const path = require('path');

const pool = new Pool({
  user: '<DB_USER>',
  host: '<DB_HOST>',
  database: '<DB_NAME>',
  password: '<DB_PASSWORD>',
})

const getKnowledgeAreas = (request, response) => {
    pool.query('SELECT * FROM areasdeconhecimento', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getAuthors = (request, response) => {
    pool.query('SELECT * FROM authors', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getQuestions = (request, response) => {
    pool.query('SELECT * FROM questions', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const addAuthor = (authorName, callback) => {
    pool.query('INSERT INTO authors (id, authorName) VALUES (default, $1) RETURNING *', [authorName], (err, res) => {
        callback(err, res)
    })
}

const requestFile = (req, res) => {
    var file = req.params.file
    res.sendFile(path.join(__dirname, '/uploads/', file), (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.status(404).json({"error": "File not found"})
            } else {
                next(err)
            }
        }
    })
}

const retrieveKnowledgeArea = (request, response) => {
    pool.query('SELECT areaname FROM areasdeconhecimento WHERE id = $1', [request.params.id], (error, results) => {
        if (error) {
            throw error
        }
        if (results.rowCount == 0) {
            response.status(200).json([{"areaname":"Not found"}])
        } else {
            response.status(200).json(results.rows)
        }
    })
}

const retrieveSubmissionsAuthor = (authorName) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT id FROM authors WHERE authorName = $1', [authorName], (error, results) => {
            if (error) {
                reject(error)
            }

            // We need to add the author
            if (results.rows.length == 0) {
                addAuthor(authorName, (error, results) => {
                    if (error) {
                        reject(error)
                    }
                    resolve(results.rows[0].id)
                })
            } else {
                resolve(results.rows[0].id)
            }
        })
    })
}

const postQuestion = (request, response, next) => {

    console.log("Received POST Request: ")
    console.log(request.body)

    console.log("Question image: ")

    questionImagePath = ""

    if (request.body.questionImage != "") {
        console.log("Name: " + request.files['questionImage'][0].filename)
        console.log("Path: " + request.files['questionImage'][0].path)
        questionImagePath = request.files['questionImage'][0].path
    }

    resolutionImagePath = ""

    if (request.body.resolutionImage != "") {
        console.log("Name: " + request.files['resolutionImage'][0].filename)
        console.log("Path: " + request.files['resolutionImage'][0].path)
        resolutionImagePath = request.files['resolutionImage'][0].path
    }

    // Retrieve author id
    retrieveSubmissionsAuthor(request.body.author)
    .then((authorId) => {

        
        // Lets submit
        let values = []
        let now = new Date();
        if (request.body.type == "multiple") {
            values = [
                request.body.question,
                questionImagePath,
                resolutionImagePath,
                authorId,
                request.body.areaId,
                request.body.difficulty,
                0,
                0,
                request.body.answerA,
                request.body.answerB,
                request.body.answerC,
                request.body.answerD,
                request.body.correctAnswer,
                now.toISOString().replace(/T/, ' ').replace(/\..+/, '')
            ]
        } else {
            values = [
                request.body.question,
                questionImagePath,
                resolutionImagePath,
                authorId,
                request.body.areaId,
                request.body.difficulty,
                0,
                0,
                "---",
                "---",
                "---",
                "---",
                request.body.correctAnswer,
                now.toISOString().replace(/T/, ' ').replace(/\..+/, '')
            ]
        }

        pool.query('INSERT INTO questions (id, content, image_path, resolution_path, author_id, areaid, difficultyid, used, reviewed, answerA, answerB, answerC, answerD, correctAnswer, dateAndTime) VALUES (default, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)', values, (err, res) => {
            if (err) {
                throw err
            }
            response.status(200).json({"response": "200 - OK"});
        })

    })
}


module.exports = {
    getKnowledgeAreas,
    getQuestions,
    getAuthors,
    postQuestion,
    requestFile,
    retrieveKnowledgeArea
}
