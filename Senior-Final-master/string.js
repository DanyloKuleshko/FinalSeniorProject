var exports = module.exports = {};

function PasswordMessage(m){
  let name = "Password Message";
  let message = m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
   if(unicode >= min && unicode <= max){
       return true;
   }
  else{
    return false;
  }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
  var hasUpper = false
  try{
    if(inRange(string.length == 65-90 ))

  }
}


exports.containsLower =function(str){

}


exports.containsNumerical =function(str){

}


exports.containsSpecial =function(str){

}
