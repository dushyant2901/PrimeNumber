var inputNumber = document.querySelector("#txt-input");
var button = document.querySelector("#btn");
var output = document.querySelector("#output");


function isPrimeNumber(input){
    var prime=true;
 //if(!Number.isInteger(input)||input<2){
   if(input/1===1){
     prime=false
 }else{
    for(var i=2;i<input;i++){
        if(input%i===0){
            prime=false
    }
 }
 }
return prime
};

function clickFunction(){
var userInput=inputNumber.value;
var out=isPrimeNumber(userInput);
if(out===true){
    output.innerText="it is a prime number"
}else{
    output.innerText="it is not a prime number"
}
};

button.addEventListener("click",clickFunction)