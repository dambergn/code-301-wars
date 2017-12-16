'use strict';

//note I was not able to get this to work outside of code wars, if you run the html version you can inspect it and see it work in console.

function validatePIN (pin) {
  //return true or false
  if (pin.match(/^\d{4}$|^\d{6}$/) && (pin.length == 4 || pin.length == 6)){
  return true;
  } else {
  return false;
  }
};
