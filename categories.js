function checkValidation(condition, errorRetVal, validRetVal) {
    return condition ? errorRetVal : validRetVal
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
    message += checkValidation(!seqData, 'seq is null.\n', '');
    message += checkValidation(!categoryData, 'category is null\n', '');

    if (message != '') {
        window.alert(messsage);
        return
    }

    const table = document.getElementById('data-table');
    let row = table.insertRow(-1);
    row.id = getUniqueString(undefined, 'tr-');
    row.className = 'row';
    let cellSeq = row.insertCell(0);
    let cellCategory = row.insertCell(1);
    let cellDelete = row.insertCell(2);


    createAndAppendChild('input', cellSeq, {'type': 'number', 'value': seqData.value});
    createAndAppendChild('input', cellCategory, {'type': 'delete', 'value': categoryData.value});
    createDelButton(cellDelete);
}

window.addEventListener(
    'load',
    () => {
        addEvent('add', 'click', addData);
    }
);
