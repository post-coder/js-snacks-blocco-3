/*

Scrivi una funzione che accetti tre argomenti:
un array e due numeri 
(“a” più piccolo di “b” 
e “b” grande al massimo quanto il numero di elementi dell’array).
Es:
abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
La nostra funzione viene dichiarata ad esempio così
 function tagliaArray(array, posizioneMin, posizioneMax)

La funzione ritornerà un nuovo array con i valori 
che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
Nel nostro caso, se la chiamassimo così 
tagliaArray(arrayNumeri, 2, 4) 
ci restituirebbe un array così composto:
[2, 3, 4]
*/


numbersArray = [0, 1, 2, 3, 4, 5, 6]


console.log(cutArray(numbersArray, 2, 5));




function cutArray(array, minPosition, maxPosition) {

    // metodo compatto "moderno"
    // return array.slice(minPosition, maxPosition + 1)

    const newArray = [];

    // metodo "primitivo" con il for
    for(let i = minPosition; i <= maxPosition; i++) {

        // console.log(array[i]);
        newArray.push(array[i]);

    }

    return newArray;
}