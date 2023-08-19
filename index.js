// ******FIRST ATTEMPT*******
// My mistake was not putting the let cost = document.getElementById("cost").value; inside the Event listener function

// let cost = document.getElementById("cost").value;

// let calculate = document.getElementById("calculate");

// let total = document.getElementById("total");

// calculate.addEventListener("click", function () {
//   let sum = parseInt(cost) * 0.8;
//   let tip = parseInt(cost) - sum;
//   total.innerHTML = "your tip is $" + Math.round(`${tip}`);
// });

let calculate = document.getElementById("calculate");
let total = document.getElementById("total");

calculate.addEventListener("click", function () {
  let cost = document.getElementById("cost").value; // Move this line inside the event listener

  let sum = parseInt(cost) * 0.8;
  let tip = parseInt(cost) - sum;
  total.innerHTML = "Your tip is $" + Math.round(tip);
});
