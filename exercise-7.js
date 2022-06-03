function sumUntil() {
  arr = [1, 2, 3, 4, 5];
  sum = 0;
  while (arr.length > 0) {
      sum += arr.pop();
  }
  return sum;
}
console.log(sumUntil(5));