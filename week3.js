//Easy
// let task = (prompt = "What are we doing today");
// let run = exercise("running");
// let swim = exercise("swimming");

var run = exercise("running");
run();

var swim = exercise("swimming");
swim();

function exercise(activity) {
  return function () {
    console.log(`Today's exercise: ${activity}`);
  };
}

// //Medium
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
// console.log(sharePizza(3));
// function cutPizzaSlices(slices) {
//   return function (people) {
//     var slicePerPerson = (slices / people).toFixed(2);
//     console.log("Each person gets " + slicePerPerson + " slices of pizza");
//   };
// }

// //Hard
var ID = person();
console.log(ID);
console.log(ID.name);
console.log(ID.ssn);

function person() {
  var pii = {
    name: "Micheal Obama",
    ssn: "123-456-7890",
  };
  return pii;
}

function getName() {
  return pii.name;
}
return {
  getName: getName,
};

// //very hard

// let person1 = new person("David", "pro soccer player", "18");
// person1.exercise();
// person1.fetchjob();

// let programmer = new Programmer("sho", "programmer", 18, [
//   "Javascript",
//   "Python",
// ]);
// programmer.completeTask();
// programmer.offerNewTask();
// programmer.learnLanguage();
// programmer.listLanguages();

// class Person {
//   constructor(name, job, age) {
//     this.name = name;
//     this.job = job;
//     this.age = age;
//   }

//   exercise() {
//     console.log("Running is fun! - The flash.");
//   }

//   fetchjob() {
//     console.log(`${this.name} is a ${this.job}.`);
//   }
// }

// class Programmer extends Person {
//   constructor(name, job, age, languages) {
//     super(name, job, age);
//     this.languages = languages;
//     this.busy = true;
//   }

//   completeTask() {
//     this.busy = false;
//   }

//   acceptNewtask() {
//     this.busy = true;
//   }
//   offerNewTask() {
//     if (this.busy) {
//       console.log(`${this.name} can't accept any new tasks roght now.`);
//     } else {
//       console.log(`${this.name} would love to take on a new responsibility.`);
//     }
//   }
//   learnLanguage(language) {
//     this.language.push(language);
//   }

//   listLanguages() {
//     console.log(`${this.name} knows ${this.languages.join(",")}.`);
//   }
// }
