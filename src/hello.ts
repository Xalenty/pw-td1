import type { Human } from "./types.ts"

export function helloWorld() : string {
    return "Hello, World!";
    }

export function helloYou(nom : string) : string {
    //nom = "john";
    return "Hello "+nom+" !"
}


export function helloHuman(humain : Human){
    var age : number = new Date().getFullYear()-humain.birthyear;
    return "Hello "+humain.firstname +" "+ humain.lastname+", you are "+age+" years old"
}

export function repeatHelloYou ( nom : string, n : number) : string{
    var concat : string="";
    for (let index = 0; index < n ; index++) {
        concat+="Hello "+nom+" !\n";
    }
    return concat;
}