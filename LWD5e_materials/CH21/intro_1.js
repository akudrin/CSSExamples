var friends = ["name", "othername", "thirdname", "lastname"];
alert(friends[2]);

var name = "yourName";
if (name === Jennifer) {
  alert("That's my name too! ");
}

var myVariable = 4;
if (myVariable > 5) {
  alert("upper");
} else {
  alert("lower");
}

function alertArraySize(arr) {
  alert(arr.length);
}
var test = [1, 2, 3, 4, 5];
alertArraySize(test);

//nothing returns after return inside function

function bar() {
  return 3;
  alert("We'll never see this alert.");
}

//var and scope

function double(num) {
  total = num + num;
  return total;
}
var total = 10;
var number = double(20);
alert(total); // Alerts 40.

function double(num) {
  var total = num + num;
  return total;
}
var total = 10;
var number = double(20);
alert(total); // Alerts 10.
