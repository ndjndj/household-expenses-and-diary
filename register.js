function checkLoginValidation() {
    const user_id = document.getElementById('id').value;
    const user_name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    axios.post(
        'http://localhost:3000/login/create_user',
        {"user": {
            "user_id": user_id,
            "user_name": user_name,
            "password": password
            }
        }
    ).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });

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
