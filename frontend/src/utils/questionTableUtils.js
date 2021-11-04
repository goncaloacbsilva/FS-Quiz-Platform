import KnowledgeAreaAPI from "../api/knowledgeArea";
import AuthorAPI from "../api/author"

class TransferQuestion {
    constructor() {
        this.question = {}
    }

    updateQuestion(question) {
        this.question = question
    }
}

function findInDict(key, value, dict) {
    let element = []
    dict.forEach(el => {
        if (el[key] === value) {
            element = el;
        }
    })
    return element;
}

function processKnowledgeArea(data, knowledgeAreaDB) {
    data.forEach((question) => {
        let entry = findInDict("id", question["areaid"], knowledgeAreaDB)
        if (entry !== []) {
            question["knowledgeArea"] = entry["areaname"]
        } else {
            question["knowledgeArea"] = "Not found"
        }
    });
    return data
}


function processAuthorName(data, authorsDB) {
    data.forEach((question) => {
        let entry = findInDict("id", question["author_id"], authorsDB)
        if (entry !== []) {
            question["authorName"] = entry["authorname"]
        } else {
            question["authorName"] = "Not found"
        }
    });
    return data
}

function postProcessing(data) {
    // Process KnowledgeAreaIds
    return new Promise((resolve, reject) => {
        let processedData = data
        KnowledgeAreaAPI.getKnowledgeAreas()
        .then(res => res.data)
        .then((knowledgeAreaDB) => {
            processedData = processKnowledgeArea(processedData, knowledgeAreaDB)
        })
        .then(() => {
            AuthorAPI.getAuthors()
            .then(res => res.data)
            .then((authorsDB) => {
                processedData = processAuthorName(processedData, authorsDB)
                resolve(processedData)
            })
            .catch((err) => {
                console.log(err)
                reject(err.message)
            })
        })
        .catch((err) => {
            console.log(err)
            reject(err.message)
        })
    })
}

function filterArea(area, questions) {
    let filterQuestions = []
    if (area !== "all") {
        console.log("Search enabled, filtering for: " + area)
        questions.forEach((question) => {
            if (question["knowledgeArea"] === area) {
                filterQuestions.push(question)
            }
        })
    } else {
        filterQuestions = questions
    }
    return filterQuestions
}

function checkMultipleChoice(rowData) {
    return !(
        rowData["answera"] === "" &&
        rowData["answerb"] === "" &&
        rowData["answerc"] === "" &&
        rowData["answerd"] === ""
    );
}

const QuestionTableUtils = {
    TransferQuestion: TransferQuestion,
    postProcessing: postProcessing,
    checkMultipleChoice: checkMultipleChoice,
    filterArea: filterArea
}

export default QuestionTableUtils;