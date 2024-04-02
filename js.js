
const input = document.querySelector("#input")
const output = document.querySelector("#output")
const history = document.querySelector("#history")
var historryCount = 0;
var historyShowed = false;

var leftOperatorValue="";
var operator="";
var currentValue="";

function btnValue(btnValue) {
// leftOperatorValue="";
if (historyShowed == true) {
 if (btnValue !== "*" && btnValue !== "/" && btnValue !== "+" && btnValue !== "-" && btnValue !== "%") {
     input.value = btnValue;
     output.value = ""
     historyShowed = false;
     currentValue+=btnValue;
 } else {
     input.value += btnValue;
     if(btnValue=="+"||btnValue=="-"||btnValue=="*"){
         leftOperatorValue=input.value;
         currentValue="";
     }
     historyShowed = false;
 }
} else {
 if (input.value === "0" && btnValue !== "*" && btnValue !== "/" && btnValue !== "+" && btnValue !== "-" && btnValue !== "%") {
     input.value = btnValue;
     currentValue+=btnValue;
 } else {
     input.value += btnValue;
     currentValue+=btnValue;
     if(btnValue=="+"||btnValue=="-"||btnValue=="*"){
         leftOperatorValue=input.value;
         currentValue="";
     }
     // console.log(leftOperatorValue)
 }
}

}
function clearInput() {
input.value = 0;
output.value = "";
currentValue="";

}

function Result() {
if (input.value != 0) {
 output.value = input.value + "=";
 input.value = eval(input.value);
 showHistory();
}

}
// slice method takes input(start index{inclusive} ,end index{exclusive})
// -1 mwans last character of string

function Delete() {
currentValue=currentValue.slice(0,-1);
if (input.value.length != "1") {
 input.value = input.value.slice(0, -1)
} else {
 input.value = "0";
}
}

function showHistory() {
if(historryCount==0){
 history.innerHTML = `  <div class="history">
 <button></button><p>${output.value}</p>
 <p>${input.value}</p>
</div>`
}else{
 history.innerHTML += `  <div class="history">
 <button></button><p>${output.value}</p>
 <p>${input.value}</p>
</div>`
}
historryCount++;
historyShowed = true;
}

function clearHistory() {
var choice= "Are you sure, you want to clear history?"
if(confirm(choice)){
 history.innerHTML = "<p>There is no history yet...</p>";
}

}

function Percentage(){
operator=leftOperatorValue[leftOperatorValue.length-1]
var leftValueEvaluate=eval(leftOperatorValue.slice(0,-1));
console.log(leftOperatorValue)
console.log(currentValue);

//    var inputValueArray =input.value.split(operator);
//    var rightOperatorValue=inputValueArray[1];
//    var leftoperator= inputValueArray[0]
if(operator=="+"||operator=="-"){
var percentResult= (+currentValue* +leftValueEvaluate)/100;
input.value=leftOperatorValue+percentResult;
}else if(operator=="*"){
var percentResult= (+currentValue)/100;
input.value=leftOperatorValue+percentResult;
}
}
