    
const value1 = { x: 1, y: 2 };
const value2 = { p: 3, q: 2 };

function addition(x, y) {
  console.log(this);
  console.log(x + y);
}

addition.apply(value1, [2, 3]);
addition.call(value2, 2, 3);
const y = addition.bind(value1, 6, 8);
console.log(y);
y();

//eventlisteners
document.getElementById("event1").onclick = function () {
  myFunction();
};

function myFunction() {
    document.getElementById("event1").innerHTML = "Ah! Here we go again";
  }