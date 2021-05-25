import React, { useCallback, useEffect, useRef, useState } from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import CustomSpinner from '../../../../components/spinner/Spinner'
import { GOOGLE_API_KEY } from '../../../../settings/requestSettings'
import { coodinatesToNumber } from '../../../../helpers/latlngToNumber'
import { useLocateTiendaOnMap } from '../../../../hooks/tiendas/useLocateTiendaOnMap'


function MapaTienda({id, latitud, longitud}) {

      const [onMapLoad, center, marker, libraries] = useLocateTiendaOnMap(latitud, longitud, id)

      const mapContainerStyle = {
        width: "100%",
        height: "100%"
        };
  
 
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: GOOGLE_API_KEY,
        libraries
     })
      
    if(loadError) return "Error loading maps"
    if (!isLoaded) return <CustomSpinner/>
    return (
    <div className="row">
        <div className="col-10 mx-auto">
            <div className="tienda-mapa">
            <GoogleMap mapContainerStyle={mapContainerStyle} 
                       zoom={11}
                       center={center}
                       onLoad={onMapLoad}>
                <Marker position={marker}/>
            </GoogleMap>
            </div>
        </div>
    </div>
    )
}

export default MapaTienda
