
function average(numbers) {
  const filterFunc = (element) => !(isNaN(element));
  
  let arr = numbers.filter(filterFunc)
  return arr.reduce((p, c)=> p + c, 0) / arr.length;
}

module.exports = {average};
