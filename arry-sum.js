const numbers=[1,2,3,4];
let sum = 0;
for (let i = 0; i< numbers.length; i++) {
  let element = numbers[i];
  let sum += element;
  return sum;
}
console.log(sum);