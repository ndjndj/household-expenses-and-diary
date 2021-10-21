function checkValidation(condition, validRetVal, errorRetVal) {
    return condition ? validRetVal : errorRetVal
 }

function deleteRow(id) {
    const isNotDelete = !confirm('delete it?');
    if(isNotDelete){ return }
    const _rowIndex = document.getElementById(id).parentNode.parentNode.rowIndex;
    const table = document.getElementById('data-table');
    table.deleteRow(_rowIndex);
 }

function getUniqueString(strong=1000, initialString='') {
    return initialString + new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16);
}

function createAndAppendChild(elem, parent, optHash) {
    const item = document.createElement(elem);
    for (var key in optHash) {
      item[key] = optHash[key]
    }
    parent.appendChild(item);
}

function createDelButton(parent) {
    const button = document.createElement('button');
    button.innerHTML = 'DELETE';
    button.id = getUniqueString(undefined, 'delete-button-');
    parent.appendChild(button);
    addEvent(button.id, 'click', function() {deleteRow(this.id)});
  }

 function addEvent(id, eventType, fn) {
    document.getElementById(id).addEventListener(eventType, fn);
}

function addData() {
    const seqData = document.getElementById('seq');
    const categoryData = document.getElementById('category');

    //check validation
    let message = '';
    message += checkValidation(seqData.value, '', 'seq is null.\n');
    message += checkValidation(categoryData.value, '', 'category is null\n');

    if (message != '') {
        window.alert(message);
        return
    }

    const table = document.getElementById('data-table');
    let row = table.insertRow(-1);
    row.id = getUniqueString(undefined, 'tr-');
    let cellSeq = row.insertCell(0);
    let cellCategory = row.insertCell(1);
    let cellDelete = row.insertCell(2);


    createAndAppendChild('input', cellSeq, {'type': 'number', 'value': seqData.value});
    createAndAppendChild('input', cellCategory, {'type': 'text', 'value': categoryData.value});
    createDelButton(cellDelete);
}

function saveData() {
    //confirm post.
    const reply = confirm('save it?');
    if(!reply) {return}

    //get category datas.
    const table = document.getElementById('data-table');
    const datas = table.rows;
    let categories = {'data': []};
    //exclude header row.
    let tmpArray;
    let shouldGetTag = ['INPUT', 'SELECT'];
    let childElem;
    for(var i=1; i < datas.length; i++) {
        tmpArray = [1];
        for(var j=0; j < datas[i].cells.length; j++) {
            childElem = datas[i].cells[j].firstElementChild;
            console.log(childElem);
            if (shouldGetTag.some(item => item == childElem.tagName)) {
                tmpArray.push(childElem.value);
            }
        }
        categories['data'].push(tmpArray);
    }

    console.log(categories);
    console.log('post');
    postData(categories);
    return
}

function postData(data) {
    axios.post(
        'http://localhost:3000/categories',
        {"user": {
            "user_id": 1,
            "password": "init_pass"
            },
            "datas" : data
        }
    ).then(function(response) {
        console.log(response);
        return true;
    }).catch(function(error) {
        return false;
    });

    return false;
}

window.addEventListener(
    'load',
    () => {
        addEvent('add', 'click', addData);
        addEvent('save', 'click', saveData);
    }
);
