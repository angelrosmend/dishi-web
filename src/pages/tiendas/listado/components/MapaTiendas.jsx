import React, { useCallback, useRef, useState } from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
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
            mapRef.current.setZoom(14)
          }, [])
    
          const [center, setCenter] = useState(coordenadasCiudad)

        const {isLoaded, loadError} = useLoadScript({
            googleMapsApiKey: GOOGLE_API_KEY,
            libraries
         })
        console.log(isLoaded, loadError)
        setTimeout(()=> {
            zoomDireccion(coordenadasCiudad)
        }, 2000)
    if(loadError) return "Error loading maps"
    if (!isLoaded) return <CustomSpinner/>
    return (
        <div class="row mt-5">
            <div class="col-10 mx-auto mt-5">
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
