//data types = number,string,array,objects
var number1 = 35;
var number2 = 40;
// puting "" makes it a string
alert(number1+number2);

// variables can contain
// letters,numbers,underscores,dollar
// should begin with letters
//and is case sensative

var test = "This is a test";
var Test = "This is another test";

alert(Test);
//styles of variables
//camelCase, PartialCase, under_score

//arrys
var colors =["blue", "green", "purple"];
alert(colors);
// to target spacific number position in array []
alert(colors[2]);
// another way to make array
var colors = new Array("blue", "purple", "green");
alert(colors[2]);
//add to an arry using push method
colors.push("black","orange","yellow");
console.log(colors);
//number array
var numbers = [3,5,7,2,34,6,598,];
//loops
//for loops
for(var i = 0; i< 10; i++){
  console.log(i);
}
//while loops
var i =0;
while(i < 10 ){
  console.log(i);
  i++;
}
//for each loops
var numbers = [34,54,565,3,367,76,]

numbers.forEach(function(number);
 console.log (numbers);

 //conditionals
 // if else statement
 var var1 = 3;
 var var2 = 3;
 if(var1 == var2){
   console.log("this is true");
 }else{
   console.log("this is false");
 }
//switch statement
var fruit = "apple";

switch(fruit){
  case "banana":
  alert(" i hate bannas");
    break;
  case "apple":
  alert("i love apples!");
    break;
  case "orange":
    break;
    alert("oranges are ok");
    break;
    default:
    alert("i love all other fruits");
}

// objects
// object literal

var person ={
  firstName: "Charrise",
  lastName: "Larez",
  age: 34
  Children: ["kassie","kiki","koko","leilei"]
  address:
      street:"1265 via el monte",
      city:"san lorenzo",
      state: "ca"
},
fullName: function(){
  return this.firstName +" "+this.lastName;
}
