import React,{ useContext,  useState} from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import { CartContext } from '../../../context/CarritoContext';
import SearchAdresse from './SearchAdresse';
import { GOOGLE_API_KEY } from '../../../settings/requestSettings';

function Mapa() {
   const [ libraries] = useState(['places'])
   const {marker, onMapLoad, center}= useContext(CartContext)
   const mapContainerStyle = {
       width: "100%",
       height: "100%"
   };


   const {isLoaded, loadError} = useLoadScript({
       googleMapsApiKey: GOOGLE_API_KEY,
       libraries
    })
    if(loadError) return "Error loading maps"
    if (!isLoaded) return "Loading"
    return (
           <div className="map-container">
            <GoogleMap mapContainerStyle={mapContainerStyle} 
                       zoom={11}
                       center={center}
                       onLoad={onMapLoad}>
                <SearchAdresse/>
                <Marker position={marker}/>
            </GoogleMap>
            </div>
    )
}

export default Mapa
