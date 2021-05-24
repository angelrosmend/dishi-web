import React, { useCallback, useRef, useState } from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import { useLocateTiendaOnMap } from '../../../../hooks/tiendas/useLocateTiendaOnMap';
import { GOOGLE_API_KEY } from '../../../../settings/requestSettings';
import CustomSpinner from '../../../../components/spinner/Spinner';
import { coordenadasCiudad } from '../../../../helpers/coordenadasCiudad';

function MapaTiendas({direcciones}) {
    const mapContainerStyle = {
        width: "100%",
        height: "100%"
        };
        const [ libraries] = useState(['places'])

        const mapRef = useRef(null)
    
        const onMapLoad = useCallback((map) => {
                 mapRef.current = map;
         },[])
    
        const zoomDireccion = useCallback(({lat, lng}) => {
            mapRef.current.panTo({lat, lng});
            mapRef.current.setZoom(14.5)
          }, [])
    
          const [center, setCenter] = useState(coordenadasCiudad)

        const {isLoaded, loadError} = useLoadScript({
            googleMapsApiKey: GOOGLE_API_KEY,
            libraries
         })
        setTimeout(()=> {
            zoomDireccion(coordenadasCiudad)
        }, 1000)
    if(loadError) return "Error loading maps"
    if (!isLoaded) return <CustomSpinner/>
    return (
        <div class="row">
            <div class="col-10 mx-auto">
                <div class="tienda-mapa-grande">
                <GoogleMap mapContainerStyle={mapContainerStyle} 
                       zoom={12}
                       center={center}
                       onLoad={onMapLoad}>
                  {direcciones && direcciones.map(item => <Marker key={`${item.lat}${item.lng}`} position={item}/>)}
               </GoogleMap>
                </div>
            </div>
        </div>
    )
}

export default MapaTiendas
