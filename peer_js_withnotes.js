//1. Start with the number 42 and set that equal to 'value'
var value = 42;

//2. Create condition logic to check if the value is great or equal to 53
//2-1. If true, add 42 to 'value'
//2-2. If false, subtract 13 from 'value'
if (value >= 53){
    value += 42;
  } else {
    value -= 13;
  };
console.log('step 2', value);

//3. Create a string that is set to 11, add it to 'value'
var createString = '11';
value += createString;
//"The addition assignment operator adds the value of the right operand to a variable and assigns the result to the variable."
console.log('step 3', value);

//4. Create an array, loop through 'value' using charAt, set array[i] to each value
var array = [];
for (var i = 0; i < value.length; i++){//i<value.length instead of i<=value.length because value.lenth is more than value indexes
  array[i] = value.charAt(i);
};
console.log('step 4', value);

//5. Remove the first and last values off the array
array.shift();
array.pop();
console.log('step 5', value);

//6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)
var newVariable = '';//'' to create an empty string into which to add array[i]

for (var i = array.length - 1; i >= 0; i-- ){//to loop backwards: set var i to number of items in array via array.length - 1(targets last index).
  newVariable += array[i];
}
console.log('step 6', value);

//7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;
value = parseInt(value);
newVariable = parseInt(newVariable);
console.log('step 7', value);
console.log('step 7', newVariable);

//8. Add 'value' and the new variable created in Step 6 together and store them in 'value'
value = value + newVariable;
console.log('step 8', value);


//9. If the new value of 'value' is less than 60, set 'value' equal to 14. If not, check to see if it is equal to 2930, if it is, set 'value' equal to 27.
//If neither of these are true, set the value to 2.
if(value < 60){
  value = 14;
} else if  (value === 2930){
  value = 27;
} else {
  value = 2;
};
console.log('step 9', value);

//10. Create a while loop that counts down from 10 and increments 'value' by 1.
var i = 10;
while (i > 0){
  value++;
  i--;
};
console.log('step 10', value);
console.log('step 10', i);

//11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there
//is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.

function peerwork (val){
val = val.toString();
  if (val.length > 0){
    val = val.substr(1)//extracts part of string beginning at character specified by index.
    return val;
  };
};
value = peerwork(value);
console.log('step 11', value);

//12. Call the function.
peerwork(value);
console.log('step 12', value);

//13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.
console.log('step 13', value);

//14. Your answer should be a String value that equals 7. Is that what you got?*/
//yep.
