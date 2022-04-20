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



function delay(t) {
    // roep deze functie op voor delay, je gebruikt zo:
    // await delay(tijd in ms);

    // de functie waarin je de delay oproept moet beginnen met:
    // async function

    return new Promise(resolve => setTimeout(resolve, t));
}



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
        default:
            output.innerHTML = "Error: geen bewerking aangegeven!";
            break;
    }
}
if (document.getElementById("simpel-button")) {
    document.getElementById("simpel-button").addEventListener("click", simpel);
}

function eo() { //Erik
    let input1 = document.getElementById("eo-input-1").value;
    let output = document.getElementById("eo-output");
    output.innerHTML = "";

    let ant = input1 % 2;
    if (ant == 0) {
        output.innerHTML = "Dit getal is: Even";
    } else {
        output.innerHTML = "Dit getal is: Oneven";
    }

}
if (document.getElementById("eo-button")) {
    document.getElementById("eo-button").addEventListener("click", eo);
}




let OERdebug = false;
let OERlive = false;
let OERliveDelay = 1500;
let OERbezig = false;
async function OverEngineered() { //Danny
    let input1 = document.getElementById("OE-input-1").value;
    let output = document.getElementById("OE-output");

    let var1 = document.getElementById("OE-var-x").value;
    let varNaam1 = "x";

    output.innerHTML = "";


    let SyntaxErr = false;
    let inputArray = input1.split("");
    let bewerkingen = [];
    let getallen = [];
    let getal = 0;


    if (input1.replace(/ /g, "") == "") { output.innerHTML = ""; return; }
    if (input1 == "OERdebug") { OERdebug = !OERdebug; output.innerHTML = "debug mode: " + OERdebug; return; }
    if (input1 == "OERlive") { OERlive = !OERlive; output.innerHTML = "live mode: " + OERlive; return; }

    if (OERdebug) { output.innerHTML += inputArray + "<br>"; }

    OERbezig = true;

    for (let i = 0; i < input1.length; i++) {
        while (inputArray[i] == " ") {
            inputArray.splice(i, 1);
        }
    }

    let splitVarNaam1 = varNaam1.split("");
    let naamVar1 = "";
    let naamVars = 0;
    let varGevonden = false;
    for (let i = 0; i < inputArray.length; i++) {
        for (let varNaamIndex = 0; varNaamIndex < splitVarNaam1.length; varNaamIndex++) {
            if (inputArray[i + varNaamIndex] == splitVarNaam1[varNaamIndex]) {
                naamVar1 += inputArray[i + varNaamIndex];
                if (varNaamIndex == splitVarNaam1.length - 1) {
                    varGevonden = true;
                    naamVars++;
                    if (OERdebug) { output.innerHTML += naamVars + " " + naamVar1 + "<br>"; }
                }
            } else { naamVar1 = ""; break; }
        }
        if (varGevonden) {
            inputArray.splice(i, splitVarNaam1.length, naamVar1);
            naamVar1 = "";
            varGevonden = false;
        }
    }


    for (let i = 0; i < inputArray.length; i++) {
        switch (inputArray[i]) {
            case "+":
                bewerkingen[bewerkingen.length] = "+";
                break;
            case "-":
                if (isNaN(parseFloat(inputArray[i - 1])) && inputArray[i + 1] == "(" && inputArray[i - 1] != ")") {
                    bewerkingen[bewerkingen.length] = "-(";;
                    inputArray.splice(i, 2, "-(");
                } else if (isNaN(parseFloat(inputArray[i - 1])) && inputArray[i + 1] == varNaam1 && inputArray[i - 1] != ")") {
                    bewerkingen[bewerkingen.length] = "-(";;
                    inputArray.splice(i, 1, "-(");
                } else if (isNaN(parseFloat(inputArray[i - 1])) && inputArray[i - 1] != ")") {
                    inputArray[i + 1] = "-" + inputArray[i + 1];
                    inputArray.splice(i, 1);
                } else {
                    bewerkingen[bewerkingen.length] = "-";
                }
                break;
            case "%":
                bewerkingen[bewerkingen.length] = "%";
                break;
            case "*":
                bewerkingen[bewerkingen.length] = "*";
                break;
            case "/":
                bewerkingen[bewerkingen.length] = "/";
                break;
            case "^":
                bewerkingen[bewerkingen.length] = "^";
                break;
            case "(":
                bewerkingen[bewerkingen.length] = "(";
                break;
            case ")":
                bewerkingen[bewerkingen.length] = ")";
                break;
            case ".":
                if (inputArray[i - 1] == ".") { SyntaxErr = true; }
                break;
            case ",":
                if (inputArray[i - 1] == ".") { SyntaxErr = true; }
                inputArray[i] = ".";
                break;
            case varNaam1:
                if (inputArray[i - 1] == "-(") {
                    inputArray[i] = String(var1);
                    inputArray.splice(i + 1, 0, ")");
                } else if (!isNaN(parseFloat(inputArray[i - 1]))) {
                    inputArray[i] = String(var1);
                    bewerkingen[bewerkingen.length] = "(";
                    inputArray.splice(i - 1, 0, "(");
                    inputArray.splice(i + 1, 0, "*");
                    inputArray.splice(i + 3, 0, ")");
                } else {
                    inputArray[i] = String(var1);
                    bewerkingen[bewerkingen.length] = "(";
                    inputArray.splice(i, 0, "(");
                    inputArray.splice(i + 2, 0, ")");
                }
                break;

            default:
                if (isNaN(parseFloat(inputArray[i]))) { SyntaxErr = true; }
                break;
        }
        if (SyntaxErr) { output.innerHTML = "<strong>Syntax Error</strong>"; OERbezig = false; return; }
    }
    if (OERdebug) { output.innerHTML += inputArray + "<br>"; }
    for (let i = 0; i < inputArray.length; i++) {
        if (isNaN(parseFloat(inputArray[i])) && inputArray[i] != ".") { inputArray[i] = ""; }
    }

    if (OERdebug) {
        output.innerHTML += inputArray + "<br>";
        output.innerHTML += bewerkingen + "<br>";
    }



    inputArray[inputArray.length] = "";

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] == "") {
            if (!isNaN(parseFloat(getallen[getal]))) { getallen[getal] = parseFloat(getallen[getal]); }
            if (getallen[getal] !== undefined && OERdebug) { output.innerHTML += getallen[getal] + "<br>"; }
            getal += 2;
            if (isNaN(parseFloat(inputArray[i]))) { getallen[getal - 1] = bewerkingen[getal / 2 - 1]; }
        } else {
            if (!getallen[getal]) { getallen[getal] = ""; }
            getallen[getal] += inputArray[i];
        }
    }

    let undefInArray = 0;
    while (getallen.includes(undefined) && undefInArray < getallen.length) {
        if (getallen[undefInArray] === undefined) { getallen.splice(undefInArray, 1); }
        else { undefInArray++; }
    }

    if (OERlive) { output.innerHTML = "[Som]" + "<br>" + getallen.join(" ") + "<br>"; await delay(OERliveDelay); }
    else { output.innerHTML += "<br>" + getallen.join(" ") + "<br>"; }

    let haakBegin = 0;
    let haakEind = 0;
    let haakjes = 0;
    let tussenhaakjes = "";

    async function berekenen() {
        for (let i = haakBegin; i < getallen.length; i++) {
            if (getallen[i] == "(" || getallen[i] == "-(") {
                haakBegin = i;
                haakjes = 1;
            }
            if (getallen[i] == ")") {
                haakEind = i - 1;
                break;
            }
            if (!getallen.includes("(") && !getallen.includes(")")) {
                haakEind = getallen.length - 1;
                haakBegin = 0;
                haakjes = 0;
                break;
            }
        }



        for (let i = haakBegin; i <= haakEind; i++) {
            if ((getallen[i - 1] == "(" || getallen[i - 1] == "-(") && !isNaN(getallen[i]) && getallen[i + 1] == ")") {
                if (OERlive) { output.innerHTML = "[Haakjes verwerken]" + "<br>" + getallen.join(" ") + "<br>"; }
                if (getallen[i - 1] == "-(") {
                    getallen[i] = getallen[i] * -1;
                }
                if (!isNaN(getallen[i - 2]) && !isNaN(getallen[i + 2])) {
                    getallen[i - 1] = "*"
                    getallen[i + 1] = "*"
                } else if (!isNaN(getallen[i - 2])) {
                    getallen[i - 1] = "*"
                    getallen.splice(i + 1, 1);
                } else if (!isNaN(getallen[i + 2])) {
                    getallen[i + 1] = "*"
                    getallen.splice(i - 1, 1);
                } else {
                    getallen.splice(i - 1, 1);
                    getallen.splice(i, 1);
                }
                if (!OERlive) { output.innerHTML += "[Haakjes verwerken]" + "<br>" + getallen.join(" ") + "<br>"; }
                if (OERlive) { await delay(OERliveDelay); }
            }
        }

        if (!getallen.includes("(") && !getallen.includes(")")) { tussenhaakjes = ""; } else { tussenhaakjes = " tussen haakjes"; }

        for (let i = haakBegin; i < haakEind; i++) {
            if (getallen[i] == "^") {
                if (OERlive) { output.innerHTML = "[Exponenten berekenen" + tussenhaakjes + "]" + "<br>" + getallen.join(" ") + "<br>"; }
                getallen[i] = getallen[i - 1] ** getallen[i + 1];
                getallen.splice(i - 1, 1);
                getallen.splice(i, 1);
                if (!OERlive) { output.innerHTML += "[Exponenten berekenen" + tussenhaakjes + "]" + "<br>" + getallen.join(" ") + "<br>"; }
                if (OERlive) { await delay(OERliveDelay); }
            }
        }
        for (let i = haakBegin; i < haakEind; i++) {
            if (getallen[i] == "*") {
                if (OERlive) { output.innerHTML = "[Vermenigvuldigen" + tussenhaakjes + "]" + "<br>" + getallen.join(" ") + "<br>"; }
                getallen[i] = getallen[i - 1] * getallen[i + 1];
                getallen.splice(i - 1, 1);
                getallen.splice(i, 1);
                if (!OERlive) { output.innerHTML += "[Vermenigvuldigen" + tussenhaakjes + "]" + "<br>" + getallen.join(" ") + "<br>"; }
                if (OERlive) { await delay(OERliveDelay); }
            }
            if (getallen[i] == "/") {
                if (OERlive) { output.innerHTML = "[Delen" + tussenhaakjes + "]" + "<br>" + getallen.join(" ") + "<br>"; }
                getallen[i] = getallen[i - 1] / getallen[i + 1];
                getallen.splice(i - 1, 1);
                getallen.splice(i, 1);
                if (!OERlive) { output.innerHTML += "[Delen" + tussenhaakjes + "]" + "<br>" + getallen.join(" ") + "<br>"; }
                if (OERlive) { await delay(OERliveDelay); }
            }
            if (getallen[i] == "%") {
                if (OERlive) { output.innerHTML = "[Modulus berekenen" + tussenhaakjes + "]" + "<br>" + getallen.join(" ") + "<br>"; }
                getallen[i] = ((getallen[i - 1] % getallen[i + 1]) + getallen[i + 1]) % getallen[i + 1];
                getallen.splice(i - 1, 1);
                getallen.splice(i, 1);
                if (!OERlive) { output.innerHTML += "[Modulus berekenen" + tussenhaakjes + "]" + "<br>" + getallen.join(" ") + "<br>"; }
                if (OERlive) { await delay(OERliveDelay); }
            }
        }
        for (let i = haakBegin; i < haakEind - 1; i++) {
            if (getallen[1 + haakjes + haakBegin] == "+") {
                if (OERlive) { output.innerHTML = "[Optellen" + tussenhaakjes + "]" + "<br>" + getallen.join(" ") + "<br>"; }
                getallen[1 + haakjes + haakBegin] = getallen[haakjes + haakBegin] + getallen[2 + haakjes + haakBegin];
                getallen.splice(haakjes + haakBegin, 1);
                getallen.splice(1 + haakjes + haakBegin, 1);
                if (!OERlive) { output.innerHTML += "[Optellen" + tussenhaakjes + "]" + "<br>" + getallen.join(" ") + "<br>"; }
                if (OERlive) { await delay(OERliveDelay); }
            }
            if (getallen[1 + haakjes + haakBegin] == "-") {
                if (OERlive) { output.innerHTML = "[Aftrekken" + tussenhaakjes + "]" + "<br>" + getallen.join(" ") + "<br>"; }
                getallen[1 + haakjes + haakBegin] = getallen[haakjes + haakBegin] - getallen[2 + haakjes + haakBegin];
                getallen.splice(haakjes + haakBegin, 1);
                getallen.splice(1 + haakjes + haakBegin, 1);
                if (!OERlive) { output.innerHTML += "[Aftrekken" + tussenhaakjes + "]" + "<br>" + getallen.join(" ") + "<br>"; }
                if (OERlive) { await delay(OERliveDelay); }
            }
        }
    }

    let vorigOutput;
    let zelfdeOutput = 0;
    while (getallen.length > 1) {
        await berekenen();
        if (getallen + ";" == vorigOutput) { zelfdeOutput++; } else { zelfdeOutput = 0 }
        if (zelfdeOutput == 2) { haakBegin = 0 }
        if (zelfdeOutput == 3) { output.innerHTML += "<br>" + "<strong>Error while calculating</strong>"; break; }

        else { vorigOutput = getallen + ";"; }
    }

    if (OERlive) { output.innerHTML = "[Antwoord]" + "<br>" + getallen.join(" ") + "<br>"; }
    if (isNaN(getallen) || isNaN(parseFloat(getallen))) { output.innerHTML += "<br>" + "<strong>Math Error</strong>" + "<br>"; }
    else { output.innerHTML += "<br>" + getallen.join(" ") + "<br>"; }

    OERbezig = false;

    // testberekeningen:
    // 1+1-2+5-778+-40-110
    // ((5/3,1)7*2+0,4)^3+-((5(5,125+(6-20)))*2)^2--600%42,1
}
if (document.getElementById("OE-button")) {
    document.getElementById("OE-button").addEventListener("click", function () {
        if (!OERbezig) { OverEngineered(); }
    });
}






