
function deleteRow(id) {
  const delBtn = document.getElementById(id);
  console.log(delBtn.parentNode.parentNode);
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
}

function addData() {

  const dateData = document.getElementById('calendar');
  const categoryData = document.getElementById('category');
  const itemData = document.getElementById('item');
  const amountData = document.getElementById('amount');

  console.log(dateData.value);
  console.log(itemData.value);
  console.log(amountData.value);
  let message = '';
  let cannotAdd = false;
  if(!dateData.value) {
    message += 'date is null\n';
    cannotAdd = true;
  }
  if(!itemData.value) {
    message += 'item is null\n';
    cannotAdd = true;
  }
  if(!amountData.value) {
    message += 'amount is null\n';
    cannotAdd = true;
  }

  if(cannotAdd) {
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

  cellDate.innerHTML = dateData.value;
  cellCategory.innerHTML = categoryData.options[categoryData.selectedIndex].text;
  cellItem.innerHTML = itemData.value;
  cellAmount.innerHTML = amountData.value;
  createDelButton(cellDelete);

}

window.addEventListener(
  'load',
  () => {
    addEvent('save', 'click', saveDatas);
    addEvent('add', 'click', addData);
  }
);
