// Ejercicio 1
console.log("Hola Mundo!");
console.log("Soy el primer script")

//Ejercicio 2
var mensaje = "Hola Mundo!"
var mensaje1 = "Qué fácil es incluir 'comillas simples'"
var mensaje2 = 'y "comillas dobles"'

console.log(mensaje)
console.log(mensaje1)
console.log(mensaje2)

// Ejercicio 3
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (var i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}

// Ejercicio 4
var valores = [true, 5, false, "hola", "adios", 2];

// Determinar cual de los dos elementos de texto es mayor
var texto1 = valores[3];
var texto2 = valores[4];

if (texto1.length > texto2.length) {
  console.log(texto1 + " es mayor que " + texto2);
} else if (texto2.length > texto1.length) {
  console.log(texto2 + " es mayor que " + texto1);
} else {
  console.log("Los dos elementos de textos son iguales.");
}

// Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
var booleano1 = valores[0];
var booleano2 = valores[2];

var resultadoTrue = booleano1 || booleano2;
var resultadoFalse = booleano1 && booleano2;

console.log("Resultado true: " + resultadoTrue);
console.log("Resultado false: " + resultadoFalse);

// Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
var numero1 = valores[1];
var numero2 = valores[5];

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);

// Ejercicio 5
var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2) {
  console.log("numero1 no es mayor que numero2");
}
if (numero2 > 0) {
  console.log("numero2 es positivo");
}
if (numero1 < 0 || numero1 !== 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if (numero1 + 1 <= numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

// Ejercicio 6
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.
var numeroDNI = parseInt(prompt("Introduzca el número de DNI (sin letra):"));
var letraUsuario = prompt("Introduzca la letra del DNI:").toUpperCase();

// En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
if (numeroDNI < 0 || numeroDNI > 99999999) {
  alert("El número de DNI ingresado no es válido")
}

// Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
else {
  var letra = letras[numeroDNI % 23];
}

// Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
if (letra !== letraUsuario) {
  alert("La letra que ha indicado no es correcta")
}
else {
  alert("El número y la letra de DNI son correctos.")
}

// Ejercicio 7
var numero = parseInt(prompt("Introduzca un número"));
var factorial = 1;
for (var i = 1; i <= numero; i++) {
  factorial *= i;
}
alert("El resultado del factorial de " + numero + " es: " + factorial)

// Ejercicios 8
var numero = parseInt(prompt("Introduzca un número entero"));
function par(numero) {
  if (numero % 2 === 0) {
    return ("par")
  }
  else {
    return ("impar")
  }
}
var resultado = par(numero);
alert("El numero: " + numero + " es " + resultado)

// Ejercicio 9
var numero = prompt("Introduzca una cadena de texto");
function cadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    return "La cadena está formada solo por mayúsculas.";
  } else if (cadena === cadena.toLowerCase()) {
    return "La cadena está formada solo por minúsculas.";
  } else {
    return "La cadena es una mezcla de mayúsculas y minúsculas.";
  }
}

var resultado = cadena(numero);
alert(resultado);

// Ejercicio 10
function esPalindromo(cadena) {
  cadena = cadena.toLowerCase().replace(/\s/g, '');
  var cadenaInvertida = cadena.split('').reverse().join('');
  return cadena === cadenaInvertida;
}

var texto = "La ruta nos aporto otro paso natural";
if (esPalindromo(texto)) {
  console.log("La cadena es un palíndromo.");
} else {
  console.log("La cadena no es un palíndromo.");
}

// Ejercicio 11
// Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
function Persona(nombre, edad, género) {
  this.nombre = nombre;
  this.edad = edad;
  this.género = género;
}

Persona.prototype.obtDetalles = function () {
  console.log("Nombre: " + this.nombre);
  console.log("Edad: " + this.edad);
  console.log("Género: " + this.género);
};

// Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
function Estudiante(nombre, edad, género, curso, grupo) {
  Persona.call(this, nombre, edad, género);
  this.curso = curso;
  this.grupo = grupo;
}

Estudiante.prototype = Object.create(Persona.prototype);

Estudiante.prototype.registrar = function () {
  console.log("Estudiante registrado:");
  this.obtDetalles();
  console.log("Curso: " + this.curso);
  console.log("Grupo: " + this.grupo);
};

// Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
function Profesor(nombre, edad, género, asignatura, nivel) {
  Persona.call(this, nombre, edad, género);
  this.asignatura = asignatura;
  this.nivel = nivel;
}

Profesor.prototype = Object.create(Persona.prototype);

Profesor.prototype.asignar = function () {
  console.log("Profesor asignado:");
  this.obtDetalles();
  console.log("Asignatura: " + this.asignatura);
  console.log("Nivel: " + this.nivel);
};

var estudiante1 = new Estudiante("Estudiante-1", 21, "Femenino", "Lenguaje", "1° básico A");
estudiante1.registrar();

