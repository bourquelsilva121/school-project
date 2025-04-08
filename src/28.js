function add(numbers) {
  var total = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
