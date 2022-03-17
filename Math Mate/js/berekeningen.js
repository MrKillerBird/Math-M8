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

function simpel() { //Erik
    let input1 = document.getElementById("simpel-input-1").value * 1;
    let bewerking = document.getElementById("simpel-input-bewerking").value;
    let input2 = document.getElementById("simpel-input-2").value * 1;
    let output = document.getElementById("simpel-output");
    output.innerHTML = "";

    switch (bewerking) {
        case "+":
            output.innerHTML = input1 + input2;
            break;
        case "-":
            output.innerHTML = input1 - input2;
            break;
        case "%":
            output.innerHTML = input1 / 100 * input2;
            break;
        case "*":
            output.innerHTML = input1 * input2;
            break;
        case "/":
            output.innerHTML = input1 / input2;
            break;
        case "^":
            output.innerHTML = input1 ** input2;
            break;
        case "rest":
            output.innerHTML += input1 % input2;
            break;

        case "eo":
            for (let i = input1; i > 0; i - 2) {
                if (i == 0) {
                    output.innerHTML = "Even";
                } else {
                    output.innerHTML = "Oneven";
                }
            }


        default:
            output.innerHTML = "Error: geen bewerking aangegeven!";
            break;
    }
}
document.getElementById("simpel-button").addEventListener("click", simpel);


function OverEngineered() { //Danny
    let input1 = document.getElementById("OE-input-1").value;
    let output = document.getElementById("OE-output");
    output.innerHTML = "";

    let SyntaxErr = false;


    let negativeNum = false;

    let inputArray = input1.split("");
    let bewerkingen = [];
    let getallen = [];
    let getal = 0;

    if (input1 == "") { output.innerHTML = ""; return; }

    output.innerHTML += inputArray + "<br>";



    for (let i = 0; i < input1.length; i++) {
        if (inputArray[i] == " ") {
            inputArray.splice(i, 1);
        }
    }

    for (let i = 0; i < inputArray.length; i++) {
        switch (inputArray[i]) {
            case "+":
                if (inputArray[i + 1] != "-") {
                    bewerkingen[bewerkingen.length] = "+";
                    inputArray[i] = "";
                }
                break;
            case "-":
                if (inputArray[i + 1] == "-") {
                    bewerkingen[bewerkingen.length] = "+";
                    inputArray[i] = "";
                    inputArray.splice(i + 1, 1);
                } else {
                    bewerkingen[bewerkingen.length] = "-";
                    inputArray[i] = "";
                }
                break;
            case "%":
                bewerkingen[bewerkingen.length] = "%";
                inputArray[i] = "";
                break;
            case "*":
                bewerkingen[bewerkingen.length] = "*";
                inputArray[i] = "";
                break;
            case "/":
                bewerkingen[bewerkingen.length] = "/";
                inputArray[i] = "";
                break;
            case "^":
                bewerkingen[bewerkingen.length] = "^";
                inputArray[i] = "";
                break;
            default:
                //if(isNaN(parseFloat(inputArray[i]))){SyntaxErr = true;}
                break;
        }
        if (SyntaxErr) { output.innerHTML = "<strong>Syntax Error</strong>"; return; }
    }

    output.innerHTML += inputArray + "<br>";
    output.innerHTML += bewerkingen + "<br>";

    // 1+1-2+5-778+-40-110

    inputArray[inputArray.length] = "";

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] == "") {
            getallen[getal] = parseFloat(getallen[getal]);
            output.innerHTML += getallen[getal] + "<br>";
            getal += 2;
            if (inputArray[i + 1]) { getallen[getal - 1] = bewerkingen[getal / 2 - 1]; }
        } else {
            if (!getallen[getal]) { getallen[getal] = ""; }
            getallen[getal] += inputArray[i];
        }
    }
    output.innerHTML += "<br>" + getallen + "<br>";



    for (let i = 0; i < getallen.length; i++) {
        if (getallen[i] == "^") {
            getallen[i] = getallen[i - 1] ** getallen[i + 1];
            getallen.splice(i - 1, 1);
            getallen.splice(i, 1);
            output.innerHTML += getallen + "<br>";
        }
    }
    for (let i = 0; i < getallen.length; i++) {
        if (getallen[i] == "*") {
            getallen[i] = getallen[i - 1] * getallen[i + 1];
            getallen.splice(i - 1, 1);
            getallen.splice(i, 1);
            output.innerHTML += getallen + "<br>";
        }
        if (getallen[i] == "/") {
            getallen[i] = getallen[i - 1] / getallen[i + 1];
            getallen.splice(i - 1, 1);
            getallen.splice(i, 1);
            output.innerHTML += getallen + "<br>";
        }
        if (getallen[i] == "%") {
            getallen[i] = getallen[i - 1] % getallen[i + 1];
            getallen.splice(i - 1, 1);
            getallen.splice(i, 1);
            output.innerHTML += getallen + "<br>";
        }
    }
    for (let i = 0; i < getallen.length; i++) {
        if (getallen[1] == "+") {
            getallen[1] = getallen[0] + getallen[2];
            getallen.splice(0, 1);
            getallen.splice(1, 1);
            output.innerHTML += getallen + "<br>";
        }
        if (getallen[1] == "-") {
            getallen[1] = getallen[0] - getallen[2];
            getallen.splice(0, 1);
            getallen.splice(1, 1);
            output.innerHTML += getallen + "<br>";
        }
    }
    output.innerHTML += "<br>" + getallen + "<br>";


}
document.getElementById("OE-button").addEventListener("click", OverEngineered);



