"use strict";

const getForm = document.getElementById("userForm");
getForm.addEventListener("submit", function(e){
    e.preventDefault();

const words = ["sdfas", "sged", "bfdshd", "cat", "ouojnlno", "wetew", "caoasodias", "s", "dc", "tywywunmwah", "nwo", "coagi", "cq", "mnohadoag", "fpeewt", "ui", "baodfnaoegw", "bfdsdhs"];

//wrap function in a loop, based on dynamic length user will input
let userInput = document.getElementById("userSelect").value;
// console.log(userInput);
for(let i = 1; i <= userInput; i++) {
    console.log(i);
    //returns userInput number

const writeWords = () => {
    words.forEach(function() {
        let wordLength = words.length;
        let rando = words[Math.floor(Math.random() * wordLength)];
        console.log(rando);
        document.getElementById("lorem").innerHTML += `${rando}\n`;
    });  
}
writeWords();
}

});