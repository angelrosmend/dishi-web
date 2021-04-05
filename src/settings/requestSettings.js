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


export const sucursalMedioPagoConfig ={ "IdSucursales": [
    1
  ],
  "MobileMonoMarca": false,
  "MobileUser": {
    "Id": 8026,
    "Email": "dbertero@clickaut.com",
    "RolId": 4
  },
  "APP_ConfigurationID": "20034",
  "Fecha": "2021-02-11T13:42:15.206Z",
  "AppVersion": "1.0.0,1.0.0",
  "IdSucursal": 1,
  "IdSucursalCompra": 835,
  "Platform": "Browser"
}


export const urlPostPedido = `${process.env.REACT_APP_BASE_URL}api/Pedidos/PostPedido`
export const  postPedidoConfig = {
  
    "Version": 1,
    "IdTipoEntrega": 1,
    "Items": [
      {
        "IdItem": 68,
        "Tipo": 0,
        "Quantity": 8,
        "Precio": 136,
        "PrecioUnitarioOriginal": 136,
        "PorcentajeIVA": 0,
        "MontoIVA": 0,
        "PrecioConIVA": 1088,
        "ValorParaCajaDelivery": 2310
      }
    ],
    "IdMedioPago": 15,
    "Comentarios": "",
    "PedidoDeliveryInfo": {
      "TipoDireccion": 2,
      "Direccion": "1",
      "PisoPuertaDepto": "1",
      "Entrecalles": "1",
      "Localidad": "1",
      "CP": "1650"
    },
    "TelefonoContacto": "1161168378",
    "SubTotal": 1088,
    "Iva": 0,
    "PercepIva": 0,
    "Total": 1088,
    "Descuento": 0,
    "PorcentajeDescuento": 0,
    "TotalConDescuento": 1088,
    "CostoEnvio": 0,
    "CantidadCajas": 1,
    "ModoCreacionPedidoPostPago": true,
    "DescuentoCuponesList": [],
    "MobileMonoMarca": false,
    "MobileUser": {
      "Id": 8026,
      "Email": "dbertero@clickaut.com",
      "RolId": 4
    },
    "APP_ConfigurationID": "20034",
    "Fecha": "2021-02-11T13:47:05.485Z",
    "AppVersion": "1.0.0,1.0.0",
    "IdSucursal": 1,
    "IdSucursalCompra": 835,
    "Platform": "Browser"
  }

 
export const urlPayClickautPedido = `${process.env.REACT_APP_BASE_URL}api/Pedidos/PayClickautPedido`

export const payClickautPedidoConfig = {
    "Version": 1,
    "IdTipoEntrega": 1,
    "Items": [
      {
        "IdItem": 68,
        "Tipo": 0,
        "Quantity": 8,
        "Precio": 136,
        "PrecioUnitarioOriginal": 136,
        "PorcentajeIVA": 0,
        "MontoIVA": 0,
        "PrecioConIVA": 1088,
        "ValorParaCajaDelivery": 2310
      }
    ],
    "Id": 8669,
    "IdMedioPago": 15,
    "PagoPymeData": {
      "IdUsuario": "37648",
      "amount": 108800,
      "currency": "ARS",
      "customer_email": "test3@mail.com",
      "orderId": "P8669-8669-37648"
    },
    "Comentarios": "",
    "PedidoDeliveryInfo": {
      "TipoDireccion": 2,
      "Direccion": "1",
      "PisoPuertaDepto": "1",
      "Entrecalles": "1",
      "Localidad": "1",
      "CP": "1650"
    },
    "TelefonoContacto": "123123123123",
    "SubTotal": 1088,
    "Iva": 0,
    "PercepIva": 0,
    "Total": 1088,
    "Descuento": 0,
    "PorcentajeDescuento": 0,
    "TotalConDescuento": 1088,
    "CostoEnvio": 0,
    "CantidadCajas": 1,
    "ModoCreacionPedidoPostPago": true,
    "DescuentoCuponesList": [],
    "PagandoQRDistribuidorIdPedido": 8669,
    "MobileMonoMarca": false,
    "MobileUser": {
      "Id": 37648,
      "Email": "test3@mail.com",
      "RolId": 4
    },
    "APP_ConfigurationID": "20034",
    "Fecha": "2021-02-11T14:41:18.750Z",
    "AppVersion": "1.0.0,1.0.0",
    "IdSucursal": 1,
    "IdSucursalCompra": 835,
    "Platform": "Browser"
  }




export const config = {
        "PaginationSettings": [
            {
                "Id": 0,
                "PageFrom": 0,
                "PageCount": 10
            },
            {
                "Id": 1,
                "PageFrom": 0,
                "PageCount": 10
            },
            {
                "Id": 2,
                "PageFrom": 0,
                "PageCount": 10
            },
            {
                "Id": 3,
                "PageFrom": 0,
                "PageCount": 10
            },
            {
                "Id": 4,
                "PageFrom": 0,
                "PageCount": 10
            },
            {
                "Id": 5,
                "PageFrom": 0,
                "PageCount": 10
            },
            {
                "Id": 6,
                "PageFrom": 0,
                "PageCount": 10
            }
        ],
        "MobileUser": {
            "Id": 0,
            "Email": "",
            "RolId": 0
        },
        "orderby": 1,
        "Filter": {
            "Text": ""
        },
        "APP_ConfigurationID": "20033",
        "Accuracy": "2555",
        "Alt": null,
        "AppDebug": false,
        "AppVersion": "1.0.0,1.0.0",
        "Fecha": "2021-01-13T20:50:06.115Z",
        "FilterIdCategoria": null,
        "IdEmpresa": undefined,
        "IdSucursal": 1,
        "IdSucursalCompra": 0,
        "Lat": -34.5009741,
        "Lng": -58.497270699999994,
        "MobileMonoMarca": false,
        "ModeEmpresas": false,
        "Monomarca":  false,
        "Platform": "Browser",
        "UnidadNegocioCaller": 201      
}
export const configHome = JSON.parse(JSON.stringify(config))



export const urlSucursal = `${process.env.REACT_APP_BASE_URL}api/V2SucursalProductos/GetSucursalProducto`

export const urlRecetas =  `${process.env.REACT_APP_BASE_URL}api/V2NoticiasController/GetNoticias`
export const urlRecetaDetalle = `${process.env.REACT_APP_BASE_URL}api/V2NoticiasController/GetNoticias`
export const configRecetas = {
    "PaginationsSettings":  [
        {
            "Id": 0,
            "PageFrom": 0,
            "PageCount": 4
        },
    ],
    "APP_ConfigurationID": "20033",
    "Accuracy": "2555",
    "Alt": null,
    "AppDebug": false,
    "AppVersion": "1.0.0,1.0.0",
    "Fecha": "2021-01-13T21:23:26.798Z",
    "Headers": true,
    "IdEmpresa": undefined,
    "IdSucursal": 1,
    "IdSucursalCompra": 0,
    "Lat": "-34.5009741",
    "Lng": "-58.497270699999994",
    "MobileMonoMarca": false,
    "MobileUser": null,
    "ModeEmpresas": false,
    "PageCount": 10,
    "PageFrom": 0,
    "Platform": "Browser"
}

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