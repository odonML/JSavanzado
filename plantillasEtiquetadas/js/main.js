let nombre = "odon";
let edad = 25;
function myTag (arrayStrings, exp1, exp2){
    let str1 =arrayStrings[0];
    let str2 = arrayStrings[1];
    let srt3 = arrayStrings[2];
    let old;
    if(exp2 >= 18) old = 'mayor';
    else old = 'menor';

    return `${str1}${nombre}${str2}${old}${srt3}`;
}

let salida = myTag`hola ${nombre} es ${edad} de edad`;
console.log(salida);