import { expect, test, describe } from "bun:test"
import { repeatHelloYou, helloHuman, helloYou } from "../src/hello"
import type { Human } from "../src/types";


/* describe(helloworld : function, () => ")  
    test
        expect(machin).toBe(machin) */


describe('test des functions Hello', () => {

    var john: Human = { firstname: "John", lastname: "Doe", birthyear: 1980 }
    test('test du bon affichage de HelloHuman', () => expect(helloHuman(john)).toBe("Hello John Doe, you are 44 years old"));

    test('test du bon affichage de helloYou', () => expect(helloYou("john")).toBe("Hello john !"));

    test('test du bon affichage de repeatHelloYou', () => expect(repeatHelloYou("john",3)).toBe("Hello john !\nHello john !\nHello john !\n"));
});