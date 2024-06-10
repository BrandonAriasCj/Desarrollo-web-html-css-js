La comparación de textos y fragmentos de textos en JavaScript es una tarea común en el desarrollo web, ya sea para buscar palabras clave, realizar coincidencias parciales o buscar patrones específicos en cadenas de texto. Aquí te presento una teoría amplia junto con varios ejemplos de cómo puedes comparar textos y fragmentos de textos en JavaScript:

### 1. Comparación de igualdad de cadenas:

Puedes comparar dos cadenas de texto para determinar si son iguales utilizando el operador `===` o el método `localeCompare()` para tener en cuenta las diferencias de mayúsculas y minúsculas.

```javascript
var cadena1 = "Hola mundo";
var cadena2 = "hola mundo";

// Utilizando el operador ===
if (cadena1 === cadena2) {
    console.log("Las cadenas son iguales");
} else {
    console.log("Las cadenas son diferentes");
}

// Utilizando localeCompare()
if (cadena1.localeCompare(cadena2) === 0) {
    console.log("Las cadenas son iguales");
} else {
    console.log("Las cadenas son diferentes");
}
```

### 2. Búsqueda de subcadenas:

Puedes buscar la existencia de una subcadena dentro de una cadena utilizando el método `includes()` o `indexOf()`.

```javascript
var texto = "Esta es una cadena de texto de ejemplo";

// Utilizando includes()
if (texto.includes("cadena")) {
    console.log("La subcadena 'cadena' está presente");
} else {
    console.log("La subcadena 'cadena' no está presente");
}

// Utilizando indexOf()
if (texto.indexOf("cadena") !== -1) {
    console.log("La subcadena 'cadena' está presente");
} else {
    console.log("La subcadena 'cadena' no está presente");
}
```

### 3. Búsqueda de patrones con expresiones regulares:

Puedes utilizar expresiones regulares para buscar patrones específicos dentro de una cadena de texto.

```javascript
var texto = "La lluvia en Sevilla es una maravilla";

// Búsqueda de palabras que comienzan con "m" utilizando una expresión regular
var resultado = texto.match(/\b\w*m\w*\b/g);
console.log("Palabras que comienzan con 'm':", resultado);

// Búsqueda de números utilizando una expresión regular
var textoConNumeros = "El número de teléfono es 123-456-7890";
var numeros = textoConNumeros.match(/\d+/g);
console.log("Números encontrados:", numeros);
```

### 4. Coincidencia de patrones con `startsWith()`, `endsWith()` y `match()`:

Puedes verificar si una cadena comienza o termina con un fragmento específico utilizando `startsWith()` y `endsWith()`, o buscar todas las coincidencias de un patrón utilizando `match()`.

```javascript
var texto = "Este es un ejemplo de texto";

// Verificar si el texto comienza con "Este"
if (texto.startsWith("Este")) {
    console.log("El texto comienza con 'Este'");
}

// Verificar si el texto termina con "texto"
if (texto.endsWith("texto")) {
    console.log("El texto termina con 'texto'");
}

// Buscar todas las coincidencias de palabras de tres letras
var palabrasTresLetras = texto.match(/\b\w{3}\b/g);
console.log("Palabras de tres letras:", palabrasTresLetras);
```

### 5. Comparación de cadenas ignorando mayúsculas y minúsculas:

Puedes comparar cadenas ignorando las diferencias de mayúsculas y minúsculas convirtiéndolas a un caso específico antes de la comparación.

```javascript
var cadena1 = "Hola mundo";
var cadena2 = "hola mundo";

// Convertir cadenas a minúsculas antes de comparar
if (cadena1.toLowerCase() === cadena2.toLowerCase()) {
    console.log("Las cadenas son iguales ignorando mayúsculas y minúsculas");
} else {
    console.log("Las cadenas son diferentes");
}
```

Estos son solo algunos ejemplos de cómo puedes comparar textos y fragmentos de textos en JavaScript. La comparación de textos puede variar dependiendo de tus necesidades específicas, pero estas técnicas te proporcionan un buen punto de partida para realizar comparaciones de cadenas de texto en JavaScript.