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

function saveDatas() {
  const reply = confirm('save it?');
  if(!reply) {return}

  const table = document.getElementById('data-table');
  const datas = table.rows;
  console.log(datas);



}

function checkValidation(condition, validRetVal, errorRetVal) {
  return condition ? validRetVal : errorRetVal
}

function createAndAppendChild(elem, parent, optHash) {
  const item = document.createElement(elem);
  for (var key in optHash) {
    item[key] = optHash[key]
  }
  parent.appendChild(item);
}
function addData() {

  const dateData = document.getElementById('calendar');
  const categoryData = document.getElementById('category');
  const itemData = document.getElementById('item');
  const amountData = document.getElementById('amount');

  //バリデーションチェック
  let message = '';
  message += checkValidation(dateData.value, '', 'date is null\n');
  message += checkValidation(itemData.value, '', 'item is null\n');
  message += checkValidation(amountData.value, '', 'amount is null\n');

  if(message != '') {
    window.alert(message);
    return
  }

  const table = document.getElementById('data-table');
  let row = table.insertRow(-1);
  row.id = getUniqueString(undefined, 'tr-');
  let cellDate = row.insertCell(0);
  let cellCategory = row.insertCell(1);
  let cellItem = row.insertCell(2);
  let cellAmount = row.insertCell(3);
  let cellDelete = row.insertCell(4);

  createAndAppendChild('input', cellDate, {'type': 'date', 'value': dateData.value});
  createAndAppendChild('input', cellItem, {'type': 'text', 'value': itemData.value});
  createAndAppendChild('input', cellAmount, {'type': 'number', 'value': amountData.value});
  cellCategory.innerHTML = categoryData.options[categoryData.selectedIndex].text;

  createDelButton(cellDelete);

}

function loadCategories() {
  axios.get(
    'http://localhost:3000/categories/get-category',
    {
      "user": {
        "user_id": 1,
      }
    }
  ).then(function(response) {
    const data = response.data.data;
    const category = document.getElementById("category");
    console.log(data);
    for(var i=0; i < data.length; i++) {
      createAndAppendChild('option', category, {'value': data[i].id, 'text': data[i].name});
    }
  }).catch(function(error){
    console.log(error);
  });
}

window.addEventListener(
  'load',
  () => {
    loadCategories();
    addEvent('save', 'click', saveDatas);
    addEvent('add', 'click', addData);
  }
);
