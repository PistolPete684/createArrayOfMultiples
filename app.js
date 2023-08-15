function countBy(x, n) {
  //setup array to store multiples and be returned
  let z = [];
  //setup for loop to run through the multiples
for (let i = 1; i <= n; i++) {
  //add the multiples to the new array
  z.push(x * i);
}
  //return new array
  return z;
}