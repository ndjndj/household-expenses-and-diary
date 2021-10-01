function checkLoginValidation() {

}

function addEvent(id, eventType, fn) {
    document.getElementById(id).addEventListener(eventType, fn);
  }

window.addEventListener(
    'load',
    () => {
        addEvent('submit-login', 'click', checkLoginValidation);
    }
);