var profesor1 = new Profesor("Profesor-1", 22, "Masculino", "Matemáticas", "I medio A");
profesor1.asignar();

// Ejercicio 12
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

var resultados = new Array(11);
resultados.fill(0);

const numLanzamientos = 36000;

for (var i = 0; i < numLanzamientos; i++) {
  var dado1 = lanzarDado();
  var dado2 = lanzarDado();
  var suma = dado1 + dado2;

  resultados[suma - 2]++;
}

for (var i = 2; i <= 12; i++) {
  console.log("Suma " + i + " aparece " + resultados[i - 2] + " veces.");
}

// Ejercicio 13
// Crear una expresión regular valide una fecha en formato "XX/XX/XXXX", donde "X" es un dígito. Probarlo con la expresión: "Nací el 05/04/1982 en Donostia.".
var fecha = /^\d{2}\/\d{2}\/\d{4}$/;
var texto = "Nací el 05/04/1982 en Donostia.";
console.log(fecha.test(texto));

// Crear una expresión regular que valide una dirección de email. Para simplificar, los valores antes de la @ pueden contener cualquier carácter alfanumérico, y los caracteres . y -, mientras que los valores tra la @ pueden contener caracteres alfanuméricos, y el tipo de dominio puede tener una longitud de 2 o 3 caracteres.
var email = /^[\w.-]+@[A-Za-z\d.-]+\.[A-Za-z]{2,3}$/;
var texto = "ejemplo@ejemplo.com";
console.log(email.test(texto));

// Dada la siguiente función que de reemplazo de caracteres, reescribirla utilizando expresiones regulares.
function escapeHTML(text) {
  var replacements = [["&", "&amp;"], ["\"", "&quot;"], ["<", "&lt;"], [">", "&gt;"]];
  replacements.forEach(function (replace) {
    text = text.replace(new RegExp(replace[0], 'g'), replace[1]);
  });
  return text;
}

// Dados un nombre y un apellido, crear la expresión regulatr necesaria para mostrarlos en orden inverso y separados por una coma. Por ejemplo, la cadena "John Smith", convertirla en "Smith, John".
var nombre = "John Smith";
var nombreInvertido = nombre.replace(/^(\w+)\s(\w+)$/, "$2, $1");
console.log(nombreInvertido);

// Crear una expresión regular que elimine las etiquetas potencialmente peligrosas (<script>...</script>) y todo su contenido de una cadena HTML.
var html = "<div>Contenido <script>alert('Hola');</script> peligroso</div>";
var cleanHtml = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
console.log(cleanHtml);


// Ejercicio 14
window.onload = function () {
  fetch("http://127.0.0.1:5500/proxy.php")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, "text/html");

      doc.addEventListener("load", function () {
        // Número de enlaces de la página
        var enlaces = doc.getElementsByTagName("a");
        console.log("Número de enlaces de la página: " + enlaces.length);

        // Dirección a la que enlaza el penúltimo enlace
        if (enlaces.length >= 2) {
          var penultimoEnlace = enlaces[enlaces.length - 2];
          var direccionPenultimoEnlace = penultimoEnlace.getAttribute("href");
          console.log("Dirección del penúltimo enlace: " + direccionPenultimoEnlace);
        } else {
          console.log("No hay suficientes enlaces para obtener el penúltimo.");
        }

        // Número de enlaces que enlazan a http://prueba
        var enlacesAHttpPrueba = doc.querySelectorAll("a[href='https://www.arkaitzgarro.com/javascript/snippets/cap18/ej14.html']");
        console.log("Número de enlaces que enlazan a https://www.arkaitzgarro.com/javascript/snippets/cap18/ej14.html: " + enlacesAHttpPrueba.length);

        // Número de enlaces del tercer párrafo
        var tercerParrafo = doc.getElementsByTagName("p")[2];
        var enlacesEnTercerParrafo = tercerParrafo.getElementsByTagName("a");
        console.log("Número de enlaces en el tercer párrafo: " + enlacesEnTercerParrafo.length);
      });
    })
    .catch(function (error) {
      console.error("Hubo un error al cargar la página: " + error);
    });
}

// Ejercicio 15
function muestra() {
  var contenidoCompleto = document.querySelector(".adicional");
  contenidoCompleto.style.display = "block";
  var enlace = document.getElementById("enlace");
  enlace.style.display = "none";
}

// Ejercicio 16
function anade() {
  var nuevoElementoTexto = document.getElementById("enlace1").value;
  var nuevoElemento = document.createElement("li");
  var textoNuevoElemento = document.createTextNode(nuevoElementoTexto);
  nuevoElemento.appendChild(textoNuevoElemento);
  var lista = document.getElementById("lista");
  lista.appendChild(nuevoElemento);
}

