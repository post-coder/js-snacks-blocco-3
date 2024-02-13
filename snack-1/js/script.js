/*

Scrivi una funzione che accetti una stringa come argomento
e la restituisca girata (es. "Ciao" -> "oaiC")

*/



document.querySelector("#button").addEventListener("click", function() {

    const text = document.querySelector("#text").value;

    // console.log( reverseString(text) )
    document.querySelector("#result").innerText = reverseString(text);

});



function reverseString(stringToModify) {

    // metodi delle stringhe

    // dividendo in lettere, otteniamo un array
    const dividedStringArray = stringToModify.split("");

    // riordinare al contrario
    const reversedStringArray = dividedStringArray.reverse();

    // riuniamo l'array in una stringa
    const rejoinedString = reversedStringArray.join("");

    // console.log(reversedStringArray

    return rejoinedString;

}