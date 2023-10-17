function pads(el){
    
    if (el==1) {

        var nme=1;
    }
    if (el==2) {

        var nme=2;
    }
    if (el==3) {

        var nme=3;

    }

    localStorage.setItem("myValue2", nme);
    window.location.href="buy.html";
    console.log(nme);
    document.getElementById("#price").value=price;
    document.getElementById("#name").value=nme;
    document.getElementById("#desc").value=desc;
}
function poep() {
    document.getElementById("poppy").scrollIntoView();
}