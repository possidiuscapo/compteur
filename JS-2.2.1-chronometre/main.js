'user strict'


let chrono = {
    heure: 0,
    minute: 0,
    seconde: 0,
    milliseconde: 0
}

let sentance;
document.addEventListener("DOMContentLoaded", function () {
    const buttonStart = document.getElementById("start");
    const buttonStop = document.getElementById("stop");
    const button_reset = document.getElementById("reset");

    sentance = document.querySelector(".chrono");

    buttonStop.ariaDisabled = true;
    let compters;

    buttonStart.addEventListener("click", function () {
        buttonStart.disabled = true;
        buttonStop.disabled = false;
        compters = setInterval(() => {
            chrono.milliseconde++;
            if (chrono.milliseconde > 59) {
                chrono.milliseconde = 0;
                chrono.seconde++;
            };
            if (chrono.seconde >= 60) {
                chrono.seconde = 0;
                chrono.minute++;
            };
            if (chrono.minute >= 60) {
                chrono.minute = 0;
                chrono.heure++;
            };
            if (chrono.heure >= 60) {
                chrono.heure = 0;
            };

            updateDisplay()

        }, 1000 / 60);


    });

    buttonStop.addEventListener("click", function () {
        clearInterval(compters);
        buttonStop.disabled = true;
        buttonStart.disabled = false;
    });

    button_reset.addEventListener("click", function () {
        clearInterval(compters);
        chrono = {
            heure: 0,
            minute: 0,
            seconde: 0,
            milliseconde: 0
        }
        updateDisplay()
    });
    function updateDisplay() {
        sentance.innerText = 
        formatNumer(chrono.heure) + " : " + 
        formatNumer(chrono.minute) + " : " + 
        formatNumer(chrono.seconde) + " : " + 
        formatNumer(chrono.milliseconde);
    }
    updateDisplay();

    function formatNumer(num) {
        return num < 10 ? "0" + num : num;
    }
    formatNumer()
});


/**
 * Operateur ternaiere : (condition) ? "si vrai " : "si faux"
 */
// ((chrono.heure < 10) ? "0" + chrono.heure : chrono.heure) + " : " + ((chrono.minute < 10) ? "0" + chrono.minute : chrono.minute) + " : " + ((chrono.seconde < 10) ? "0" + chrono.seconde : chrono.seconde)



/**
 * function updateChrono() {
    chrono.tiece++;
    if (chrono.milliseconde > 999) {
        chrono.seconde++;
    }else if (chrono.seconde >= 60) {
        chrono.seconde = 0;
        chrono.minute++;
    }else if (chrono.minute >= 60) {
        chrono.minute = 0;
        chrono.heure++;
    }else if (chrono.heure >= 60) {
        chrono.heure = 0;
    };
    updateDisplay();

    setTimeout(updateDisplay, 1000 / 60)
}
updateChrono();

function updateDisplay() {
    sentance.innerText = chrono.heure + " : " + chrono.minute + " : " + chrono.seconde + " : " + chrono.milliseconde;
}
updateDisplay();



 */