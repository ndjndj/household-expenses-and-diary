function checkValidation(condition, errorRetVal, validRetVal) {
    return condition ? errorRetVal : validRetVal
 }

function getUniqueString(strong=1000, initialString='') {
    return initialString + new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16);
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
    row.id =
}
