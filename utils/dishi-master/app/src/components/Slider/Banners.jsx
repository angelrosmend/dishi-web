import React, { useContext, useState } from 'react'
import { ContextData } from '../../context/DataContext'
import Carousel from "react-bootstrap/Carousel";
import './Banners.css'


function Banners() {
   const { data } = useContext(ContextData)
   const { banners } = data;

   return (
    <Carousel className="banners-wrapper">
        {banners && banners.map(banner => {
            const {Id, Image, Link} = banner;
            return (
            <Carousel.Item key={Id}>
                <img
                    className="d-block w-100 banner"
                    src={Image}
                    alt="slide"
                />
                <Carousel.Caption>
                <a className="btn btn-lg btn-primary boton text-white btn-link" href={Link} role="button">VER TIENDAS</a>
                </Carousel.Caption>
            </Carousel.Item>
            )
        })}
    </Carousel>
   )
}

export default Banners
