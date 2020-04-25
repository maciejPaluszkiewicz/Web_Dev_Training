const Builder = require('./Builder');

const StringBuilder = function StringBuilder(value = '') {
  Object.assign(this, new Builder(value));
};

StringBuilder.prototype = Object.create(Builder.prototype);

StringBuilder.prototype.minus = function minus(n) {
  this.value = this.value.substring(0, this.value.length - n);
  return this;
};

StringBuilder.prototype.multiply = function multiply(n) {
  this.value = this.value.repeat(n);
  return this;
};

StringBuilder.prototype.divide = function divide(n) {
  this.value = this.value.substring(0, Math.floor(this.value.length / n));
  return this;
};

StringBuilder.prototype.remove = function remove(n) {
  this.value = this.value.split(n).join('');
  return this;
};

StringBuilder.prototype.sub = function sub(from, n) {
  this.value = this.value.substring(from, from + n);
  return this;
};

module.exports = StringBuilder;
