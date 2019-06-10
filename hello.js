var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
        this.aNumber = 112233;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var thisSampleVariable = "hi";
var greeter = new Greeter("world");
console.debug(greeter.aNumber);
