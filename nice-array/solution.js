'use strict';

//note I was not able to get this to work outside of code wars, if you run the html version you can inspect it and see it work in console.

function isNice(arr){
  if (arr === '') {
    return false;
  }
  var isNice = true;
  for (var i = 0; i < arr.length; i++) {
    let number = arr[i];
    let pos = number + 1;
    let neg = number - 1;
    if ((arr.indexOf(pos) === -1) && (arr.indexOf(neg) === -1)){
      return false;
    }
  }
  return isNice;
};
