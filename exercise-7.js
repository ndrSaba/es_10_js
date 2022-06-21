function sumUntil(maxValue) {
  arr = [1, 2, 3, 4, 5];
  let sum = 0;
  for(let i = 1; i <= maxValue; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumUntil(5));