function tafels() { //Erik
    let input1 = document.getElementById("tafels-input-1").value * 1;
    let input2 = document.getElementById("tafels-input-2").value * 1;
    let output = document.getElementById("tafels-output");
    output.innerHTML = "";

    for (let currentNumber = 1; currentNumber <= input2; currentNumber++) {
        output.innerHTML += input1 + " * " + currentNumber + " = " + input1 * currentNumber + "<br>";
    }
}
if (document.getElementById("tafels-button")) {
    document.getElementById("tafels-button").addEventListener("click", tafels);
}

function machten() { //Erik & Davey
    let input1 = document.getElementById("machten-input-1").value * 1;
    let input2 = document.getElementById("machten-input-2").value * 1;
    let output = document.getElementById("machten-output");
    output.innerHTML = "";

    for (let currentNumber = 0; currentNumber <= input2; currentNumber++) {
        output.innerHTML += input1 + "^" + currentNumber + " = " + input1 ** currentNumber + "<br>";
    }
}
if (document.getElementById("machten-button")) {
    document.getElementById("machten-button").addEventListener("click", machten);
}

function breuken() { //Erik
    let input1 = document.getElementById("breuken-input-1").value * 1;
    let output = document.getElementById("breuken-output");
    output.innerHTML = "";

    for (let currentNumber = 1; currentNumber <= input1; currentNumber++) {
        output.innerHTML += '1/' + currentNumber + " = " + 1 / currentNumber + "<br>";
    }
}
if (document.getElementById("breuken-button")) {
    document.getElementById("breuken-button").addEventListener("click", breuken);
}

