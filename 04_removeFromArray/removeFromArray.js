const removeFromArray = function(arr, ...value) {
const values = value;
return arr = arr.filter(item => !values.includes(item));
}
// Do not edit below this line
module.exports = removeFromArray;