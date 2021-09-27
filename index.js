function addEvent(id, eventType, fn) {
  document.getElementById(id).addEventListener(eventType, fn);
}

function saveDatas() {
  const reply = confirm('save it?');
}

function 

window.addEventListener(
  'load',
  () => {
    addEvent('save', 'click', saveDatas);
  }
);