function kwadraten() { //Erik
    let input1 = document.getElementById("kwadraten-input-1").value * 1;
    let output = document.getElementById("kwadraten-output");
    output.innerHTML = "";

    for (let currentNumber = 1; currentNumber <= input1; currentNumber++) {
        output.innerHTML += currentNumber + "^2 = " + currentNumber ** 2 + "<br>";
    }

}
if (document.getElementById("kwadraten-button")) {
    document.getElementById("kwadraten-button").addEventListener("click", kwadraten);
}



function fibonacci() { //Danny
    let input1 = document.getElementById("fibonacci-input-1").value;
    let output = document.getElementById("fibonacci-output");
    output.innerHTML = "";

    let b = 0;
    let temp;

    for (let a = 1; a <= input1; a) {
        output.innerHTML += a + "<br>";
        temp = a;
        a = a + b;
        b = temp;
    }
}
if (document.getElementById("fibonacci-button")) {
    document.getElementById("fibonacci-button").addEventListener("click", fibonacci);
}

function priemgetallen() { //Danny
    let input1 = document.getElementById("priemgetallen-input-1").value;
    let output = document.getElementById("priemgetallen-output");
    output.innerHTML = "";

    let getallen = [];
    let huidigGetal;

    for (let i = 2; i <= input1; i++) { //zet alle nummers van 2 tot de max in een array
        getallen.push(i);
    }

    for (let i = 0; i < getallen.length; i++) { //gaat door alle getallen in de array
        huidigGetal = getallen[i];
        for (let i = 0; i < getallen.length; i++) {
            if (getallen[i] != huidigGetal && getallen[i] % huidigGetal == 0) { //kijkt of de getal in de array deelbaar is door het huidige getal en niet het huidige getal zelf is
                getallen.splice(i, 1); //haalt nummer in de array weg als de stelling hierboven waar is
            }
        }
    }
    output.innerHTML = getallen.join("<br>");
}
if (document.getElementById("priemgetallen-button")) {
    document.getElementById("priemgetallen-button").addEventListener("click", priemgetallen);
}

