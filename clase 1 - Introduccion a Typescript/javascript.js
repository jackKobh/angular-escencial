function calculaIvaProducto( productos ) {
    let total = 0;

    productos.forEach( ({ precio }) => total += precio );

    return [total, total * 0.15];   
}