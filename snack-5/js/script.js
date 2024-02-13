/*

Scrivi una funzione che accetti 
una stringa come parametro e restituisca la stessa stringa 
ma con le iniziali delle parole tutte in maiuscolo
Es: 
funzioneEsempio("nel mezzo del cammin di nostra vita")  
:freccia_destra:  "Nel Mezzo Del Cammin Di Nostra Vita"

*/



document.querySelector("#button").addEventListener("click", function () {

    const inputText = document.querySelector("#text").value;

    
    document.querySelector("#result").innerText = getUppercaseIntials(inputText);
});





function getUppercaseIntials(text) {

    

    // mi salvo un array con le parole corrette
    const finalWords = [];

    // dividiamo il testo in tante parole
    const words = text.split(" ");
    
    for (let i = 0; i < words.length; i++) {

        const actualWord = words[i]

        // prima lettera di ogni parola: actualWord[0]
        // prima lettera in maiuscolo di ogni parola: actualWord[0].toUpperCase()

        // cambiare la prima lettera della parola nella lettera uguale ma maiuscola
        const newWord = actualWord.replace(actualWord[0], actualWord[0].toUpperCase())
        
        finalWords.push(newWord);
    }


    // mi salvo una variabile che userò per comporre la frase finale
    const finalText = finalWords.join(" ");


    return finalText;

    

}