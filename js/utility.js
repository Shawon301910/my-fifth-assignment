function overlay(elementId) {
    const change = document.getElementById(elementId);
    change.classList.remove('text-second-color\/60', 'bg-gray-100/80')
    change.classList.add('extra')
}