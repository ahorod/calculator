
//Business logic
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var division = function(number1, number2) {
  return number1 / number2;
};


var tempConversion = function(number1) {
  return ((number1 - 32) * 5)/9;
};

var volumeConversion = function(numer1){
  return number1 * 3.78541178;
}
//Interface logic

//var number1 = parseInt(prompt("Enter a weight:"));
//var number2 = parseInt(prompt("Enter a height:"));
//var number1 = parseInt(prompt("Enter temprature in fahrenheit:"));

$(document).ready(function(){
  $("form#add").submit(function(event){
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1,number2);
  $("#output1").text(result);
  });

  $("form#sub").submit(function(event){
  event.preventDefault();
  var number1 = parseInt($("#sub1").val());
  var number2 = parseInt($("#sub2").val());
  var result = subtract(number1,number2);
  $("#output2").text(result);
  });

  $("form#mult").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#mult1").val());
    var number2 = parseInt($("#mult2").val());
    var result = multiply(number1,number2);
    $("#output3").text(result);
  });

  $("form#div").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#div1").val());
    var number2 = parseInt($("#div2").val());
    var result = division(number1,number2);
    $("#output4").text(result);
});
});
