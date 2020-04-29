function add(num1, num2) {
    console.log([...arguments])
     return num1 +num2;
    
}
const result = add(1,2,3,4);
console.log(result);