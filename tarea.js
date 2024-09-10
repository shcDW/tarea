let nombre = "Juan";
let edad = 25;
let altura = 1.75;
let peso = 70;
let ciudad = "Medellín";
let profesion = "Ingeniero";
let casado = false;
let hijos = 2;
let salario = 35000;
let ahorro = 10000;


const pi = 3.1416;
const gravedad = 9.81;
const Semana = 7;
const meses = 12;
const velocidadLuz = 299792458; 


let imc = peso / (altura * altura); 
let jubilacion = 62 - edad;  
let totalHijos = hijos * 2;  


let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
let puedeJubilarse = (jubilacion <= 0) ? "Ya puedes jubilarte" : `Te faltan ${jubilacion} años para jubilarte`;
let estadoFinanciero = (salario > 30000) ? "Tienes un buen salario" : "Debes buscar un mejor salario";

console.log(`IMC: ${imc}`);
console.log(`Años para jubilación: ${jubilacion}`);
console.log(mensaje);
console.log(puedeJubilarse);
console.log(estadoFinanciero);