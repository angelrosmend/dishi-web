export const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });
 

export function calcularTotalProducto(price, qty){
    let ammount = price * qty
    return parseFloat(formatter.format(ammount).replace(/,/, ''))
}