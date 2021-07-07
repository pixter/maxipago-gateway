/*eslint-disable */
var formatObject = function(object, reference) {
  const formatted = {};
  Object.keys(reference).forEach(key => {
    if (object.hasOwnProperty(key)) {
      if (object[key] instanceof Object) {
        formatted[key] = formatObject(object[key], reference[key]);
      } else {
        formatted[key] = object[key];
      }
    }
  });
  return formatted;
};

exports.formatObject = formatObject;
