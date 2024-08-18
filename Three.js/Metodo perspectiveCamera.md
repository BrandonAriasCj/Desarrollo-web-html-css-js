La clase `PerspectiveCamera` en tres.js es una cámara que simula una perspectiva de ojo humano. Se utiliza comúnmente en escenas 3D para proyectar la escena en una vista 2D en una pantalla. La firma del constructor de `PerspectiveCamera` se ve así:

```javascript
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
```

### Parámetros

1. **`fov` (Field of View - Campo de Visión)**: 
   - Tipo: `Number`
   - Descripción: Es el ángulo, en grados, del campo de visión vertical de la cámara. Este valor determina cuánto del espacio visible es capturado por la cámara. Un ángulo mayor hará que la cámara capture una vista más amplia, pero con más distorsión.
   - Ejemplo: `75`

2. **`aspect` (Aspect Ratio - Relación de Aspecto)**: 
   - Tipo: `Number`
   - Descripción: Es la relación entre el ancho y el alto de la vista de la cámara. Generalmente, se calcula como el ancho del área de visualización dividido por la altura. Este parámetro es importante para evitar distorsiones en la imagen.
   - Ejemplo: `window.innerWidth / window.innerHeight`

3. **`near` (Near Clipping Plane - Plano de Recorte Cercano)**:
   - Tipo: `Number`
   - Descripción: Es la distancia mínima desde la cámara en la que los objetos empiezan a ser visibles. Los objetos más cercanos que esta distancia no serán renderizados. Es importante que este valor no sea demasiado pequeño, para evitar problemas de precisión en la representación gráfica.
   - Ejemplo: `0.1`

4. **`far` (Far Clipping Plane - Plano de Recorte Lejano)**:
   - Tipo: `Number`
   - Descripción: Es la distancia máxima desde la cámara en la que los objetos siguen siendo visibles. Los objetos que están más allá de esta distancia no serán renderizados. Un valor muy grande puede causar problemas de precisión en el renderizado.
   - Ejemplo: `1000`

### Ejemplo de Uso

```javascript
// Crear una cámara con un campo de visión de 75 grados, relación de aspecto basada en el tamaño de la ventana,
// un plano de recorte cercano a 0.1 y un plano de recorte lejano a 1000 unidades.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Posicionar la cámara en la escena
camera.position.set(0, 0, 5);
```

### Resumen
- **`fov`**: Ángulo de visión vertical.
- **`aspect`**: Relación de aspecto de la vista.
- **`near`**: Distancia mínima para renderizado.
- **`far`**: Distancia máxima para renderizado.

Esta cámara es ideal para crear efectos realistas y se usa comúnmente en aplicaciones 3D que requieren perspectiva, como videojuegos y simulaciones.