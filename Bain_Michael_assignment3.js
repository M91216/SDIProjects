//alert("JavaScript works!");

// Michael Bain
// SDI 1301
// Project 3
// Javascript
// 1/20/13


// My Variable
var skatersNames = [ "Delquan", "Renaldo", "Jesse", "Paul"];
var DelquanPro = true
var renaldoPro = true;
var paulPro = false;
var jessePro = true;
var hotelCapacity = 2;
var willTravel = 4;
var teamMates = {
    names: ["Delquan", "Renaldo","Jesse","Paul"]
    }    
console.log("As I read about my team I realize we are the most complete skate team around!")

//JSON Data
var teamGrind = {
"team2013": { 
    "skater1": {
        "name": "Delquan",
        "specialty": "Street"
    },
    "skater2": {
        "name": "Renaldo",
        "specialty": "MegaRamp"
    },
    "skater3": {
        "name": "Jesse",
        "specialty": "Vert"
    },
    "skater4": {
        "name": "Paul",
        "specialty": "Street/Vert"        
    }
    
 }
    
    
};

console.log(teamGrind.team2013);


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
console.log("I will be using a " + meSkater.payMethod + ".");



//Object Procedure
// conditional

var teamMates = {
    names: ["Delquan", "Renaldo","Jesse","Paul"]
    }
    var needHotel = (teamMates.names.length);
    if (needHotel > hotelCapacity) {
var needHotel = (teamMates.names.length);   
    console.log("Bad news, our sponsors budget only has room for " + willTravel + " to travel.");
  } else {
    console.log(" The hotel rooms are booked for the" + willTravel + " of us.");   
        
    }   
       
    



//Object Accessor,Mutator and number return
console.log("While we sort out who is going to the X-Games with me I will go over my tricklist.");

var myTrickList = {
    "variableTricks": 5,
    "flipTricks":     4,
    "switchTricks":   7,
    "practice":       function() { //accessor
        var totalPractice = this.variableTricks + this.flipTricks + this.switchTricks;
        return totalPractice;       
    },
    "setPractice": function(newPractice){
        this.switchTricks = newPractice;
    }
};   
console.log ("After running through my tricks it seems that I have " + myTrickList.practice() + " tricks to practice."); 

myTrickList.setPractice(4);

console.log("On second thought I will cut my tricklist down to " + myTrickList.practice() + " tricks.");
console.log("I heard that the X-Games has shortened each contestants run by a few seconds this year.")






//while loop

var key = gadgets

var gadgets = {
    macbook:  1,
    galaxyS3: 1
};
console.log("It's about a six hour trip to the X-Games, gotta makes sure I have my gadgets.");
    var key = 1;
    while (key < 2) {
        console.log("Macbook, check and GalaxyS3, check.");        
    key = key+1;        
};

  
        

// object forloop   
console.log("After a 6 hour flight I arrive in California.");
console.log("I checked my email to discover that my sponsor has sent me all the details for todays event.");

var key = event
var event = {
    sport:     "Skate Street",
    startTime: "4pm",
    entryFee:  "$3300",   
};  
for (var key in event) {       
     console.log("It reads..." + event[key]);
};






//boolean property
var allAccess = {
    numOfPasses: 5,
    numOfGuests: 4,
    allEvents  : true,
    booFunction : function(var1, var2){
        allAccess.allEvents = true;
        var booOutcome = (var1 && var2)
            if (allAccess.numOfPasses >= allAccess.numOfGuests) { // Boolean argument
                console.log("It is " + allAccess.allEvents + ", I have " + allAccess.numOfPasses + " All Access passes for the rest of my team if they can make it.")
            } else {
                console.log("I hope they give me some passes for my team.")
            }return booOutcome; 
    }
};  

allAccess.booFunction(5,4);




//Array function

console.log("I will now call my team to see what they think about sharing the rooms.");

var teamNames = [ "Delquan", " Renaldo", " Jesse", " Paul"];

    minutesPerMember = [ 5, 10, 2, 7, ];
    
for (var teamNumber = 0; teamNumber < teamNames.length; teamNumber++) {
    
    var teamName = teamNames[teamNumber],
    
        minutesThisMember = minutesPerMember[teamNumber];
            
    console.log("Talked to " + teamName + " for " + minutesThisMember + " minutes.");
    
    for (var minutes = 0; minutes < minutesThisMember; minutes += 5) {
        
        var minutesRemain = minutesThisMember - minutes;
        
        
    }
};               
    console.log("I invited " + teamNames + ", I hope they all can fly out to the X-Games.");

















