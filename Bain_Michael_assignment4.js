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















     return {
        "validEmail": validEmail
        ""
     }

}

var newLib = new myLibrary();

    
console.log(newLib.validEmail("bey@uty."));




