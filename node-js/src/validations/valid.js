const validEmail = (email) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

//password validation
const validPassword = (password) => {
    var validRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (password.value.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

//mobile validation
const validMobile = (mobile) => {
    var validRegex = /^[0-9]{10}$/;
    if (mobile.value.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

module.exports = {validEmail,validPassword,validMobile}