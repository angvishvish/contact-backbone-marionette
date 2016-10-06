var Objet_a = ['one', 'two', 'three']
var Objet_b = ['one', 'two', 'three', 'four', 'five']

function isArrayEqual (a, b) {
  if (a.length != b.length) return false;
  for(var i = 0, length1 = a.length; i < length1; i++){
    if (a[i] != b[i]) return false;
  }
  return true;
}

// console.log(isArrayEqual(a, b))

var obj1 = {
  name: 'Angvish',
  address: 'Pune',
  age: '25'
}

// var obj1 = ['one', 'two', 'three', '']; 

var obj2 = {
  name: 'Angvish',
  address: 'Pune',
  age: '25'
}

function keyInArray (obj) {
  var keys = [];
  if (typeof obj !== 'object') return [];
  for(o in obj) {
    keys.push(o);
  }
  console.log(keys)
  return keys;
}

function isObjEqual(obj1, obj2) {
  var keys = keyInArray(obj1),
      length = keys.length;
  console.log(keys)
  var obj = Object(obj1);
  for(var i = 0, length1 = keys.length; i < length1; i++){
    var key = keys[i];
    if (obj2[key] != obj[key] || !(key in obj)) return false;
  }
  return true;
}

// console.log(isObjEqual(obj1, obj2))

function func (arry1, arry2, arry3) {
  var obj = {
    name: arry1,
    address: arry3,
    age: arry2
  }
  return obj;
}


var newObj;
newObj = func.call(newObj, 'Angvish', 25, 'JSR')
// console.log(newObj)
