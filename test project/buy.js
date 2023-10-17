var c = localStorage.getItem("myValue2");
console.log(c);
if (c==1){
    document.getElementById("pols").innerHTML="₹4000";
    document.getElementById("name").innerHTML="Brake Pads";
    document.getElementById("desc").innerHTML="A set of performance brake pads.";
    document.getElementById("total").innerHTML="₹3500";
}
if (c==2){
    document.getElementById("pols").innerHTML="₹10000";
    document.getElementById("name").innerHTML="Brake Rotors";
    document.getElementById("desc").innerHTML="A set of performance brake rotors.";
    document.getElementById("total").innerHTML="₹9500";
}
if (c==3){
    document.getElementById("pols").innerHTML="₹1400";
    document.getElementById("name").innerHTML="Brake Lines";
    document.getElementById("desc").innerHTML="A set of performance brake lines.";
    document.getElementById("total").innerHTML="₹900";
}
function alet(){
    alert("Successful purchase!");
}