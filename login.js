function checkLoginValidation() {
    axios.post(
        'http://localhost:3000/login',
        {"user": {
            "user_id": "init_id",
            "password": "init_pass"
            }
        }
    );

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
