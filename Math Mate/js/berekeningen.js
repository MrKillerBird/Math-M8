//gebruik dit als template voor de berekeningen
/*
function berekening(){ //verander de naam van de functie naar de naam van de berekening
    let input = document.getElementById("berekening-input-1").value; //verander id naar de juiste input veld
    let output = document.getElementById("berekening-output") //verander id naar de juiste output veld
    output.innerHTML = "";
    //hieronder je berekening



}
document.getElementById("berekening-button").addEventListener("click", fibonacci) //verander naar de juiste button id en naam van de functie
*/





function fibonacci(){
    let input = document.getElementById("fibonacci-input-1").value;
    let output = document.getElementById("fibonacci-output")
    output.innerHTML = "";

    let b = 0, temp;
    for(let a = 1; a <= input; a){
        output.innerHTML += a + "<br>";
        temp = a;
        a = a + b;
        b = temp;
    }
}
document.getElementById("fibonacci-button").addEventListener("click", fibonacci)