//creamos una variable para almacenar el num 1 y abrimos el espacio en memoria correspondiente.
let dameUnNumero;
//le asigamos a la variable la función que pedirá el primer num y la ejecutamos.
dameUnNumero = prompt("dame un número loco");
//creamos una segunda variable para almacenar el num 2 y abrimos el espacio en memoria correspondiente.
let dameOtroNumero;
//le asigamos a la variable 2 la función que pedirá el segundo num y la ejecutamos.
dameOtroNumero = prompt("Dame otro número");
//creamos la función que va a convertír de string a decimal los 2 números y a la vez hará la suma 
//de los mismos para luego traernos a pantalla el resultado final.
function convertirDecimal(){
let paso1 = parseInt(dameOtroNumero);//creamos una variable local dentro de la función para poder
//guardar el valor ingresado en la variable "dameUnNumero" y ya de ahí
let paso2 = parseInt(dameUnNumero);//(Simil al anterior)
let resultado = paso1 + paso2;// sumar las dos datos ya convertidos a decimal.
return resultado;// con return traemos a pantalla el resultado final.
}
convertirDecimal();//llamamos y por tanto ejecutamos la función creada.

/*
Script creado por David Sciretta ---> https://github.com/nob322/
*/