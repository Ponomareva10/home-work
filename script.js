const arr = [
    { id: 1, name: 'Piter'},
    { id: 2, name: 'Nina' }
];
arr.find(function(item) {
    return arr[1].name;
});
console.log(arr[1].name);

const home = [
    {num: 1, floor: 1, people: 1},
    {num: 2, floor: 1, people: 4},
    {num: 3, floor: 2, people: 5},
    {num: 4, floor: 2, people: 2},
    {num: 5, floor: 3, people: 2},
];

const peoples = home.filter(home => home.people < 3);
console.log(peoples);


let aaray = [1, 2, 3, 4, 5];
aaray.splice(3, 0, 'a', 'b', 'c');
console.log(aaray);

let ar = [1, 2, 3, 4, 5];
const newAr = ar.slice(3, 5);
console.log(newAr);

let mas = [15, 'hello', 'trump', 23, 'world', 999, 176];
const newMas = mas.join('---');
console.log(newMas);