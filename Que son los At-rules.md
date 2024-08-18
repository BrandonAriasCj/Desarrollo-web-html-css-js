Los At-rules en CSS son reglas especiales que comienzan con el símbolo `@` y proporcionan información adicional sobre cómo se deben aplicar las reglas CSS en una página web. Estas reglas pueden controlar la importación de otros estilos, especificar condiciones para aplicar estilos específicos, definir variables, y más.

### Tipos de At-rules en CSS

1. **@import**
   - **Uso**: Importa una hoja de estilo externa.
   - **Ejemplo**:
     ```css
     @import url('estilos.css');
     ```

2. **@media**
   - **Uso**: Aplica estilos específicos dependiendo de ciertas condiciones, como el tamaño de la pantalla o el tipo de dispositivo.
   - **Ejemplo**:
     ```css
     @media screen and (max-width: 600px) {
       body {
         background-color: lightblue;
       }
     }
     ```

3. **@font-face**
   - **Uso**: Define fuentes personalizadas que se pueden usar en el documento.
   - **Ejemplo**:
     ```css
     @font-face {
       font-family: 'MiFuente';
       src: url('mifuente.woff2') format('woff2');
     }
     ```

4. **@keyframes**
   - **Uso**: Define animaciones CSS.
   - **Ejemplo**:
     ```css
     @keyframes ejemplo {
       from { background-color: red; }
       to { background-color: yellow; }
     }
     ```

5. **@supports**
   - **Uso**: Aplica estilos solo si el navegador soporta una propiedad o valor CSS específico.
   - **Ejemplo**:
     ```css
     @supports (display: grid) {
       div {
         display: grid;
       }
     }
     ```

6. **@page**
   - **Uso**: Especifica el estilo de las páginas cuando se imprime un documento.
   - **Ejemplo**:
     ```css
     @page {
       margin: 1cm;
     }
     ```

7. **@namespace**
   - **Uso**: Declara un espacio de nombres XML.
   - **Ejemplo**:
     ```css
     @namespace url(http://www.w3.org/1999/xhtml);
     ```

8. **@charset**
   - **Uso**: Declara el conjunto de caracteres de la hoja de estilo.
   - **Ejemplo**:
     ```css
     @charset "UTF-8";
     ```

### Ejemplos adicionales

1. **@media**
   ```css
   @media (max-width: 600px) {
     body {
       background-color: lightblue;
     }
   }
   ```

2. **@font-face**
   ```css
   @font-face {
     font-family: 'OpenSans';
     src: url('OpenSans-Regular.ttf') format('truetype');
   }
   ```

3. **@keyframes**
   ```css
   @keyframes slidein {
     from {
       transform: translateX(0%);
     }
     to {
       transform: translateX(100%);
     }
   }

   div {
     animation: slidein 3s infinite;
   }
   ```

4. **@supports**
   ```css
   @supports (display: flex) {
     div {
       display: flex;
     }
   }
   ```

5. **@page**
   ```css
   @page {
     margin: 2cm;
   }
   ```

### Resumen

Las At-rules son poderosas herramientas en CSS que permiten controlar y modularizar los estilos de una página web de manera más efectiva. Cada At-rule tiene su propio propósito y conjunto de reglas específicas, proporcionando flexibilidad y control sobre cómo se aplican los estilos.