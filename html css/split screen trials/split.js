var usn='abcde';
var psw='12345';
function checkcreds() {
    let check1=document.querySelector('#usn').value;
    let check2=document.querySelector('#psw').value;
    if (check1==usn && check2==psw) {
        alert('Successfully logged in');
        window.open("https://www.facebook.com/");
        let new_window =
        open(location, '_self');
        new_window.close();
    }
    else{
        alert('Wrong credentials');
        let new_window =
        open(location, '_self');
        new_window.close();
        return false;
    }
}

