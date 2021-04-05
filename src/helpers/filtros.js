export const ordenamiento =  (res, orderBy) => {

    const result = res && res;
    let Productos 

    switch (orderBy) {
        case 'PREDETERMINADO':
             Productos = result
            break;
        case 'MAYOR': 
            Productos = result.sort((menor, mayor) => mayor.Precio - menor.Precio);
            break;
        case 'MENOR':
            Productos = result.sort((menor, mayor) => menor.Precio - mayor.Precio)
            break;
        case 'ALFABETO':
            Productos =  result.sort((a, b) => a.NombreProducto.localeCompare(b.NombreProducto))
            break; 
        default:
            Productos =  result
            break;
    }

    return Productos
}