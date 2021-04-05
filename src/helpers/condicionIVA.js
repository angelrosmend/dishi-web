export const getCondicionIVA =  (id) => {

    switch (id) {
        case 1:
           return 'Responsable inscrito'
        case 2:
          return  'Responsable No inscrito'
        case 3:
           return 'Exento'
        case 4:
            return 'Consumidor Final'
        case 5:
           return 'Sujeto No categorizado'
        case 6:
            return 'Monotributista'
        case 7:
            return 'Otra'
        case 8:
             return 'Factura M'
        case 9:
             return 'Cliente del exterior'
        default:
             return 'Otro'
    }
}