function collatz() { //Danny
    let input1 = document.getElementById("collatz-input-1").value;
    let output = document.getElementById("collatz-output");
    output.innerHTML = "";

    let getal = input1;

    while (getal > 1) {
        output.innerHTML += getal;
        if (getal % 2 == 0) {
            getal = getal / 2;
            output.innerHTML += " / 2 = " + getal + "<br>";
        } else {
            getal = getal * 3 + 1;
            output.innerHTML += " * 3 + 1 = " + getal + "<br>";
        }
    }
}
if (document.getElementById("collatz-button")) {
    document.getElementById("collatz-button").addEventListener("click", collatz);
}

function perfectNumber() { //Danny
    let input1 = document.getElementById("perfectnumber-input-1").value;
    let output = document.getElementById("perfectnumber-output");
    output.innerHTML = "";

    let getallen = [];
    let getal = input1;
    let optelling = 0;
    let direct = "";

    for (let i = 1; i <= getal / 2 && optelling < getal; i++) {
        if (getal % i == 0) {
            optelling += i;
            getallen.push(i);
            if (getallen[getallen.length - 2] * i == getal) { direct = getallen[getallen.length - 2] + " * " + i + " = " + getal; }
        }
    }

    if (optelling == getal && optelling != 0) {
        output.innerHTML =
            getallen.join(" + ") + " = " + getal + "<br>"
            + "Directe berekening: " + direct;
    } else {
        output.innerHTML = "Getal is niet perfect";
    }
}
if (document.getElementById("perfectnumber-button")) {
    document.getElementById("perfectnumber-button").addEventListener("click", perfectNumber);
}

