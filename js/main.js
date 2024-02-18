const buttons = document.getElementsByClassName("overlay");

for(const button of buttons) {
    button.addEventListener('click', function(event){
        const selected = button.getAttribute('id');
        overlay(selected);
        console.log(selected)
    })
}

// console.log(buttons)