module.exports = class StringCalculator {
  constructor() {}

  calculate(numberString = "") {
    let sum = 0;

    this.convertString(numberString).forEach((number) => {
      sum += +number;
    });

    return sum;
  }

  convertString(string) {
    return string.split(",");
  }
};
