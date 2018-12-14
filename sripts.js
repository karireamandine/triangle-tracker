function getResult(){
    var side1=parsefloat(document.getElementById('side1').value);
    var side2=parsefloat(document.getElementById('side2').value);
    var side3=parsefloat(document.getElementById('side3').value);
if(side1===side2 && side2===side3){
    alert ("This is an equilateral triangle");
}
else if (side1===side2 || side1===side3 || side2===side3){
    alert ("This is an isoscle triangle");
}
else if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1){
    alert("Not a definite triangle");
}
else{
    alert("This is a scalene triangle");
}
}