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

function simpel(){ //Erik
    let input1 = document.getElementById("simpel-input-1").value*1;
    let bewerking = document.getElementById("simpel-input-bewerking").value;
    let input2 = document.getElementById("simpel-input-2").value*1;
    let output = document.getElementById("simpel-output");
    output.innerHTML = "";

    switch (bewerking) {
      case "+": output.innerHTML = input1 + input2;
      break;
      case "-": output.innerHTML = input1 - input2;
      break;
      case "%": output.innerHTML = input1 / 100 * input2;
      break;
      case "*": output.innerHTML = input1 * input2;
      break;
      case "/": output.innerHTML = input1 / input2;
      break;
      case "^": output.innerHTML = input1 ** input2;
      break;
      case "rest": output.innerHTML += input1 % input2;
      break;

      case "eo":
      for (let i = input1; i > 0; i - 2) {
        if (i == 0) {
          output.innerHTML = "Even";
        } else {
          output.innerHTML = "Oneven";
        }
      }


      default: output.innerHTML = "Error: geen bewerking aangegeven!";
      break;
}
document.getElementById("simpel-button").addEventListener("click", simpel);


function OverEngineered(){ //Danny
  let input1 = document.getElementById("OE-input-1").value;
  let output = document.getElementById("OE-output");
  output.innerHTML = "";

  let inputArray = input1.split("");
  let bewerkingen = [];
  let getallen = [];
  let getal = 0;

  let som = [];

  output.innerHTML += inputArray + "<br>";

  for(let i = 0; i <= input1.length; i++){
    
    switch(inputArray[i]){
      case "+":
        bewerkingen[bewerkingen.length] = "+";
        inputArray[i] = "";
        break;
      case "-":
        bewerkingen[bewerkingen.length] = "-"; 
        inputArray[i] = "";
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
    }
  }
  output.innerHTML += inputArray + "<br>";
  output.innerHTML += bewerkingen + "<br>";

  // 1+1-2+5-778+-40-110
  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i] == ""){
      getallen[getal] = parseFloat(getallen[getal]);
      getal += 2;
      if(inputArray[i+1]){getallen[getal-1] = bewerkingen[getal/2-1];}
    }else{
      if(!getallen[getal]){getallen[getal] = "";}
      getallen[getal] += inputArray[i];
    }
  }
  output.innerHTML += getallen + "<br>" + "<br>";



  for(let i = 0; i < getallen.length; i++){
    if(getallen[i] == "^"){
      getallen[i] = getallen[i-1] ** getallen[i+1];
      getallen.splice(i-1,1);
      getallen.splice(i,1);
      output.innerHTML += getallen + "<br>";
    }
  }
  for(let i = 0; i < getallen.length; i++){
    if(getallen[i] == "*"){
      getallen[i] = getallen[i-1] * getallen[i+1];
      getallen.splice(i-1,1);
      getallen.splice(i,1);
      output.innerHTML += getallen + "<br>";
    }
    if(getallen[i] == "/"){
      getallen[i] = getallen[i-1] / getallen[i+1];
      getallen.splice(i-1,1);
      getallen.splice(i,1);
      output.innerHTML += getallen + "<br>";
    }
  }
  for(let i = 0; i < getallen.length; i++){
    if(getallen[1] == "+"){
      getallen[1] = getallen[1-1] + getallen[1+1];
      getallen.splice(1-1,1);
      getallen.splice(1,1);
      output.innerHTML += getallen + "<br>";
    }
    if(getallen[1] == "-"){
      getallen[1] = getallen[1-1] - getallen[1+1];
      getallen.splice(1-1,1);
      getallen.splice(1,1);
      output.innerHTML += getallen + "<br>";
    }
  }
  output.innerHTML += "<br>" + getallen + "<br>";
  if(!getallen[0]){output.innerHTML = "ERROR";}
}
document.getElementById("OE-button").addEventListener("click", OverEngineered);



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
