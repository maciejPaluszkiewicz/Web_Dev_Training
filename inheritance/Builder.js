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

export default Builder;

/*
new IntBuilder(int) // constructor takes starting integer, if not passed starts with 0;
.plus(...n)         // take infinite number of integers and sum all with stored value;
.minus(...n)        // take infinite number of integers and subtract from stored value; 
.multiply(n)        // multiply param n on stored value;
.divide(n)          // leaves integer part of division stored value on n; 
.mod(n)             // leaves remainder of the division stored value with on n;
.get()              // returns stored value;

new StringBuilder(str)   // constructor takes starting string, if not passed starts with '';
plus(...str)             // takes infinite number of strings and concat with stored string;
minus(n)                 // cut last n chars from stored string;
multiply(int)            // repeat stored strings n times;
divide(n)                // leaves first k chars of stored string, where k = Math.floor(str.length / n);
remove(str)              // remove taken string str from stored; Prohibited to use String.prototype.replace(); 
sub(from, n)             // leaves substring starting from and with length n;
get()                    // returns stored value;

*/