const myLampOff = document.querySelector(".off-lamp");
const myLampOn = document.querySelector(".on-lamp");
const myButton = document.querySelector(".my-button");

let lampAccesa = false;

myButton.addEventListener('click', lampOn);


function lampOn() {
    if (lampAccesa) {
        myLampOn.style.display = "block";
        myLampOff.style.display = "none";
        myButton.textContent = "SPEGNI";
    }

    else {
        myLampOn.style.display = "none";
        myLampOff.style.display = "block";
        myButton.textContent = "ACCENDI";
    }

    lampAccesa = !lampAccesa;
}

