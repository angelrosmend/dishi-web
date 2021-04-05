import React, { useContext } from 'react'
import usePlacesAutoComplete, {
    getGeocode,
    getLatLng,
    getZipCode
} from "use-places-autocomplete"
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxOption,
  } from "@reach/combobox";
  import "@reach/combobox/styles.css";
import { CartContext } from '../../../context/CarritoContext';
  

function SearchAdresse() {

    const {zoomDireccion, setMarker, setZipcode, setDireccionEnvio, setCenter, setLocalidad, setCountry, setDireccionCorta} = useContext(CartContext)

    const {value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutoComplete({
      requestOptions: {
       location: {lat: ()=> -34.603683,lng:()=> -58.381557},
       radius: 200 * 1000,}
    })

    function convertZipCode (cp) {
        return  cp.replace(/\D/g,'') 
    }

    return (
        <div className="col-5  form-control mx-auto mt-2 search-auto-complete">
        <Combobox onSelect={async (address)=> {
            setValue(address, false)
            setDireccionEnvio(address)
            clearSuggestions()
            try{
                const results  = await getGeocode({address})
                const {lat, lng} = await getLatLng(results[0])
                const zipCode = await getZipCode(results[0])
                setLocalidad( results[0].address_components[2].long_name)
                setDireccionCorta(`${results[0].address_components[1].long_name} ${results[0].address_components[0].long_name}`)
                setCountry(`${results[0].address_components[4].long_name}, ${results[0].address_components[5].long_name}`)
                setZipcode(convertZipCode(zipCode))
                setMarker({lat, lng})
                zoomDireccion({lat, lng})
                setCenter({lat, lng})
            }catch(error){
                console.log(error)
            } 
        }}>
            <ComboboxInput value={value}
                           onChange={(e) => {e.preventDefault(); setValue(e.target.value); setDireccionEnvio(e.target.value)}}
                           placeholder="Ingresá nombre y número de calle"
                           required>
            </ComboboxInput>
            <ComboboxPopover>
                {status === "OK" && data.map(({id, description})=>(
                    <ComboboxOption key={id} value={description}/>
                ))}
            </ComboboxPopover>
        </Combobox>
        </div>
    )
}

export default SearchAdresse
