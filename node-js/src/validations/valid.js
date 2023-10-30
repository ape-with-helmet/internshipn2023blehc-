const validEmail = (email) => {
    return email.match (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
}

//password validation
const validPassword = (password) => {
    return password.match (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)
}

//mobile validation
const validMobile = (mobile) => {
    return mobile.match (/^[0-9]{10}$/)
}

module.exports = {validEmail,validPassword,validMobile}