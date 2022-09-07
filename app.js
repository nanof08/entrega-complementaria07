// let patas = 4;
// let accion = "ladra";

// if(patas == 4 && accion == "Ladra"){
//     console.log("Es un Perro");
// }else{
//     console.log("NO es un perro");
// }

//operadores ternarios

// (patas == 4) && (accion == "Ladra") ? console.log ("Es un perro") : console.log("NO es un perro");



//Desestructuracion

// const liga = ["river", "boca", "racing", "san lorenzo", "independiente"];
// const [ri, bo, ra] = liga;
// console.log(ri);
// console.log(bo);
// console.log(r);


//EL SPREAD

console.clear();

const lista1 = [1,2,3];
const lista2 = [4,5,6];

const listaResultante = [...lista1,...lista2, 7,8,9];

console.log(listaResultante);

function suma (...numeros){
    numeros = [1, 2, 3, 4, 5, 67, 87, 8, 3, 4, 65, 76, 5, 4];
    const resultado = numeros,reduce(
     (preValue, nextValue) => prevValue + nextValue,
     0
     );
    console.log(resultado);
}

suma(1, 2, 3, 4, 5, 67, 87, 8, 3, 4, 65, 76, 5, 4);