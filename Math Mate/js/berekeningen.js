//gebruik dit als template voor de berekeningen
/*
function berekening(){ //verander de naam van de functie naar de naam van de berekening
    let input1 = document.getElementById("berekening-input-1").value; //verander id naar de juiste input veld
    let input2 = document.getElementById("berekening-input-2").value; //gebruik dit als er een tweede input is
    let output = document.getElementById("berekening-output"); //verander id naar de juiste output veld
    output.innerHTML = "";
    //hieronder je berekening



}
document.getElementById("berekening-button").addEventListener("click", berekening); //verander naar de juiste button id en naam van de functie
*/

function simpel1(){ //Erik
    let input1 = document.getElementById("simpel-input-1").value*1;
    let bewerking = document.getElementById("simpel-input-bewerking").value;
    let input2 = document.getElementById("simpel-input-2").value*1;
    let output = document.getElementById("simpel-output");
    output.innerHTML = "";

    if (bewerking == "+") {
      output.innerHTML = input1 + input2;
    } else if (bewerking == "-") {
      output.innerHTML = input1 - input2;
    } else if (bewerking == "%") {
      output.innerHTML = input1 / 100 * input2;
    } else if (bewerking == "*") {
      output.innerHTML = input1 * input2;
    } else if (bewerking == "/") {
      output.innerHTML = input1 / input2;
    } else if (bewerking == "^") {
      output.innerHTML = input1 ** input2;
    } else if (bewerking == "rest") {
      output.innerHTML += input1 % input2;
    } else {
      output.innerHTML = "Error: geen bewerking aangegeven!";
    }
}
document.getElementById("simpel1-button").addEventListener("click", simpel1);

function fibonacci(){ //Danny
    let input1 = document.getElementById("fibonacci-input-1").value;
    let output = document.getElementById("fibonacci-output");
    output.innerHTML = "";

    let b = 0, temp;
    for(let a = 1; a <= input1; a){
        output.innerHTML += a + "<br>";
        temp = a;
        a = a + b;
        b = temp;
    }
}
document.getElementById("fibonacci-button").addEventListener("click", fibonacci);


function factorizer(){ //Danny
    let input1 = document.getElementById("factorizer-input-1").value;
    let output = document.getElementById("factorizer-output");
    output.innerHTML = "";

    let n = input1*1; // *1 maakt het een nummer
    let divisor = 2;
    let factors = [];
    let result = "";

    if(n > 1 && n % 1 == 0){
        while(n > 1){
            if(n % divisor == 0){
                factors.push(divisor);
                n = n / divisor;
            }else{
                divisor++;
            }
        }

        result = factors[0];

        for(let i = 1; i <= factors.length-1; i++){
            result += "*" + factors[i];
        }

    }else{
        result = n;
    }
    output.innerHTML = result;
}
document.getElementById("factorizer-button").addEventListener("click", factorizer);
