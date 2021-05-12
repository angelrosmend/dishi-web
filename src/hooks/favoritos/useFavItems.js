import React, { useContext, useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import { ContextUser } from '../../context/UserContext'

toast.configure()

const notifyAdd = (product) => toast.info(`Agregaste ${product.nombre} a tus favoritos`, {autoClose: '2000', position: toast.POSITION.BOTTOM_LEFT} )
const notifyRemove = (product) => toast.info(`Removiste ${product.nombre} de tus favoritos`, {autoClose: '2000', position: toast.POSITION.BOTTOM_LEFT} )

export function useFavItems(){
       
        const [favItems, setFavItems] = useState([]) 
       
        useEffect(() => {
        const data = localStorage.getItem('items-favoritos')
        if(data){
            setFavItems(JSON.parse(data))
        }
        },[])

        useEffect(() => {
        localStorage.setItem('items-favoritos', JSON.stringify(favItems))
        })

        const addToFav = (product) => {setFavItems([...favItems, {...product}]); notifyAdd(product)};

        const removeFromFav = (product) => {setFavItems(current => current.filter(item => item.id !== product.id)); notifyRemove(product)}
       return [favItems, setFavItems, addToFav, removeFromFav]
}


