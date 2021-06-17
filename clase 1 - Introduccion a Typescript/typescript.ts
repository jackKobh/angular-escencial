interface ProductoModel {
    nombre: string;
    precio: number;
    descripcion: string
}

function getIvaProduct(products: ProductoModel[]): [number, number] {
    let total = 0;

    products.forEach(producto => total += producto.precio);

    return [total, total * 0.15 ];
}
