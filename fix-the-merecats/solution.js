'use strict';

function fixTheMeerkat(arr) {
 //your code here
 var pos1 = arr[0];
 var pos2 = arr[1];
 var pos3 = arr[2];
 arr = [];
 arr.push(pos3);
 arr.push(pos2);
 arr.push(pos1);
 return arr;
};
