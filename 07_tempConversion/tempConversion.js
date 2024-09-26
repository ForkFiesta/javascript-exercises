const convertToCelsius = function(temp) {

  const celsius = (5/9)*(temp-32);

  const rounded = Math.round(celsius * 10) / 10;

  return rounded;

};

const convertToFahrenheit = function(temp) {

  const farenheit = ((9/5)*temp)+32;
  const rounded = Math.round(farenheit * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
