function fibonacci(){
    let input = document.getElementById("fib-input").value;
    let output = document.getElementById("fib-output")
    output.innerHTML = "";

    let b = 0, temp;
    for(let a = 1; a <= input; a){
        output.innerHTML += a + "<br>";
        temp = a;
        a = a + b;
        b = temp;
    }
}
document.getElementById("fib-button").addEventListener("click", fibonacci)