// a function to convert hours to minutes
// 1 hour = 60 minutes
function hourToMinutes(hours) {
    let result = hours * 60;
    console.log(result);
    return result;
  }
  
  // execute the function
  let a = hourToMinutes(10);
  let b = hourToMinutes(20);
  
  // a function expression to convert days to hours
  let dayToHours = function(days) {
    return days * 24;
  };
  
  let c = dayToHours(1);
  console.log(c);
  
  // variables declaration
  let balance = 100;
  let stock = 50;
  let price = 5;
  
  function sellItem(quantity) {
    // check if we have stock
    if(quantity <= stock) {
      // reduce stock, increase balance
      // stock = stock - quantity;
      stock -= quantity;
      
      // balance = balance + price * quantity;
      balance += price * quantity;
      
      console.log('purchase completed', balance, stock);
    }
    else {
      console.log('not enough stock');
    }
  }
  
  // execute the function 
  sellItem(10);
  sellItem(10);
  sellItem(10);
  sellItem(10);
  sellItem(10);
  sellItem(10);

  let database = ['turtle', 'cat', 'dog', 'bird'];
console.log(database);
console.log(database.length);

// accessing array elements
let animal = database[1];
console.log(animal);

// changing array elements
database[0] = 'dinosaur';
console.log(database);

// access last array element
let last = database[database.length - 1];
console.log(last);

// add additional elements to the array
database.push('lizard');
console.log(database);

// remove last element of the array
database.pop();
console.log(database);
// 1. Select
 let sign = document.getElementById('sign');
 console.log(sign);

// 2. Modify
console.log(sign.textContent);

// modify text
sign.textContent = 'Welcome, travelers!';

// modify
//sign.innerHTML = sign.innerHTML + '<p>hello</p>'

// 3. Change style
sign.style.color = 'blue';