class Builder {
  constructor(value) {
    this.value = value;
  }

  plus(...n) {
    this.value = n.reduce((x, y) => x + y, this.value);
    return this;
  }

  minus() {
    return this;
  }

  multiply() {
    return this;
  }

  divide() {
    return this;
  }

  get() {
    return this.value;
  }
}

module.exports = Builder;