function talstelsel() { //Danny
    let input1 = document.getElementById("talstelsel-input-1").value;
    let input2 = document.getElementById("talstelsel-input-2").value;
    let input3 = document.getElementById("talstelsel-input-3").value;
    let output = document.getElementById("talstelsel-output");
    output.innerHTML = "";

    let numConvert = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    function decimalTo(base, num) {
        if (base < 2 || base > 36 || num == "Error") { return "Error"; }
        let getal = 0;
        let getal2 = num;
        let getallen = [];

        while (getal2 > 0) {
            if (isNaN(getal2)) { return "Error"; }
            getal = getal2;
            getal = getal % base;
            getal2 = (getal2 - getal) / base;
            getallen.unshift(numConvert[getal]);
        }
        return getallen.join("");
    }

    function toDecimalFrom(base, num) {
        if (base < 2 || base > 36 || num == "Error") { return "Error"; }
        let getal = num.split("");
        let getal2 = 0;
        let convertedNum = 0;

        for (let i = 0; i < getal.length; i++) {
            convertedNum = numConvert.indexOf(getal[getal.length - i - 1]);
            if (convertedNum >= base || convertedNum < 0) { return "Error"; }
            getal2 += convertedNum * base ** i;
        }
        return getal2;
    }

    if (input3 > 999999999999999) {
        output.innerHTML = "<strong>Javascript maximum bereikt</strong>";
        return;
    }

    let getal = decimalTo(input2, toDecimalFrom(input1, input3));

    if (getal == "Error") {
        output.innerHTML = "<strong>Error</strong>";
    } else {
        output.innerHTML += "<br>" + getal;
    }
}
if (document.getElementById("talstelsel-button")) {
    document.getElementById("talstelsel-button").addEventListener("click", talstelsel);
}



