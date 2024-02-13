/*

Scrivi una funzione che fonda due array presi come parametri
(date per scontato che abbiano lo stesso numero di elementi)
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

*/



const letters = ["a","b","c","d"];
const numbers = [1,2,3,4];


console.log(joinArrays(letters, numbers));








function joinArrays(array1, array2) {

    if(array1.length != array2.length) {
        alert("Gli array devono avere la stessa dimensione");

        // esco dalla funzione
        return
    }

    const newArray = [];

    for (let i = 0; i < array1.length; i++) {

        // ci inserisco il (n)esimo elemento di array1 e array2
        newArray.push(array1[i], array2[i]);


    }

    return newArray;

}