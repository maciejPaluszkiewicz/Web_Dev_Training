const Builder = require('./Builder');

class IntBuilder extends Builder {
  constructor(value = 0) {
    super(Number(value));
  }

  static random(from, to) {
    const min = Math.ceil(from);
    const max = Math.floor(to);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  minus(...n) {
    this.value -= n.reduce((x, y) => x + y, 0);
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  divide(n) {
    this.value /= n;
    return this;
  }

  mod(n) {
    this.value %= n;
    return this;
  }
}

module.exports = IntBuilder;
