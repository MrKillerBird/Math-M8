/*
js voor de navigatie, blijf hier af <3
Zet je eigen js in een nieuw .js bestand <3
*/

let showSubmenu = (nr) => {
	var mq = window.matchMedia( "(max-width: 1150px)" );
	var dropdownID = "myDropdown" + nr;
	//klein scherm
	if (mq.matches){
		document.getElementById(dropdownID).classList.toggle("show");
	}
}
