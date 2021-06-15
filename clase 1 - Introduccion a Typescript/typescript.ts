interface ProductoModel {
    nombre: string;
    precio: number;
    descripcion: string
}

function getIvaProduct(products: ProductoModel[]): [number, number] {
    let total:number = 0;

    products.forEach( ({ precio }) => total += precio );

    return [total, total * 0.15 ];
}
