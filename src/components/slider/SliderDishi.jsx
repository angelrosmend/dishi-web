import React from 'react'
import Slider from 'react-slick'
import { fiveItemsSettings, fourItemsSettings, threeItemsSettings, twoItemsSettings } from '../../settings/CarouselSettings'
import "./SliderDishi.css"




function SliderDishi(props) {

    const {items, background, isPromo} = props

    const configSliderSettings = (items) => {
         switch (items.length) {
        case 1:
            return null
        case 2:
            return twoItemsSettings
        case 3:
           return  threeItemsSettings
        case 4:
            return fourItemsSettings
        case 5: 
            return fiveItemsSettings
        default:
            return fiveItemsSettings
    }
  }

    const widthClass = (items) =>{
        switch (items.length) {
            case 1:
                return null
            case 2:
                return "width-2-items"
            case 3:
                return "width-3-items"
            case 4:
                return "width-4-items"
            default:
                return "width-5-items"
    }
}

    const itemsSetting = isPromo ? twoItemsSettings : configSliderSettings(items)
    if(items.length < 2 || !items)return null
    return (
     <div className={`container-fluid pt-5 ${background}  ${isPromo ? "width-5-items" : widthClass(items)}`}>
        <div className='mx-auto' data-aos="fade-up" data-aos-delay="170">
          <Slider {...itemsSetting}>
              {props.children}
          </Slider>
        </div>
     </div>
    )
}

export default SliderDishi
