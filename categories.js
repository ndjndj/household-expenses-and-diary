function checkValidation(condition, errorRetVal, validRetVal) {
    return condition ? errorRetVal : validRetVal
  }

function addData() {
    const seqData = document.getElementById('seq');
    const categoryData = document.getElementById('category');

    //check validation
    let message = '';
    message += checkValidation(!seqData, 'seq is null.\n', '');
    message += checkValidation(!categoryData, 'category is null\n', '');
    
}
