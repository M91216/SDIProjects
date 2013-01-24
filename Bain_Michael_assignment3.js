//alert("JavaScript works!");

// Michael Bain
// SDI 1301
// Project 3
// Javascript
// 1/20/13


// My Variable

var hotelCapacity = 2;
var willTravel = 4;
var teamMates = {
    names: ["Delquan", "Renaldo","Jesse","Paul"]
    }    
  


//Object Method
// string return and accessor
var meSkater = {
    "name": "Michael",
    "age": 28,
    "specialty": "street",
    "payMethod": "visa",
    "getPayMethod": function (payMethod) { 
    return payMethod;                      
    }   
};
console.log("I thought my hotel reservations were confirmed but I guess there was a problem.")
console.log("The hotel wants to know which credit card I will pay with.")
console.log("I will be using a " + meSkater.payMethod + ".")






//Object Procedure
// nested conditional

var teamMates = {
    names: ["Delquan", "Renaldo","Jesse","Paul"]
    }
    var needHotel = (teamMates.names.length);
    if (needHotel > hotelCapacity) {
var needHotel = (teamMates.names.length);   
    console.log("Bad news, our sponsors budget onlys has room for" + willTravel + "to travel.");
  } else {
    console.log(" The hotel rooms are booked for the" + willTravel + "of us.");   
        
    }   
       
    













