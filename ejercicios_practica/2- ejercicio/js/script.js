"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

Tome los datos sueltos de cada tipo de descripción de pokemon y agrupe
esos datos en objetos

Las "keys" o "claves" de cada objeto se deberán llamar:
 - titulo
 - descripcion
 - icono
 - estiloClase

*/

function pokemon(titulo, descripcion, icono, estilo){
    const nuevotipo = {
        "titulo": titulo,
        "descripcion": descripcion,
        "icono": icono,
        "estilo": estilo
    };
    return nuevotipo
}

// Tipo agua
const titulo_agua = "Tipo Agua"
const descripcion_agua = "Los Pokémon tipo agua se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición."
const icono_agua = "./images/water_type.png";
const estiloClase_agua = "agua"

// Alumno: Genere un objeto llamado "tipoAgua" con todos los datos del pokemon tipo agua
const tipoAgua = {
    tipo: titulo_agua, 
    descripcion: descripcion_agua, 
    icono: icono_agua, 
    estilo: estiloClase_agua
};
console.log(tipoAgua);



//QUERIA PROBAR LOS DOS METODOS PARA CREAR OBJETOS 😁👌



// Tipo planta
const titulo_planta = "Tipo Planta"
const descripcion_planta = "Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate"
const icono_planta = "./images/grass_type.png";
const estiloClase_planta = "planta"

// Alumno: Genere un objeto llamado "tipoPlanta" con todos los datos del pokemon tipo planta
const tipoPlanta = pokemon(titulo_planta, descripcion_planta, icono_planta, estiloClase_planta);
console.log(tipoPlanta);


// Tipo Electricidad
const titulo_electrico = "Tipo Electricidad"
const descripcion_electrico = "Los Pokémon de tipo eléctrico tienen hábitats variados, desde bosques y praderas, hasta ciudades y centrales eléctricas. Los Pokémon de tipo dragón, eléctrico y planta son resistentes al tipo eléctrico, y aún más los de tipo tierra, quienes son inmunes a los ataques eléctricos. Por consiguiente, los Pokémon eléctricos deben de ser muy precavidos con los ataques de tipo tierra, el cual representa su única debilidad."
const icono_electrico = "./images/electric_type.png";
const estiloClase_electrico = "electricidad"

// Alumno: Genere un objeto llamado "tipoElectricidad" con todos los datos del pokemon tipo electricidad
const tipoElectricidad = pokemon(titulo_electrico, descripcion_electrico, icono_electrico, estiloClase_electrico);
console.log(tipoElectricidad);


// Tipo normal
const titulo_normal = "Tipo Normal"
const descripcion_normal = "Los Pokémon de tipo normal abarcan la mayor cantidad y variedad de movimientos que el resto de tipos. Gran parte de estos son movimientos que no realizan daño o no lo hacen directamente, sino que afectan a las características o estados del Pokémon. Los tipos normal son los más diversos entre los Pokémon, con características variadas, desarrollos y requisitos para las evoluciones diferentes de cada uno, al igual que diferir en las zonas donde se pueden capturar, desde bosques, cuevas, montañas, ciudades, etc."
const icono_normal = "./images/normal_type.png";
const estiloClase_normal = "normal"

// Alumno: Genere un objeto llamado "tipoNormal" con todos los datos del pokemon tipo normal
const tipoNormal = pokemon(titulo_normal, descripcion_normal, icono_normal, estiloClase_normal);
console.log(tipoNormal);

// Tipo fuego
const titulo_fuego = "Tipo Fuego"
const descripcion_fuego = "Los Pokémon de tipo tipo fuego basan sus ataques, principalmente, en el control de este elemento; y la mayoría pueden quemar al Pokémon oponente, mientras que ellos no sufren quemaduras. Son apasionados y, algunos, de mal carácter (como el Charizard de Ash); viven en cuevas o zonas rocosas y muy áridas; y, más probable, aun cerca de volcanes activos. Sin embargo, los únicos Pokémon que aparentemente suelen andar por lugares verdes como las praderas, son Ponyta y Rapidash, pudiendo ser que estos lugares les permiten galopar sin obstáculos. También, algunos son más dóciles, como Growlithe, Vulpix y sus respectivas evoluciones."
const icono_fuego = "./images/fire_type.png";
const estiloClase_fuego = "fuego"


// Alumno: Genere un objeto llamado "tipoFuego" con todos los datos del pokemon tipo fuego
const tipoFuego = pokemon(titulo_fuego, descripcion_fuego, icono_fuego, estiloClase_fuego);
console.log(tipoFuego);