let factorizerBezig = false;
function factorizer() { //Danny
    let input1 = document.getElementById("factorizer-input-1").value;
    let output = document.getElementById("factorizer-output");
    output.innerHTML = "";

    let n = input1;
    let divisor = 2;
    let factors = [];

    let max = 9999999;
    if (n > max && input1 != "") {
        output.innerHTML += "<strong>Getal te groot</strong>";
        return;
    }

    factorizerBezig = true;

    if (n > 1 && n % 1 == 0) {
        while (n > 1) {
            if (n % divisor == 0) {
                factors.push(divisor);
                n = n / divisor;
            } else {
                divisor++;
            }
        }
        output.innerHTML = factors.join(" * ") + " = " + input1;
    } else {
        output.innerHTML = input1;
    }
    factorizerBezig = false;
}
if (document.getElementById("factorizer-input-1")) {
    document.getElementById("factorizer-input-1").addEventListener("input", function () {
        if (!factorizerBezig) { factorizer(); }
    });
}

function romanizer() { //Danny
    let input1 = document.getElementById("romanizer-input-1").value;
    let output = document.getElementById("romanizer-output");
    output.innerHTML = "";

    let getal = input1;
    let getal2 = 0;
    let getal3 = 0;

    if ((getal < 1 || getal > 4999) && input1 != "") {
        output.innerHTML += "<strong>Getal moet groter dan 0 en kleiner dan 5000 zijn</strong>";
        return;
    }

    getal = getal % 1000;
    getal2 = (input1 - getal - getal3); getal3 += getal2;
    output.innerHTML += "M".repeat(getal2 / 1000);

    getal = getal % 900;
    getal2 = (input1 - getal - getal3); getal3 += getal2;
    output.innerHTML += "CM".repeat(getal2 / 900);

    getal = getal % 500;
    getal2 = (input1 - getal - getal3); getal3 += getal2;
    output.innerHTML += "D".repeat(getal2 / 500);

    getal = getal % 400;
    getal2 = (input1 - getal - getal3); getal3 += getal2;
    output.innerHTML += "CD".repeat(getal2 / 400);

    getal = getal % 100;
    getal2 = (input1 - getal - getal3); getal3 += getal2;
    output.innerHTML += "C".repeat(getal2 / 100);

    getal = getal % 90;
    getal2 = (input1 - getal - getal3); getal3 += getal2;
    output.innerHTML += "XC".repeat(getal2 / 90);

    getal = getal % 50;
    getal2 = (input1 - getal - getal3); getal3 += getal2;
    output.innerHTML += "L".repeat(getal2 / 50);

    getal = getal % 40;
    getal2 = (input1 - getal - getal3); getal3 += getal2;
    output.innerHTML += "XL".repeat(getal2 / 40);

    getal = getal % 10;
    getal2 = (input1 - getal - getal3); getal3 += getal2;
    output.innerHTML += "X".repeat(getal2 / 10);

    getal = getal % 9;
    getal2 = (input1 - getal - getal3); getal3 += getal2;
    output.innerHTML += "IX".repeat(getal2 / 9);

    getal = getal % 5;
    getal2 = (input1 - getal - getal3); getal3 += getal2;
    output.innerHTML += "V".repeat(getal2 / 5);

    getal = getal % 4;
    getal2 = (input1 - getal - getal3); getal3 += getal2;
    output.innerHTML += "IV".repeat(getal2 / 4);

    getal = getal % 1;
    getal2 = (input1 - getal - getal3);
    output.innerHTML += "I".repeat(getal2 / 1);
}
if (document.getElementById("romanizer-input-1")) {
    document.getElementById("romanizer-input-1").addEventListener("input", romanizer);
}

