
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arr = [];
  if(matrix === undefined) {
    return []
  }
  matrix.forEach((element, index) => {
  (index % 2 != 0) ? arr.push(element.reverse()) : arr.push(element)
  });;
  return arr.flat();
}
