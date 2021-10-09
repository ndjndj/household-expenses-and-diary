
const addEvent = (id, eventType, fn) => {
    document.getElementById(id).addEventListener(eventType, fn);
};

module.exports = addEvent;
