
/*
 Programacion Orientada a Objetos (POO)

 Paradigma = Manera en la que se puede hacer algo especifico.
 Paradigma de programacion : Forma o manera en la que puedo programar algo.


 Otras formas de programar:
 Programacion funcional
 Programacion imperativa
 Programcion declarativa


 Pilares fundamentales de la programacion POO
    - Polimorfismo
    - Herencia
    - Encapsulamiento
    - Abstraccion



- Clases (plantillas para hacer muchos objetos)
- Objetos
    - Atributos (lo que tengo - ojitos pispiretos)
    - Metodos  (lo que puedo hacer con lo que tengo - mirar lo bello de la vida)

*/

//Ejemplo del gatito

//Propiedades = variables o constantes
const color = "Gris";
var tamanio = "Chiquito";
var edad = 5;
var cicatrices = true;
const raza = "Angora";
var caracter = "Agresivo"

//Metodos o funciones
function comer(){}
function treparArboles(){}
function maullar(){}
function grunir(){}
function dormir(){}
function corretearPerros(){}

//Precursor de los objetos Array
var gato1 = ['Cilantro', 'Agresivo', 5, 'Angora', true, 'Chiquito'];
console.log(typeof(gato1));


//Evolucion de los arreglos
var Cilantro = {
    nombre: "Cilantro",
    edad: 5,
    caracter : "Agresivo",
    raza : "Angora",
}

var Perejil= {
    nombre: "Perejil",
    edad: 10,
    caracter : "Feliz",
    raza : "Siames",
}

var Cebollita= {
    nombre: "Cebollita",
    edad: 1,
    caracter : "Timida",
    raza : "Esfinge",
}

var Limon= {
    nombre: "Limon",
    edad: 2,
    caracter : "Agrio",
    raza : "Egipcio",
}


console.log(typeof(Cilantro));
console.log("El nombre de Cilantro es", Cilantro.nombre);
console.log("El caracter de Cilantro es",Cilantro.caracter);


/*   Clases para agilizar este proceso  */

// 1. Defino mi clase con la palabra reservada class
class gato {

    // 2. Defino mis propiedades o atributos como variables

    nombre = "";
    edad = 0;
    raza = "";
    caracter = "";

    // 2. Definir los métodos que serán definidos como funciones
    maullar(){
        console.log("Miauu");
    };
    dormir(){
        console.log("tzzzz");
    }
    ronronear(){
        console.log("Prrrrr");
    };


    // 3. Agregar Constructores

    constructor(nombre,edad,raza,caracter) {

        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.caracter = caracter;
    }
}

// Para empezar a crear o instanciar objetos se utiliza la palabra reservada new

var gardfield = new gato("Gardfiel",9,"Naranja","Agresivo");
var felix = new gato("Felix",4,"Azul","Amistoso");
var kitty = new gato("Kitty",15,"Blanca","Tranquila");
var salem = new gato("Salem", 12, "Negro", "Brujo");
var pelon = new gato("Pelon", 5, "Sphynx", "Tímido");

console.log(gardfield);
console.log("Asi ronronea gardfield: ", gardfield.ronronear());

console.log(pelon);
console.log("La raza de pelon es: ", pelon.raza);


// JSON
console.log("//////// JSON /////////");
/*
JSON (JavaScript Object Notation)

Es un formato estandar (que ya existe, alguien lo definio y tiene ciertas reglas) que esta basado en texto y nos sirve para representar datos estructurados basados en la sintaxis de JS

*/

// Objetos normales de JS

var Cebollita= {
    nombre: "Cebollita",
    edad: 1,
    caracter : "Timida",
    raza : "Esfinge",
}
console.log(Cebollita);

// Objetos de JSON (Serializar un objeto JS)

var CebollitaJSON= {
    "nombre": "Cebollita",
    "edad": 1,
    "caracter" : "Timida",
    "raza" : "Esfinge",
}
console.log(CebollitaJSON)


/* Para poder serializar más rápido se utilizan dos metodos:

1. JSON.parse
2. JSON.stringify

*/

// JS
var Perejil= {
    nombre: "Perejil",
    edad: 10,
    caracter : "Feliz",
    raza : "Siames",
}

// JSON.stringify para hacer todo a string
const perejilSer = JSON.stringify(Perejil);
console.log("Este es Perejil serializado",perejilSer);

// JSON.parse para convertir todo el string a objeto JSON
const perejilDesser = JSON.parse(perejilSer);
console.log("Este es Perejil desserializado", perejilDesser);