function fibonacci() { //Danny
    let input1 = document.getElementById("fibonacci-input-1").value;
    let output = document.getElementById("fibonacci-output");
    output.innerHTML = "";

    let b = 0,
        temp;
    for (let a = 1; a <= input1; a) {
        output.innerHTML += a + "<br>";
        temp = a;
        a = a + b;
        b = temp;
    }
}
document.getElementById("fibonacci-button").addEventListener("click", fibonacci);


function factorizer() { //Danny
    let input1 = document.getElementById("factorizer-input-1").value;
    let output = document.getElementById("factorizer-output");
    output.innerHTML = "";

    let n = input1 * 1; // *1 maakt het een nummer
    let divisor = 2;
    let factors = [];
    let result = "";

    if (n > 1 && n % 1 == 0) {
        while (n > 1) {
            if (n % divisor == 0) {
                factors.push(divisor);
                n = n / divisor;
            } else {
                divisor++;
            }
        }

        result = factors[0];

        for (let i = 1; i <= factors.length - 1; i++) {
            result += "*" + factors[i];
        }

    } else {
        result = n;
    }
    output.innerHTML = result;
}
document.getElementById("factorizer-button").addEventListener("click", factorizer);

function machten() { //Davey
    let input1 = document.getElementById("machten-input-1").value * 1;
    let input2 = document.getElementById("machten-input-2").value * 1;
    let output = document.getElementById("machten-output");
    output.innerHTML = "";

    for (let index = 0; index <= input2; index++) {
        output.innerHTML += input1 ** index + "<br>";
    }
}
document.getElementById("machten-button").addEventListener("click", machten);

function tafels() { //Erik
    let input1 = document.getElementById("tafels-input-1").value * 1;
    let input2 = document.getElementById("tafels-input-2").value * 1;
    let output = document.getElementById("tafels-output");
    output.innerHTML = "";

    for (let currentNumber = 1; currentNumber <= input2; currentNumber++) {
        let ant = input1 * currentNumber;
        output.innerHTML += input1 + " * " + currentNumber + " = " + ant + "<br>";
    }
}
document.getElementById("tafels-button").addEventListener("click", tafels);

function breuken() { //Erik
    let input1 = document.getElementById("breuken-input-1").value * 1;
    let output = document.getElementById("breuken-output");
    output.innerHTML = "";

    for (let currentNumber = 1; currentNumber <= input1; currentNumber++) {
        let ant = 1 / currentNumber;
        output.innerHTML += '1/' + currentNumber + " = " + ant + "<br>";
    }

}
document.getElementById("breuken-button").addEventListener("click", breuken);