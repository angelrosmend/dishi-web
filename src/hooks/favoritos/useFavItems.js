import React, { useEffect, useState } from 'react'


export function useFavItems(){
    const [favItems, setFavItems] = useState([]) 
 
        useEffect(() => {
        const data = localStorage.getItem('items-favoritos')
        if(data){
            setFavtems(JSON.parse(data))
        }
        },[])

        useEffect(() => {
        localStorage.setItem('items-favoritos', JSON.stringify(favItems))
        })
       return [favItems, setFavItems]
}
