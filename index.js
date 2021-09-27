function addEvent(id, eventType, fn) {
  document.getElementById(id).addEventListener(eventType, fn);
}

function onClickSaveButton() {
  const reply = confirm('save it?');
}

window.addEventListener(
  'load',
  () => {
    addEvent('save', 'click', onClickSaveButton);
  }
);