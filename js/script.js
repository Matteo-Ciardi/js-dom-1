const myLampOff = document.querySelector(".off-lamp");
// const myLampOn = document.querySelector(".on-lamp");
const myButton = document.querySelector(".my-button");

// let lampAccesa = false;

myButton.addEventListener('click', lampOn);


// function lampOn() {
//     if (lampAccesa) {
//         myLampOn.style.display = "block";
//         myLampOff.style.display = "none";
//         myButton.textContent = "SPEGNI";
//     }

//     else {
//         myLampOn.style.display = "none";
//         myLampOff.style.display = "block";
//         myButton.textContent = "ACCENDI";
//     }

//     lampAccesa = !lampAccesa;
// }

function lampOn() {
    if (myLampOff.src.includes("white_lamp")) {
        myLampOff.src = "img/yellow_lamp.png";
        myButton.textContent = "SPEGNI";
    } else {
        myLampOff.src = "img/white_lamp.png";
        myButton.textContent = "ACCENDI";
    }

}