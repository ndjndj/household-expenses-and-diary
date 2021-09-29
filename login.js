function checkLoginValidation() {
    window.alert('test');
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
