const getForm = document.getElementById("userForm");
getForm.addEventListener("submit", function(e){
    e.preventDefault();

const words = ["sdfas", "sged", "bfdshd", "cat", "ouojnlno", "wetew", "caoasodias", "s", "dc", "tywywunmwah", "nwo", "coagi", "cq", "mnohadoag", "fpeewt", "ui", "baodfnaoegw"];

//wrap function in a loop, based on dynamic length user will input
//style this bish
let userInput = document.getElementById("userSelect").value;
// console.log(userInput);

const writeWords = () => {
    words.forEach(function() {
        let wordLength = words.length;
        let rando = words[Math.floor(Math.random() * wordLength)];
        document.write(`${rando} `);
    });  
}
writeWords();

});