let morseBeeps = false;
let morseBezig = false;
function morsenizer() { //Danny
    let input1 = document.getElementById("morsenizer-input-1").value;
    let output = document.getElementById("morsenizer-output");
    output.innerHTML = "";

    if (input1 == "#morseBeeps") { morseBeeps = !morseBeeps; output.innerHTML = "morse beeps: " + morseBeeps; return; }

    let short_beep = new Audio('./sounds/morse_code_beep_short.ogg');
    let long_beep = new Audio('./sounds/morse_code_beep_long.ogg');

    morseBezig = true;

    let woorden = input1.split(" ");
    for (let i = 0; i < woorden.length; i++) {
        while (woorden[i] == "") {
            woorden.splice(i, 1);
        }
    }

    function morseEncode(letter) {
        switch (letter) {
            case "A": case "a":
                return ".-";

            case "B": case "b":
                return "-..";

            case "C": case "c":
                return "-.-.";

            case "D": case "d":
                return "-..";

            case "E": case "e":
                return ".";

            case "F": case "f":
                return "..-.";

            case "G": case "g":
                return "--.";

            case "H": case "h":
                return "....";

            case "I": case "i":
                return "..";

            case "J": case "j":
                return ".---";

            case "K": case "k":
                return "-.-";

            case "L": case "l":
                return ".-..";

            case "M": case "m":
                return "--";

            case "N": case "n":
                return "-.";

            case "O": case "o":
                return "---";

            case "P": case "p":
                return ".--.";

            case "Q": case "q":
                return "--.-";

            case "R": case "r":
                return ".-.";

            case "S": case "s":
                return "...";

            case "T": case "t":
                return "-";

            case "U": case "u":
                return "..-";

            case "V": case "v":
                return "...-";

            case "W": case "w":
                return ".--";

            case "X": case "x":
                return "-..-";

            case "Y": case "y":
                return "-.--";

            case "Z": case "z":
                return "--..";


            case "0":
                return "-----";

            case "1":
                return ".----";

            case "2":
                return "..---";

            case "3":
                return "...--";

            case "4":
                return "....-";

            case "5":
                return ".....";

            case "6":
                return "-....";

            case "7":
                return "--...";

            case "8":
                return "---..";

            case "9":
                return "----.";


            case ".":
                return ".-.-.-";

            case ",":
                return "--..--";

            case "?":
                return "..--..";

            case "'":
                return ".----.";

            case "!":
                return "-.-.--";

            case "/":
                return "-..-.";

            case "(":
                return "-.--.";

            case ")":
                return "-.--.-";

            case "&":
                return ".-...";

            case ":":
                return "---...";

            case ";":
                return "-.-.-.";

            case "=":
                return "-...-";

            case "+":
                return ".-.-.";

            case "-":
                return "-....-";

            case "_":
                return "..--.-";

            case '"':
                return ".-..-.";

            case "$":
                return "...-..-";

            case "@":
                return ".--.-.";


            default:
                return "?";
        }
    }

    async function playMorseBeeps(morse) {
        await delay(1000);
        morse = morse.split("")
        for (let i = 0; i < morse.length; i++) {
            switch (morse[i]) {
                case ".":
                    short_beep.play();
                    output.innerHTML += ".";
                    await delay(150);
                    break;

                case "-":
                    long_beep.play();
                    output.innerHTML += "-";
                    await delay(450);
                    break;

                default:
                    output.innerHTML += " ";
                    await delay(450);
                    break;
            }
        }
        morseBezig = false;
    }

    for (let i = 0; i < woorden.length; i++) {
        let letters = woorden[i].split("");
        for (let i = 0; i < letters.length; i++) {
            letters[i] = morseEncode(letters[i]);
        }
        woorden[i] = letters.join(" ");
    }
    woorden = woorden.join(" / ");

    output.innerHTML = woorden + "<br>";

    if (morseBeeps) { playMorseBeeps(woorden); } else { morseBezig = false; }
}
if (document.getElementById("morsenizer-button")) {
    document.getElementById("morsenizer-button").addEventListener("click", function () {
        if (!morseBezig) { morsenizer(); }
    });
}