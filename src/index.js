module.exports = function warmup(temperature) {
  if (typeof temperature === "number") {
    return (temperature * 9 / 5) + 32;
  } else {
    console.log("Warning: temperature is not a number"); 
    return;
  }
};
