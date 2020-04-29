const students =[
    {id:21, name:"Omar sunny"},
    {id:27, name:"Mannaaaaaa"},
    {id:41, name:"Mouyori"},
    {id:71, name:"Deppjol"}
];
const output = [];

for (let i = 0; i < students.length; i++){
    const element =students[i].name;
    output.push(element);
}
console.log(output);

const names=students.map(s=> s.name);
const ids=students.map(s => s.id);
const bigger =students.filter(s => s.id>40);
const biggerone=students.find(s => s.id > 40);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerone);