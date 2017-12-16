'use strict';

//note I was not able to get this to work outside of code wars, if you run the html version you can inspect it and see it work in console.

function capitalize(s) {
  var evenString = [];
  var oddString = [];
  for(var i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      evenString[i] = s[i].toUpperCase();
      oddString[i] = s[i].toLowerCase();
    } else {
      evenString[i] = s[i].toLowerCase();
      oddString[i] = s[i].toUpperCase();
      }
  }
  return [oddString.join(''), evenString.join('')];
}
