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

  cellDate.innerHTML = document.getElementById('calendar').value;
  cellCategory.innerHTML = document.getElementById('category').value;
  cellItem.innerHTML = document.getElementById('item').value;
  cellAmount.innerHTML = document.getElementById('amount').value;
  cellDelete.innerHTML = 'aaa';

}

window.addEventListener(
  'load',
  () => {
    addEvent('save', 'click', saveDatas);
  }
);