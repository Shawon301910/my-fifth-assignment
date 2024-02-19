function overlay(elementId) {
    const change = document.getElementById(elementId);
    change.classList.remove('text-second-color\/60', 'bg-gray-100/80');
    change.classList.add('extra');
}

function showElement(elementId, value) {
    const currentElement = document.getElementById(elementId);
    currentElement.innerText = value;
}

function showTicketInfo(value) {
    const div = document.createElement('div');
    div.classList.add("flex", "justify-between", "pb-3");

    const p1 = document.createElement('p');
    p1.innerText = value;
    div.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerText = "economy";
    div.appendChild(p2);

    const p3 = document.createElement('p');
    p3.classList.add("ticket-taka")
    p3.innerText = "550";
    div.appendChild(p3);

    return div;
}