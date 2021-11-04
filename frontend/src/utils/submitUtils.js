const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/jpg"]
const MAX_FILE_SIZE = 5000000

function validateFile(file, errorCallback) {
    if (!ALLOWED_TYPES.includes(file.type)) {
        errorCallback("error", "File Upload Error", "The type of the file that you tried to upload is not valid! Try to select another one")
        return false;
    }
    if (MAX_FILE_SIZE < file.size) {
        errorCallback("error", "File Upload Error", "The type of the file that you tried to upload is too big! Try to select a smaller one")
        return false;
    }
    console.log(file)
    return true
}

function validateName(value) {
    let error
    if (!value) {
        error = "Name field is required"
    } else if (value.length < 3) {
        error = "The name provided is too short"
    } else if (value.length > 50) {
        error = "The name provided is too big"
    }
    return error
}

function validateQuestion(value) {
    let error
    if (!value) {
      error = "Question field is required"
    }
    return error
}

const SubmitUtils = {
    validateFile: validateFile,
    validateName: validateName,
    validateQuestion: validateQuestion,
}

export default SubmitUtils;