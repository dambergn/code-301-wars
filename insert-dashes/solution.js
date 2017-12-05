'use strict';

//note I was not able to get this to work outside of code wars, if you run the html version you can inspect it and see it work in console.

function insertDash(num) {
  var str = num.toString().split('');
  //console.log('string: ' + str);
  var newStr = [];
  newStr.push(str[0]);
  //console.log('newstring: ' + newStr);
  for (var i = 1; i < str.length; i++) {
    var currentNewStrL = newStr.length;
    if ((parseInt(newStr[currentNewStrL-1]) % 2 === 1) && (parseInt(str[i] % 2) === 1)) {
      //console.log('both are odd');
    	newStr.push('-');
      newStr.push(str[i]);
    } else {
    	newStr.push(str[i]);
    }
    //console.log('new string: ' + newStr);
  }
  return newStr.join('');
};
