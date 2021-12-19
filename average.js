
function average(numbers) {
  // filters NaN elements
  const NaNFilter = (element) => !(isNaN(element));
  let filteredNumbers = numbers.filter(NaNFilter);

  // filters outliers (2 separate functions due to line length constraint)
  const outlierFilter= (element) => element<-20 || element>60 ? null : element;
  filteredNumbers = filteredNumbers.filter(outlierFilter);

  return filteredNumbers.reduce((p, c)=> p + c, 0) / filteredNumbers.length;
}

module.exports = {average};
