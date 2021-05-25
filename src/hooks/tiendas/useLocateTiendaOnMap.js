import React, { useCallback, useEffect, useRef, useState } from 'react'
import { coordenadasCiudad } from '../../helpers/coordenadasCiudad';
import { coordinatesToNumber } from '../../helpers/latlngToNumber';

export function useLocateTiendaOnMap(latitud, longitud, id){
    const [ libraries] = useState(['places'])

    const mapRef = useRef(null)

    const onMapLoad = useCallback((map) => {
             mapRef.current = map;
     },[])

    const zoomDireccion = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(15)
      }, [])

      const[marker, setMarker] = useState(null)

      const [center, setCenter] = useState(coordenadasCiudad)

    useEffect(()=> {
          setCenter(coordinatesToNumber(latitud, longitud))
          setMarker(coordinatesToNumber(latitud, longitud))
          setTimeout(() => {
            zoomDireccion(coordinatesToNumber(latitud, longitud))
          },1000)
      },[latitud, longitud, id])
 return[onMapLoad, center, marker, libraries]
}