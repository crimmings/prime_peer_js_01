//step 1
var value = 42;
console.log(value);

//step 2
 if (value >= 53) {
 value += 42;
 } else {
 value -= 13;
 };
console.log(value);
 //val=29

//step 3
 var createString = '11';
value += createString;
 //val='1129'
console.log(value);

 //step4
 var array = [];
 for (var i=0; i < value.length; i++) {
  array[i] = value.charAt(i);
  console.log(i, array[i], value.charAt(i));
 };
 console.log(value);
console.log(array);

//step 5
 array.shift();
 array.pop();
 console.log('step5', value);
console.log('step5', array);

 //step 6

var newVariable = '';

for (i = array.length-1; i>=0; i--){
  console.log('newVariable:', array[i]);
  newVariable += array[i];
}
console.log(newVariable)
console.log(value);

//step 7
value = parseInt(value);
newVariable = parseInt(newVariable);
console.log(value);
console.log(newVariable);

//step 8

value = value + newVariable;
console.log(value);


//step 9

if(value < 60){
  value = 14;
} else if (value === 2930){
  value = 27;
} else {
  value = 2;
};
console.log(value);


//step 10
var i = 10;
while( i > 0 ){
  value++;
  i--;
};
console.log(value);

//step 11

function peerwork(val){
  val = val.toString();
  if (val.length > 0){
    val = val.substr(1);
    return val;
  };

};
  value = peerwork(value);

//step 12

console.log(value);
