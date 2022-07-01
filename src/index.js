module.exports = function reverse (n) {
  
  n = n + '';
  const result = n.split('').reverse().join('').split('-');
  return Number(result[0])
}
