"use strict";

var nameBuilder = function nameBuilder() {
  var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Peyton";
  var lastName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Chiang";

  console.log(firstName + " " + lastName);
};

nameBuilder();