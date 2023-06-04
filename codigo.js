class Calculadora{
    constructor(){

    }
sumar(num1,num2){
   return parseInt(num1) + parseInt(num2);
}
restar(num1,num2){
   return parseInt(num1) - parseInt(num2);
}
dividir(num1,num2){
   return parseInt(num1) / parseInt(num2);
}
multiplicar(num1,num2){
   return parseInt(num1) * parseInt(num2);
}

}

const calculadora = new Calculadora()

alert("¿que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: restar 3: dividir 4: multiplicar");

if (operacion == 1){
   let numero1 = prompt("primer numero para sumar");
   let numero2 = prompt("segundo numero para sumar");
   resultado = calculadora.sumar(numero1,numero2);
   alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
   let numero1 = prompt("primer numero para restar");
   let numero2 = prompt("segundo numero para restar");
   resultado = calculadora.restar(numero1,numero2);
   alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
   let numero1 = prompt("primer numero para dividir");
   let numero2 = prompt("segundo numero para dividir");
   resultado = calculadora.dividir(numero1,numero2)
   alert(`tu resultado ${resultado}`);
}
else if (operacion == 4) {
   let numero1 = prompt("primer numero para multiplicar");
   let numero2 = prompt("segundo numero para multiplicar");
   resultado = calculadora.multiplicar(numero1,numero2)
   alert(`tu resultado ${resultado}`);
}
else {
   alert("no se ha encontrado la operacion")
}