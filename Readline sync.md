Para utilizar las bibliotecas `readline-sync` o `prompt-sync` en Node.js, primero debes instalarlas a través de npm (Node Package Manager). Puedes hacerlo ejecutando el siguiente comando en tu terminal:

```bash
npm install readline-sync
```

O bien, para `prompt-sync`:

```bash
npm install prompt-sync
```

Una vez instalada la biblioteca, puedes utilizarla en tu código de Node.js de la siguiente manera:

Para `readline-sync`:

```javascript
const readlineSync = require('readline-sync');

// Solicitar al usuario que ingrese un valor
const userInput = readlineSync.question('Por favor, ingresa un valor: ');

// Mostrar el valor ingresado por el usuario
console.log('Valor ingresado:', userInput);
```

Para `prompt-sync`:

```javascript
const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese un valor
const userInput = prompt('Por favor, ingresa un valor: ');

// Mostrar el valor ingresado por el usuario
console.log('Valor ingresado:', userInput);
```

Estos códigos solicitarán al usuario que ingrese un valor desde la consola y luego mostrarán el valor ingresado. La ejecución de estos programas se detendrá hasta que el usuario ingrese la entrada, lo que simula el comportamiento similar al de `Scanner` en Java.

## SIN NPM
Si deseas utilizar `readline-sync` o `prompt-sync` sin instalarlas a través de npm, puedes descargar los archivos correspondientes y agregarlos manualmente a tu proyecto. Aquí te muestro cómo puedes hacerlo:

1. **readline-sync**:
   - Ve al repositorio de `readline-sync` en GitHub: [readline-sync](https://github.com/anseki/readline-sync).
   - Descarga el archivo `readline-sync.js`.
   - Coloca el archivo `readline-sync.js` en tu directorio de proyecto.
   - En tu archivo JavaScript, puedes importar y utilizar `readline-sync` de la siguiente manera:

```javascript
const readlineSync = require('./readline-sync');

// Solicitar al usuario que ingrese un valor
const userInput = readlineSync.question('Por favor, ingresa un valor: ');

// Mostrar el valor ingresado por el usuario
console.log('Valor ingresado:', userInput);
```

2. **prompt-sync**:
   - Ve al repositorio de `prompt-sync` en GitHub: [prompt-sync](https://github.com/heapwolf/prompt-sync).
   - Descarga el archivo `index.js`.
   - Coloca el archivo `index.js` en tu directorio de proyecto.
   - En tu archivo JavaScript, puedes importar y utilizar `prompt-sync` de la siguiente manera:

```javascript
const prompt = require('./index');

// Solicitar al usuario que ingrese un valor
const userInput = prompt('Por favor, ingresa un valor: ');

// Mostrar el valor ingresado por el usuario
console.log('Valor ingresado:', userInput);
```

Con estos pasos, puedes utilizar `readline-sync` o `prompt-sync` en tu proyecto de Node.js sin necesidad de utilizar npm.