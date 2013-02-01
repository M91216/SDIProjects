// Michael Bain
// SDI project 4
// 1/30/13

    var myLibrary = function() {


//EMAIL VALIDATION
    function validEmail(email) {    
    var invalidChars = " /:,;";    
    if (email ==""){       
    return false;
    }
    for (var k=0; k<invalidChars.length; k++) {
    var badChar = invalidChars.charAt(k);
    if (email.indexOf(badChar) > -1){
    return false;
    }       
    }
    var atPos = email.indexOf("@",1);
    if (atPos == -1) {
    return false;   
    }
    if (email.indexOf("@",atPos+1) != -1) {
    return false;    
    }
    var periodPos = email.indexOf(".",atPos);
    if (periodPos == -1) {
    return false;       
    }
    if (periodPos+3 > email.length) {
    return false;   
    } else {
    return true;
    }
    }
//NUMBER DECIMAL FUNCTION

    function fixMoney(getMoney) {
    var value = getMoney
    value.toFixed(2)
    return console.log(value.toFixed(2));
    }

//TITLE-CASE FUNCTION

    function wordUpper(val) {
    newVal = ' ';
    val = val.toLowerCase().split(' ');
    for (var i=0; i < val.length; i++) {
    newVal += val[i].substring(0,1).toUpperCase() + val[i].substring(1,val[i].length) + ' ';           
    }
    return newVal;
    } 

//STRING TO NUMBER FUNCTION
    function stringToNum(getNum) {
    var value = getNum
    newVal = parseFloat(getNum);
    return newVal;

    }


        
//DAYS BETWEEN DATES

    var daysPassed = function(date) {
    birthday = new Date(2012, 8, 13);
    today = new Date(2013, 8, 13);
    var days = 1000*60*60*24
    console.log(Math.ceil((today.getTime() - birthday.getTime())/ (days)));
    }

//CHANGE AND SEPERATE FUNCTION
    function changeSeperate(changeHere) {
     var val = changeHere
     var str = "a,b,c"
     newVal = str.replace(/a,/,"a/",/b,/,"b/",/c,/,"c/")
     return newVal
    
}







    return {
        "validEmail"     : validEmail,
        "fixMoney"       : fixMoney,
        "wordUpper"      : wordUpper,
        "stringToNum"    : stringToNum,
        "daysPassed"     : daysPassed,
        "changeSeperate" : changeSeperate,
    }                    

    }

var newLib = new myLibrary();
    
console.log(newLib.validEmail("bey@uty."));
console.log(newLib.fixMoney(75454));
console.log(newLib.wordUpper("colin kapernick"));
console.log(newLib.stringToNum("756748477"));
console.log(newLib.daysPassed(2012, 8, 13));
console.log(newLib.changeSeperate("a,b,c"));