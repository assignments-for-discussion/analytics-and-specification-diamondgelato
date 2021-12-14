
function average(numbers) {
  return numbers.filter((element) => element != NaN).reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};
