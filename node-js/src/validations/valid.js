function validEmail (email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validRegex)) {
        // alert("Valid email address!");
        // document.form1.text1.focus();
        return true;
    } else {
        // alert("Invalid email address!");
        // document.form1.text1.focus();
        return false;
    }
}

//password validation
function validPassword(password){
    var validRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (password.value.match(validRegex)) {
        // alert("Valid email address!");
        // document.form1.text1.focus();
        return true;
    } else {
        // alert("Invalid email address!");
        // document.form1.text1.focus();
        return false;
    }
}

//mobile validation
function validMobile(mobile){
    var validRegex = /^[0-9]{10}$/;
    if (mobile.value.match(validRegex)) {
        // alert("Valid email address!");
        // document.form1.text1.focus();
        return true;
    } else {
        // alert("Invalid email address!");
        // document.form1.text1.focus();
        return false;
    }
}

module.exports = {validEmail,validPassword,validMobile}