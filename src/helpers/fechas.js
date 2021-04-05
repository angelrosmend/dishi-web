export const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
export function fechaPromo(desde, hasta){
    return `Válido desde el ${new Date(desde).getDate()} de ${meses[ new Date(desde).getMonth()]} de ${new Date(desde).getFullYear()} hasta el ${new Date(hasta).getDate()} de ${meses[new Date(hasta).getMonth()]} de ${new Date(hasta).getFullYear()}*`
}
export function fechaCompra (fecha){
  return `${new Date(fecha).getDate()} de  ${meses[ new Date(fecha).getMonth()]} a las ${getHora(fecha)}`
}
export function fechaCompraDetalle(fecha){
  return `${new Date(fecha).getDate()}/${new Date(fecha).getMonth() +1}/${new Date(fecha).getFullYear()}`
}
export function fechaRecetas(fecha) {
  return `${new Date(fecha).getDate()}/${new Date(fecha).getMonth() + 1}/ ${new Date(fecha).getFullYear()}`
}

export function fechaNacimiento(fecha) {
  return `${new Date(fecha).getDate()}/${new Date(fecha).getMonth() + 1}/ ${new Date(fecha).getFullYear()}`
}
export function fechaNotificaciones(fecha) {
  return `${new Date(fecha).getDate()}/${new Date(fecha).getMonth() + 1}/ ${new Date(fecha).getFullYear()} - ${getHora(fecha)}`
}

export function getFechaNacimientoObj(fecha){
  return new Object({
    day: new Date(fecha).getDate(),
    month: new Date(fecha).getMonth(),
    year: new Date(fecha).getFullYear()
  })
}

export function getFecha(fecha){
  return new Object({
    day: new Date(fecha).getDate(),
    month: new Date(fecha).getMonth(),
    year: new Date(fecha).getFullYear()
  })
}

export function getHora(fecha){
  return new Date(fecha).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
}

export function getFechaLeida(fecha){
  return `Leída el ${fechaRecetas(fecha)} a las ${getHora(fecha)}`
}