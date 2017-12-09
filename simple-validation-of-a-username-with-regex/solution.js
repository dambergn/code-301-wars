'use strict';

//note I was not able to get this to work outside of code wars, if you run the html version you can inspect it and see it work in console.

function validateUsr(username) {
  res = /^[a-z0-9_]{4,15}$/.test(username);
  return res;
};
