function calculator(){
    let n1 = document.querySelector("#num1").value;
    let oper=document.querySelector("#op").value;
    let n2=document.querySelector("#num2").value;
    switch(oper){
        case 'mul':
            document.getElementById("ans")=parseFloat(n1)*parseFloat(n2);
            break;
        case 'add':
            document.getElementById("ans")=parseFloat(n1)+parseFloat(n2);
            break;
        default:
            alert("error");
            break;
    }
}