function calculator(){
    let num = document.querySelector('#num').value;
    console.log(num);
    if (num%2==0) {
        document.getElementById("ans").innerHTML='EVEN'
    }
    else {
        document.getElementById("ans").innerHTML='ODD'
    }
}
