/*
js voor de navigatie, blijf hier af <3
Zet je eigen js in een nieuw .js bestand <3
*/

let Navigatie = () => {
  var x = document.getElementById("myTopnav");

    if (x.className == "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}
