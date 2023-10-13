function calculator(){
    let n1 = document.querySelector('#num1').value;
    let oper=document.querySelector('#op').value;
    let n2=document.querySelector('#num2').value;
    console.log(oper);
    console.log(n1);
    console.log(n2);
    if (oper=='*') {
        document.getElementById("ans").innerHTML=parseFloat(n1)*parseFloat(n2);
    }
    if (oper=='+') {
        document.getElementById("ans").innerHTML=parseFloat(n1)+parseFloat(n2);
    }
    if (oper=='-') {
        document.getElementById("ans").innerHTML=parseFloat(n1)-parseFloat(n2);
    }
    if (oper=='/') {
        document.getElementById("ans").innerHTML=parseFloat(n1)/parseFloat(n2);
    }
    if (oper=='%') {
        document.getElementById("ans").innerHTML=parseFloat(n1)%parseFloat(n2);
    }
}