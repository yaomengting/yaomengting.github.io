String.prototype.filter = function (banned) {
  return this.toString()
    .split(" ")
    .filter((a) => !banned.includes(a))
    .join(" ");
};

console.log("This house is not nice".filter(["not", "nice"]));

Array.prototype.bubbleSort = function () {
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        var temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// TODO: create the class Teacher and a method teach
var Teacher = function () {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
  return this.name + " is now teaching " + subject;
};
// export Teacher;
