const numbers=[2,3,4,5,6,7,8,9,10];
const output= [];
for(let i=0; i< numbers.length; i++){

    const element =numbers[i];
    const result=element*element;
    output.push(result);
}
console.log(output);


function square(element) {
    return element*element;
  
}

 const square= element => element*element;
 const square =x=> x * x;  

const result =numbers.map(function(element){
    return element * element;
})

const square =numbers.map(x=> x * x)
console.log(square);

const bigger =numbers.filter(x => x > 2);
console.log(bigger);

const isTHere =numbers.find(x=> x >5);
console.log(isTHere);