// Ejercicio 17
function toggleContenido(id, enlaceId) {
  var contenido = document.getElementById(id);
  var enlace = document.querySelector("." + enlaceId);

  if (contenido.style.display === "block" || contenido.style.display === "") {
      contenido.style.display = "none";
      enlace.textContent = "Mostrar contenidos";
  } else {
      contenido.style.display = "block";
      enlace.textContent = "Ocultar contenidos";
  }
}

// Ejercicio 18
// Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición del puntero respecto del navegador y respecto de la página:
// Para mostrar los mensajes, utilizar la función muestraInformacion() deduciendo su funcionamiento a partir de su código fuente.
var cuadroRaton = document.getElementById("raton");
function muestraInformacion(evento, cuadro, colorFondo) {
  var mensaje = "Evento: " + evento.type + "<br>" +
                "Coordenadas del navegador (X, Y): " + evento.clientX + ", " + evento.clientY + "<br>" +
                "Coordenadas de la página (X, Y): " + evento.pageX + ", " + evento.pageY;
  cuadro.innerHTML = mensaje;
  cuadro.style.backgroundColor = colorFondo;
}

window.addEventListener("mousemove", function(evento) {
  muestraInformacion(evento, cuadroRaton, "white");
});

// Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo evento y su información asociada:
var cuadroTeclado = document.getElementById("teclado");
window.addEventListener("keydown", function(evento) {
  muestraInformacion(evento, cuadroTeclado, "#CCE6FF");
});

// Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, el color de fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) y cuando se pulsa una tecla, el color de fondo debe ser azul (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco.
window.addEventListener("mousedown", function(evento) {
  muestraInformacion(evento, cuadroTeclado, "#FFFFCC");
});
cuadroRaton.addEventListener("mouseover", function() {
  cuadroRaton.style.backgroundColor = "white";
});
cuadroTeclado.addEventListener("mouseover", function() {
  cuadroTeclado.style.backgroundColor = "white";
});

// Ejercicio 19
function tamanoVentanaNavegador(){
  // Adaptada de http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
  var dimensiones = [];
  
  if(typeof(window.innerWidth) == 'number') {
      // No es IE
      dimensiones = [window.innerWidth, window.innerHeight];
  } else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
      //IE 6 en modo estandar (no quirks)
      dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
  } else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
      //IE en modo quirks
      dimensiones = [document.body.clientWidth, document.body.clientHeight];
  }
  
  return dimensiones;
}

document.addEventListener("click", function (e) {
  var tamano = tamanoVentanaNavegador();
  var zona = "";

  if (e.clientX < tamano[0] / 2) {
      zona += "izquierda ";
  } else {
      zona += "derecha ";
  }

  if (e.clientY < tamano[1] / 2) {
      zona += "arriba";
  } else {
      zona += "abajo";
  }

  alert("Has hecho clic en la zona: " + zona);
});

// Ejercicio 20
var maxCaracteres = 100;

document.addEventListener("keydown", function (e) {
  var zona = document.getElementById("zona");
  var contenido = zona.textContent;

  if (contenido.length >= maxCaracteres && e.key.length === 1) {
      e.preventDefault();
  }

  if ((e.key === "Backspace" || e.key === "Delete" || e.key === "ArrowLeft" || e.key === "ArrowRight") &&
      contenido.length >= maxCaracteres) {
      e.preventDefault();
  }
});

var zona = document.getElementById("zona");
zona.textContent = "Número de caracteres restantes: " + maxCaracteres;

zona.addEventListener("input", function () {
  var caracteresRestantes = maxCaracteres - zona.textContent.length;
  zona.textContent = "Número de caracteres restantes: " + caracteresRestantes;
});

// Ejercicio 21
document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.getElementById("registro");

  formulario.addEventListener("submit", function (e) {
      if (!validarFormulario()) {
          e.preventDefault();
      }
  });

  var inputs = formulario.querySelectorAll("input, textarea");

  inputs.forEach(function (input) {
      input.addEventListener("blur", function () {
          validarCampo(input);
      });
  });

  function validarFormulario() {
      var valido = true;
      inputs.forEach(function (input) {
          if (!validarCampo(input)) {
              valido = false;
          }
      });
      return valido;
  }

  function validarCampo(input) {
      var valor = input.value.trim();
      var valido = true;

      if (valor === "") {
          alert("El campo " + input.id + " es obligatorio.");
          valido = false;
      } else if (input.type === "email" && !validarEmail(valor)) {
          alert("El campo " + input.id + " debe ser una dirección de email válida.");
          valido = false;
      } else if (input.id === "password" && !validarPassword(valor)) {
          alert("El campo " + input.id + " debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un dígito.");
          valido = false;
      }

      return valido;
  }

  function validarEmail(email) {
      var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
  }

  function validarPassword(password) {
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
      return regex.test(password);
  }
});






