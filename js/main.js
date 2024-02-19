// select button --------------------------------------------------

const buttons = document.getElementsByClassName("overlay");


for (const button of buttons) {
    button.addEventListener("click", function (event) {

        // get all button id -----------------------------

        const selected = button.getAttribute("id");

        // get seats left id -----------------------------

        const seatsLeft = document.getElementById("seats-left").innerText;
        const seatsLeftInt = parseInt(seatsLeft);

        // get selected seat num id ----------------------

        const selectSeatNum = document.getElementById("selected-seat-num").innerText;
        const selectSeatNumInt = parseInt(selectSeatNum);



        if (seatsLeftInt > 36) {

            // selected ticket ---------------------------

            overlay(selected);

            // seats available ---------------------------

            const available = seatsLeftInt - 1;
            showElement("seats-left", available);

            // selected seats number ---------------------

            const selectedNum = selectSeatNumInt + 1;
            showElement("selected-seat-num", selectedNum);

            // get ticket info container child & show --------------

            const getContainerChild = document.getElementById("ticket-info-container");
            const getTicketInfo = showTicketInfo(selected);
            getContainerChild.appendChild(getTicketInfo)

            // get total ticket taka ---------------------------

            const getTakas = document.getElementsByClassName("ticket-taka");
            const totalPrices = [];
            let total = 0;

            for (const getTaka of getTakas) {
                const taka = getTaka.innerText;
                const takaInt = parseInt(taka);
                totalPrices.push(takaInt);
            }

            for (const totalPrice of totalPrices) {
                total += totalPrice;
            }

            showElement("total-price", total);

            // select 4 element to get discount ---------------

            if (selectSeatNum === "3") {
                const giveDiscountEnable = document.getElementById("get-discount");
                giveDiscountEnable.classList.remove("bg-first-color/50", "text-white/50");
                giveDiscountEnable.classList.add("extra");
                giveDiscountEnable.removeAttribute("disabled");
            }

            // enable next button ----------------------

            document.getElementById("type-number").addEventListener("keyup", function (event) {
                const element = event.key;
                const elementInt = parseInt(element);
                const selectSeat = document.getElementById("selected-seat-num").innerText;
                const selectSeatInt = parseInt(selectSeat);

                next(elementInt, selectSeatInt);
            })

            const selectSeat = document.getElementById("selected-seat-num").innerText;
            const selectSeatInt = parseInt(selectSeat);
            const numberElement = document.getElementById("type-number").value;
            const numberElementInt = parseInt(numberElement);

            next(numberElementInt, selectSeatInt);
        }
    })
}

document.getElementById("get-discount").addEventListener('click', function () {
    const getElement = document.getElementById("total-price").innerText;
    const getElementInt = getElement;
    const giveDiscount = document.getElementById("give-discount").value;

    if (giveDiscount === "NEW15") {
        const discount = (15 / 100) * getElementInt;
        const totalMoney = getElementInt - discount;
        showElement("total-money", totalMoney);
    } else if (giveDiscount === "Couple 20") {
        const discount = (20 / 100) * getElementInt;
        const totalMoney = getElementInt - discount;
        showElement("total-money", totalMoney);
    }

})

// enable next button ----------------------

document.getElementById("type-number").addEventListener("keyup", function (event) {
    const element = event.key;
    const elementInt = parseInt(element)
    const selectSeat = document.getElementById("selected-seat-num").innerText;
    const selectSeatInt = parseInt(selectSeat);

    next(elementInt, selectSeatInt)
})

// next button popup -----------------------

document.getElementById("next-button").addEventListener("click", function(){
    const hideElements = document.getElementsByClassName("hide-element");
    
    for(const hideElement of hideElements) {
        hideElement.classList.add("hidden");
        const show = document.getElementById("popup");
        show.classList.remove("hidden");
    }
})