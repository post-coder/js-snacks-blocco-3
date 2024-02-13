/*

Scrivi una funzione  che accetti una stringa come parametro 
e restituisca la stringa con i caratteri ordinati alfabeticamente
Es: riordina("webmaster") -> "abeemrstw"

*/



document.querySelector("#button").addEventListener("click", function() {

    const inputText = document.querySelector("#text").value;
    
    // console.log(reorder(inputText) )
    document.querySelector("#result").innerText = reorder(inputText)

});







function reorder(string) {

    const stringArray = string.split("")

    // il metodo sort() riordina l'array "sul posto"
    // ovvero modifica se stesso, non c'è bisogno di assegnarlo ad un'altra variabile
    stringArray.sort();

    
    
    // console.log(stringArray);
    return stringArray.join("")

}
