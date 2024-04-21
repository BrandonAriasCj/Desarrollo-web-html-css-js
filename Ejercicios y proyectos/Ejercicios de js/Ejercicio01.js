var precio = parseInt(prompt("Ingrese el precio del producto"));
var iva = parseInt(prompt("Ingrese el iva del producto"));
var total = precio + (iva * precio / 100);
console.log(`El total a pagar es ${total}`);