var checkboxes = document.querySelectorAll('.item input[type="checkbox"]');
checkboxes.forEach(checkbox => { checkbox.addEventListener('click', handleEvent)});
let lastCecked;
function handleEvent(e) {
    lastCecked = this;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            
        })
    }

}