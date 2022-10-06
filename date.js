// console.log(module);

// module.exports = getDate;

exports.getDate = function () {
  const today = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    // year: "numeric",
  };

  return today.toLocaleDateString("en-US", options);

  // let today = new Date();

  // let options = {
  //   weekday: "long",
  //   month: "long",
  //   day: "numeric",
  //   // year: "numeric",
  // };

  // return today.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  const today = new Date();

  const options = {
    weekday: "long",
    // year: "numeric",
  };

  return today.toLocaleDateString("en-US", options);
};

// console.log(module.exports);
