
const showElm = document.getElementById("show");
const btnShowElm = document.getElementById("turn-on");
const hiddenElm = document.getElementById("hidden");



btnShowElm.addEventListener("click", function() {
    if (showElm.src.includes("white_lamp.png")) {
        showElm.src="img/yellow_lamp.png";
        btnShowElm.textContent= "Spegni"
    } else {
        showElm.src = "img/white_lamp.png";
        btnShowElm.textContent= "Accendi"
    }
})
