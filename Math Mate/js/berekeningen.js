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