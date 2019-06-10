class Greeter {
    greeting: string;
    aNumber: number;

    constructor(message: string) {
        this.greeting = message;
        this.aNumber = 112233;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let thisSampleVariable = "hi";

let greeter = new Greeter("world");

console.debug(greeter.aNumber);