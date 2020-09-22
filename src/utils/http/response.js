import ResponseCodes from "./response_codes"

class Response{
    codeValue = ResponseCodes.OK;
    dataValue = null;
    errorValue = null;
    errorMessageValue = null;
    constructor(){
        this.code = this.code.bind(this);
        this.data = this.data.bind(this);
        this.error = this.error.bind(this);
        this.errorMessage = this.errorMessage.bind(this);
    }

    code(codeValue = ResponseCodes.OK){
        this.codeValue = codeValue;
        return this;
    }
    data(dataValue = null){
        this.dataValue = dataValue;
        return this;
    }
    error(errorValue = null){
        this.errorValue = errorValue;
        return this;
    }
    errorMessage(errorMessageValue = null){
        this.errorMessageValue = errorMessageValue;
        return this;
    }
    json(){
        return {
            code: this.codeValue,
            data: this.dataValue,
            error: this.errorValue,
            errorMessage: this.errorMessageValue
        }
    }
}

export default Response;
export {ResponseCodes};


