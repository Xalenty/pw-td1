import { helloHuman, helloWorld, helloYou, repeatHelloYou } from "./hello";
import type { Human } from "./types";

var message: string = helloWorld();
console.log(message);

try {
    console.log(helloYou("john"));
} catch (error) {
    console.log("Problème avec la fonction helloYou");
}

try {
    var john: Human = { firstname: "John", lastname: "Doe", birthyear: 1980 };
    console.log(helloHuman(john));

} catch (error) {
    console.log("Problème avec la fonction helloHuman");
}

/* try {
    var john: Human = { firstname: "John", lastname: "Doe", birthyear: pasbonne };
    console.log(helloHuman(john));

} catch (error) {
    console.log("Problème avec la fonction helloHuman");
} */

try {
    console.log(repeatHelloYou("johnson", 10));

} catch (error) {
    console.log("Problème avec la fonction repeatHelloYou");
}