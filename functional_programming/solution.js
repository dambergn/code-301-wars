//Use map() to double the values in an array
double = array => array.map( num => num * 2);

//List Filtering
function filter_list(l) {
  const result = l.filter(element => typeof(element)!=='string');
  return result;
}

//Calculate average
function find_average(array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer) / array.length;
}
