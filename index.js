function addEvent(id, eventType, fn) {
  document.getElementById(id).addEventListener(eventType, fn);
}

function doSave() {
  const reply = confirm('save it?');
}


window.addEventListener(
  'load',
  () => {
    addEvent('save', 'click', doSave);
  }
);