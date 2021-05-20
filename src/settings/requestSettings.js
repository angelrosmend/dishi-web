export const urlHome = `${process.env.REACT_APP_BASE_URL}api/V2Home/getData`
export const urlCupon = `${process.env.REACT_APP_BASE_URL}api/V2Descuentos/GetCuponDescuento`
export const urlEnvio = `${process.env.REACT_APP_BASE_URL}api/V2PedidosController/getCostoEnvio`
export const urlCodigoPostal = `${process.env.REACT_APP_BASE_URL}api/V2PedidosController/CheckCodigoPostal`
export const urlFormToken = `${process.env.REACT_APP_BASE_URL}api/V2SucursalMediosDePagoMobile/getPagoPymeFormToken`
export const urlLogin = `${process.env.REACT_APP_BASE_URL}api/Login/Login`
export const urlBusqueda = `${process.env.REACT_APP_BASE_URL}api/V2Home/filter`
export const urlSucursalMedioPago = `${process.env.REACT_APP_BASE_URL}api/V2SucursalMediosDePagoMobile/GetSucursalMediosDePagoMobile`
export const urlCompraPedido = `${process.env.REACT_APP_BASE_URL}api/V2PedidosController/GetPedidoInfo`
export const urlMisCompras = `${process.env.REACT_APP_BASE_URL}api/V2PedidosController/GetPedidosRecientes`
export const urlActualizarDatosUsuarioRegister = `${process.env.REACT_APP_BASE_URL}api/Registro/RegisterUpdate`
export const urlActualizarDatosUsuarioUpdate = `${process.env.REACT_APP_BASE_URL}api/Registro/UpdateUsuario`
export const urlNotificaciones = `${process.env.REACT_APP_BASE_URL}api/V2UsuarioNotificacionesController/getNotificaciones`
export const urlNotificacionesSinLeer = `${process.env.REACT_APP_BASE_URL}api/V2UsuarioNotificacionesController/getNotificacionesSinLeerCount`
export const urlChangePWD = `${process.env.REACT_APP_BASE_URL}api/Registro/OlvidoContrasena`


export const urlPostPedido = `${process.env.REACT_APP_BASE_URL}api/Pedidos/PostPedido`

 
export const urlPayClickautPedido = `${process.env.REACT_APP_BASE_URL}api/Pedidos/PayClickautPedido`




export const urlSucursal = `${process.env.REACT_APP_BASE_URL}api/V2SucursalProductos/GetSucursalProducto`

export const urlRecetas =  `${process.env.REACT_APP_BASE_URL}api/V2NoticiasController/GetNoticias`
export const urlRecetaDetalle = `${process.env.REACT_APP_BASE_URL}api/V2NoticiasController/GetNoticias`

/* export const urlDetalle = 'http://bimboatucasa.clickaut.com/clickautwebapi/api/V2SucursalProductos/GetSucursalProducto' */


export const configDetalle = {
        "Id": 1182,
        "PaginationSettings": [],
        "IdSucursal": 1,
        "IdSucursalCompra": 0,
        "SucursalCompra": null,
        "ModeEmpresas": false,
        "MobileMonoMarca": false 
}
 


export const urlRegistro = `${process.env.REACT_APP_BASE_URL}api/Registro/Register`

export const urlCategorias = `${process.env.REACT_APP_BASE_URL}api/V2CategoriasController/getCategorias`

export const urlProductos = `${process.env.REACT_APP_BASE_URL}api/V2SucursalProductos/GetSucursalProductos`

export const urlPromociones = `${process.env.REACT_APP_BASE_URL}api/Promociones/GetPromociones`

export const urlUpdateCarrito = `${process.env.REACT_APP_BASE_URL}api/V2SucursalProductos/GetItemsInfo`