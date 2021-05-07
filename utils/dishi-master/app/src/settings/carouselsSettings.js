import {PrevArrow, NextArrow} from '../components/Arrows/Arrows'
/*CAOUSER 1 ITEMS*/



export const oneItemSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };


/*CAOUSER 2 ITEMS*/

export const twoItemsSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>,
    responsive: [

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };


/*CAOUSER 5 ITEMS*/

export const fiveItemsSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

/*CAOUSER 6 ITEMS*/

export const sixItemsSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };