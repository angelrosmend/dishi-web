import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import './Banners.css'
import { useHistory } from 'react-router';


function Banners({banners}) {
   const history = useHistory()
   const handleBannerRutas  = (Tipo, IdElemento, IdNoticia, Link) => {
       switch (Tipo) {
           case 1:
               return window.open(Link, '_blank')
           case 2:
               return history.push(`/detalle/${IdElemento}`)
           case 3:
              return history.push(`/promociones/${IdElemento}`)
           case 4:
               return null
           case 5:
               return history.push(`/categorias/${IdElemento}`)
           case 6:
                return history.push(`/recetas/${IdNoticia}`)
           case 7:
                return history.push(`/destacados/`)
           case 8:
                return history.push(`/promociones/`)
           case 9:
                return history.push(`/promociones/`)
           case 10:
              return history.push(`/recetas/`)
            
           default:
               break;
       }
   }
   return (
    <Carousel className="banners-wrapper">
        {banners && banners.map(banner => {
            const {Id, Image, IdElemento, Tipo, IdNoticia, Link} = banner;
            return (
            
            <Carousel.Item key={Id}>
                <img
                    onClick={() => handleBannerRutas(Tipo, IdElemento, IdNoticia,Link)} 
                    className="d-block w-100 banner"
                    src={Image}
                    alt="slide"
                />
            </Carousel.Item>
            )
        })}
    </Carousel>
   )
}

export default Banners
