function calDescuentoPrecio (precio, descuento){
    const discount = (precio * descuento) /100;
    const precioConDescuento = precio - descuento;
    
    return precioConDescuento
}

const originalPrecio= 100
const descuentoProducto = 20
const precioFinal = calDescuentoPrecio(originalPrecio,descuentoProducto)

console.log('Precio Original :' +' '+ originalPrecio);
console.log('Descuento :'+ ' '+ descuentoProducto + '%');
console.log('El Precio Final es : ' + ' ' + precioFinal);