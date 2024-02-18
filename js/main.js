// select button --------------------------------------------------

const buttons = document.getElementsByClassName("overlay");


for(const button of buttons) {
    button.addEventListener("click", function(event){

        // get all button id -----------------------------

        const selected = button.getAttribute("id");

        // get seats left id -----------------------------

        const seatsLeft = document.getElementById("seats-left").innerText;
        const seatsLeftInt = parseInt(seatsLeft);

        // get selected seat num id ----------------------

        const selectSeatNum = document.getElementById("selected-seat-num").innerText;
        const selectSeatNumInt = parseInt(selectSeatNum);
        console.log(selectSeatNum)
        
        if(seatsLeftInt > 36) {

            // selected ticket ---------------------------

            overlay(selected);

            // seats available ---------------------------

            const available = seatsLeftInt - 1;
            showElement("seats-left", available);

            // selected seats number ---------------------

            const selectedNum = selectSeatNumInt + 1;
            showElement("selected-seat-num", selectedNum)
        }
        
    })
}

// console.log(buttons)