// this is a constructor lesson
// car cunstructor

var car = function(year, make, model, color) {
     this.year = year;
     this.make = make;
     this.model = model;
     this.color = color;
}

var cutless = new car(1972,"Olsmobile","cutless","CandyGreen");
var chevelle = new car (1972,"chevy","chevelle","midnight purple");
var harley = new car(1991,"harleydavidson","softail","rootbeer");
var silverado = new car(2009,"chevy","silverado","black");

console.log(cutless);
console.log(chevelle);
console.log(harley);
console.log(silverado);

//people constructor

var person = function(name, age, gender, job){
     this.name = name;
     this.age = age;
     this.gender = gender;
     this.job = job;
}

var ron = new person("Ron",39,"man","taking care of family");
var charrise = new person("Charrise",43,"woman","raising children");
var kassondra = new person("Kassondra",15,"girl","student");
var keona = new person("Keona",9,"girl","home schooled");
var khlowi = new person("Khlowi",7,"girl","whinner");
var leinalo = new person("Leinalo",3,"boy","weinie boy");

console.log(ron,charrise,kassondra,keona,khlowi,leinalo);


// object.create

var personProto = {
    caculateAge: function() {
        cosole.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = "john";
john.yearOfBirth =  1990;
john.job = "teacher";

var jane = Object.create(personProto,{
name: {value: "jane"},
yearOfBirth: {value: 1969},
job: {value: "designer"}

});

// Primitives vs Objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
  name: "john",
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// function
var age = 27;
var obj = {
  name: "jonas",
  city: "lisbon"
};

function change(a,b) {
   a = 30;
   b.city ="san francisco";
}

change(age, obj);

console.log(age);
console.log(obj.city);

// functions returning functions

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name +", can u please explain what ux design is?");
    }
  }else if (job === "teacher") {
    return function (name) {
      console.log("what do you teach, " + name +"?");
    else
        return function(name) {
          console.log("Hello Puppet!" + "What do you do?");
        }
      }
    }

  var teacherQuestion =
  interviewQuestion("teacher");
  var designerQuestion =
  interviewQuestion("designer");

  teacherQuestion("John");
  designerQuestion("John");


  // closures

  function retirement(retirementAge) {
    var a = "years left until retirement";
    return function(yearOfBirth) {
      var age = 2016 - yearOfBirth;
      conslo.log((retirementAge - age) + a);
    }
  }

  var retirementAgeUs = tetirement(66);
  retirementAgeUs(1990);


  // bind, call and apply

  var John = {
    name: "john",
    age: 26;
    job: "teacher",
    presentation: function(style, timeOfDay) {
      if (style === "formal") {
        console.log("good " + timeOfDay + ",Ladies and gentelmen! I\"m "
       this.name + ", I\"m a " +this.job + "and I\"m " + this.age + " years old.");
     }else if (style === "friendly"){
       console.log("Hey whats up? I\"m" + this.name + ", I\"m a "
      +this.job + "and I\"m " + this.age + " years old. Have a nice" + timeOfDay + ".");
        }
    }
  }

  var emily = {
    name: "emily",
    age: 35;
    job: "designer"
  };

  john.presentation("formal" , "morning");

  john.presentation.call(emily, "friendly", "afternoon");

  // john.presentation.apply(emily,["friendly", "afternoon"]);

  var johnFriendly =
  john.presentation.bind(john, "friendly");
  johnFriendly("morning");
  johnFriendly("night");

  var emilyFormal =
  john.presentation.bind(emily , "formal");
  emilyFormal("afternoon");
