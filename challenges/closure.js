// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//  A: nestedFunction is able to access the variable internal because of function scope. It is able to reach outside of itself and find the varibale internal because it is also a nested function inside of myFunction().

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation (num) {
  
  let count = 1;
  count++;
  if(count < num) {
    return count + num * 2;
  }
}

console.log(summation(4));