function permutation(array) {
  function p(array, temp) {
    var i, x;
    if (!array.length) {
      result.push(temp);
    }
    for (i = 0; i < array.length; i++) {
      x = array.splice(i, 1)[0];
      p(array, temp.concat(x));
      array.splice(i, 0, x);
    }
  }

  var result = [];
  p(array, []);
  return result;
}

function sortNumbers(array) {
  return array.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  })
}

module.exports = { permutation, sortNumbers }