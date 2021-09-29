function checkLoginValidation() {
    
    return
}

function addEvent(id, eventType, fn) {
    document.getElementById(id).addEventListener(eventType, fn);
  }

document.addEventListener(
    'load',
    () => {
        addEvent('submit-login', 'submit', checkLoginValidation);
    }
);
