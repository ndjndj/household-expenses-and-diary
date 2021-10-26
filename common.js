
const addEvent = (id, eventType, fn) => {
    const elem = document.getElementById(id);
    elem.addEventListener(eventType, fn);
};

const getUniqueString = (strong=1000, initialString='') => {
    const now = new Date().getTime().toString(16);
    return initialString + now + Math.floor(strong * Math.random()).toString;
}

const createAndAppendChild = (elem, parent, optHash) => {
    const item = document.createElement(elem);
    for (var key in optHash) {
      item[key] = optHash[key]
    }
    parent.appendChild(item);
}

module.exports = addEvent;
module.exports = getUniqueString;
module.exports = createAndAppendChild;
