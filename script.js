

var seat = 10;
var firstPrice = 50;
var currentPrice;


var inputHappened = function(currentInput){
    if(seat === 10){ //find the price of the first seat
       seat--;
   currentPrice = firstPrice;
      return `$ ${currentPrice} ${seat} seats left`
      // '$ ' + currentPrice + ' '+seat + " seats left";
    }if(seat === 0){
        return `No more seats left`;
    }else {
        seat --;
        currentPrice = ((currentPrice * 0.05) + currentPrice);
        return `$ ${currentPrice}. ${seat} seats left  `
        // / '$ ' + currentPrice + " " +seat + " seats left";
    }
}







// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   var output = "WOW TEMPERATURE";
//   return output;
// };