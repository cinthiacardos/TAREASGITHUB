
//EXERCISE 3

const arr = [2, 4, 6, 8, 10];

sumayproducto(arr);

function sumayproducto(arr2) {
    let producto;
    let suma;

    suma = arr2.reduce((resultado, elemento) => { 
        return resultado + elemento;
    });

    producto = arr2.reduce((resultado, elemento) => {
        return resultado * elemento;
    });

    console.log(`Suma: ${suma} producto: ${producto}`);
}


