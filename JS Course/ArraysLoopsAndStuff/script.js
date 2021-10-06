let scores = [10, 20, 10];

// increasing all scores by 1

// using a while loop
let i = 0;
while(i < scores.length) {
  scores[i]++;
  i++;
}

console.log(scores);

// using a for loop
for(i = 0; i < scores.length; i++){
  scores[i]++;
}

console.log(scores);

scores.forEach(function(entry, index){
  // console.log(entry, index);
  // entry++;
  scores[index]++;
});

console.log(scores);

let catalog = [
  {
    title: 'JS for Beginners',
    author: 'Zenva',
    copies: 1
  },
  {
    title: 'HTML for Beginners',
    author: 'Zenva',
    copies: 1
  },
  {
    title: 'CSS for Beginners',
    author: 'XYZ',
    copies: 1
  }
];

catalog.forEach(function(entry){
  if(entry.author == 'Zenva') {
    entry.copies++;
  }
});

console.log(catalog);

let a = [[1, 2, 3], [4, 5, 6, 7]];
console.log(a);

// accessing elements
console.log(a[0][1]);

// changing elements
a[1][2] = 100;
console.log(a[1][2]);

let terrains = [
  ['desert', 'desert', 'grass', 'grass'],
  ['desert', 'grass', 'water', 'grass'],
  ['grass', 'grass', 'water', 'water'],
  ['grass', 'grass', 'grass', 'grass']
];

console.log(terrains);