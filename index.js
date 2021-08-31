var initialPrice = document.querySelector('#initial-price');
var stocksQunatity = document.querySelector('#stock-q');
let currentPrice = document.querySelector('#current-price');

var submitBtn = document.querySelector('#submmit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    let ip = initialPrice.value ;
    let qty = stocksQunatity.value ;
    let curr = currentPrice.value ;
   
    ProfitAndLoss(ip,qty,curr);
}

function ProfitAndLoss(initial, quantity, current)
{
    if(initial > current)
    {
        var loss = (initial -current) * quantity;
        var lossPercentage = (loss/ initial) * 100;
        showOutput(` Hey the loss is ${loss} and the loss percentage is ${lossPercentage}`)
    }else if(current > initial){
        var Profit = (current - initial) * quantity;
        var ProfitPercentage = (Profit/ initial)* 100;

        showOutput(` Hey the profit is ${Profit} and the percentage is ${ProfitPercentage}`)
    }else{
        showOutput('No profit this time.');
    }
    
}

function showOutput(message) {
    if(initialPrice.value == null || initialPrice == "", stocksQunatity.value == null || stocksQunatity.value == "", currentPrice.value == null || currentPrice.value == "")
     {outputBox.innerHTML= "Pls fill in the details.";}
    else if (initialPrice.value <= 0 || stocksQunatity.value <= 0 ||  currentPrice.value <= 0)
     {outputBox.innerHTML= "The values of the fields should be above 0(zero)."; }
    else
    outputBox.innerHTML = message;
}


