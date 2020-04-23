import Builder from "./Builder.js";

class IntBuilder extends Builder {

    constructor(value = 0) {
        super(Number(value));
    }

    minus(...n) {
        this.value = this.value - n.reduce((x, y) => x + y, 0);
        return this;
    }

    multiply(n) {
        this.value = this.value * n;
        return this;
    }

    divide(n) {
        this.value = this.value / n;
        return this;
    }

    mod(n) {
        this.value = this.value % n;
        return this;
    }

    get() {
        return this.value;
    }

}

export default IntBuilder;

/*
new IntBuilder(int) // constructor takes starting integer, if not passed starts with 0;
.plus(...n)         // take infinite number of integers and sum all with stored value;
.minus(...n)        // take infinite number of integers and subtract from stored value; 
.multiply(n)        // multiply param n on stored value;
.divide(n)          // leaves integer part of division stored value on n; 
.mod(n)             // leaves remainder of the division stored value with on n;
.get()              // returns stored value;
*/
