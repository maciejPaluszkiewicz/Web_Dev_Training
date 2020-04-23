import Builder from "./Builder.js";

const StringBuilder = function (value) {
    Builder.call(this, value);
};

StringBuilder.prototype.minus = function (n) {
    this.value = this.value.substring(0, this.value.length - n);
    return this;
}
StringBuilder.prototype.multiply = function (n) {
    this.value = this.value.repeat(n);
    return this;
}
StringBuilder.prototype.divide = function (n) {
    this.value = this.value.substring(0, Math.floor(this.value.length / n));
    return this;
}
StringBuilder.prototype.remove = function (n) {
    this.value = this.value.split(n).join("");
    return this;
}
StringBuilder.prototype.sub = function (from, n) {
    this.value = this.value.substring(from, from + n);
    return this;
}
    /*
new StringBuilder(str)   // constructor takes starting string, if not passed starts with '';
plus(...str)             // takes infinite number of strings and concat with stored string;
minus(n)                 // cut last n chars from stored string;
multiply(int)            // repeat stored strings n times;
divide(n)                // leaves first k chars of stored string, where k = Math.floor(str.length / n);
remove(str)              // remove taken string str from stored; Prohibited to use String.prototype.replace(); 
sub(from, n)             // leaves substring starting from and with length n;
get()                    // returns stored value;

*/
