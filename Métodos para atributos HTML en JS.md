En JavaScript, hay varias formas de manejar atributos HTML en elementos DOM. Aquí te muestro los principales métodos y propiedades que puedes utilizar para trabajar con atributos HTML:

1. **setAttribute(nombre, valor):** Este método se utiliza para establecer un atributo en un elemento. Si el atributo ya existe, lo reemplaza; de lo contrario, lo crea.

```javascript
elemento.setAttribute('atributo', 'valor');
```

2. **getAttribute(nombre):** Este método se utiliza para obtener el valor de un atributo específico de un elemento.

```javascript
var valor = elemento.getAttribute('atributo');
```

3. **removeAttribute(nombre):** Este método se utiliza para eliminar un atributo específico de un elemento.

```javascript
elemento.removeAttribute('atributo');
```

4. **hasAttribute(nombre):** Este método se utiliza para verificar si un elemento tiene un atributo específico.

```javascript
var tieneAtributo = elemento.hasAttribute('atributo');
```

5. **propiedad directa:** Algunos atributos HTML tienen una propiedad directa en el objeto del elemento. Por ejemplo, el atributo `id` se puede acceder directamente a través de la propiedad `id`.

```javascript
var id = elemento.id;
```

6. **dataset:** La propiedad `dataset` proporciona acceso a todos los atributos de datos (`data-*`) de un elemento como un objeto con propiedades.

```javascript
var valor = elemento.dataset.nombre;
```

Estos son los métodos principales para manejar atributos HTML en JavaScript. Puedes usarlos según tus necesidades específicas al manipular elementos DOM en tu aplicación web.