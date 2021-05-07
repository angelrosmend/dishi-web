import React from 'react'
import { twoItemsSettings } from '../../settings/CarouselSettings'

function SliderDishi(props) {

    const {productsList} = props

    const configSliderSettings = (product) => {
         switch (product.length) {
        case 1:
            return null
        case 2:
            return twoItemsSettings
        case 3:
           return thre
        case 4:
            return null
    }
}
    
    productsList && productsList.length >= 5 ? fiveItemsSettings : fourItemsSettings
    return (
     <div className={`container-fluid p-sm-2 pt-3 p-md-5 bg-white ${destacados && destacados.length >=5 ? 'width-5-items' : 'width-4-items pr-0'}`}>
        <div className='mx-auto ' data-aos="fade-up" data-aos-delay="170">
          <Slider { ...configSliderSettings}>
              {props}
          </Slider>
        </div>
     </div>
    )
}

export default SliderDishi
