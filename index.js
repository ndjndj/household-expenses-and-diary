
function addEvent(id, eventType, fn) {
  document.getElementById(id).addEventListener(eventType, fn);
}

function saveDatas() {
  const reply = confirm('save it?');
}

function addData() {
  const table = document.getElementById('data-table');
  let row = table.insertRow(-1);
  let cellDate = row.insertCell(0);
  let cellCategory = row.insertCell(1);
  let cellItem = row.insertCell(2);
  let cellAmount = row.insertCell(3);
  let cellDelete = row.insertCell(4);

  const dateData = document.getElementById('calendar');
  const categoryData = document.getElementById('category');
  const itemData = document.getElementById('item');
  const amountData = document.getElementById('amount');

  let message = '';
  let cannotAdd = false;
  if(dateData.value == null || dateData.value == undefined) {
    message += 'date is null\n';
    cannotAdd = true;
  }
  if(itemData.value == null || itemData.value == undefined) {
    message += 'item is null\n';
    cannotAdd = true;
  }
  if(amountData.value == null || amountData.value == undefined) {
    message += 'amount is null\n';
    cannotAdd = true;
  }

  if(cannotAdd) {
    window.alert(message);
    return 
  }

  cellDate.innerHTML = dateData.value;
  cellCategory.innerHTML = categoryData.options[categoryData.selectedIndex].text;
  cellItem.innerHTML = itemData.value;
  cellAmount.innerHTML = amountData.value;
  cellDelete.innerHTML = 'aaa';



}

window.addEventListener(
  'load',
  () => {
    addEvent('save', 'click', saveDatas);
    addEvent('add', 'click', addData);
  }
);
