### Ejecutar todas

```javascript
const modelViewer = document.querySelector('#modelGlb'); 
// Espera a que el modelo esté completamente cargado 
modelViewer.addEventListener('load', () => { 
const animations = modelViewer.availableAnimations;
if (animations.length > 0) { 
// Itera sobre cada animación y la reproduce 
animations.forEach(animationName => { modelViewer.animationName = animationName; modelViewer.play(); }); } 
else { 
console.log('No hay animaciones disponibles en el modelo.');
}

});
```


### Ejecutar solo algunas

```javascript
  document.addEventListener("DOMContentLoaded", ()=>{
    const modelViewer = document.querySelector('#modelGlb');
    modelViewer.animationName = "CylinderAction";
    modelViewer.play();
  });
```

```javascript

```

```html
    <model-viewer id="modelGlb" 
    src="https://cdn.glitch.global/8b6e14c7-6897-4c17-9de9-41a2e82d2d5f/compressed.glb?v=1723335254742" 
    ar ar-modes="webxr scene-viewer quick-look" 
    camera-controls poster="poster.webp" 
    shadow-intensity="2" id="modelGlb" 
    alt="Modelo 3D casita" width="900px" 
    orbit-sensitivity="1" 
    exposure="0.5" 
    camera-target="0m 2.8m 0m" 
    camera-orbit="225deg 75deg 27m"
    autoplay 
     animation-name="Circle.004Action" 
     alt="A 3D model with animations"
    >
  
        <button  class="Hotspot btnContact" slot="hotspot-1" data-position="4.9m 5.8m 4.5m" data-normal="0m 0m -1m" data-surface="0 0 220 221 222 0.405 0.061 0.534"></button>
        <button  class="Hotspot btnContact" slot="hotspot-2" data-position="3.8m 5.8m 4.5m" data-normal="0m 0m -1m"></button>
        <button id="btnLn" class="Hotspot" slot="hotspot-3" data-position="4.9m 4.7m 4.5m" data-normal="0m 0m -1m"></button>
        <button id="btnInsta" class="Hotspot" slot="hotspot-4" data-position="3.7m 4.7m 4.5m" data-normal="0m 0m -1m"></button>
        <button id="square1" class="Hotspot" slot="hotspot-5" data-position="2m 5.3m 4.3m" data-normal="0m 0m -1m"></button>
        <button id="square2" class="Hotspot" slot="hotspot-6" data-position="-0.3m 5.3m 4.3m" data-normal="0m 0m -1m"></button>
        <button id="square3" class="Hotspot" slot="hotspot-7" data-position="-2.5m 5.3m 4.3m" data-normal="0m 0m -1m"></button>
        <button id="square4" class="Hotspot" slot="hotspot-8" data-position="2m 2.5m 4.4m" data-normal="0m 0m -1m"></button>
        <button id="square5" class="Hotspot" slot="hotspot-9" data-position="-0.3m 2.5m 4.3m" data-normal="0m 0m -1m"></button>
        <button id="square6" class="Hotspot" slot="hotspot-10" data-position="-2.5m 2.5m 4.3m" data-normal="0m 0m -1m"></button>

        <div class="progress-bar hide" slot="progress-bar">
            <div class="update-bar"></div>
        </div>

    </model-viewer>

```



