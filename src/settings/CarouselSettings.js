
/*CAOUSER 1 ITEMS*/

import { NextArrow, NextArrowC, NextArrowOtros, PrevArrow, PrevArrowC, PrevArrowOtros } from "../pages/home/Arrows/Arrows";


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
        breakpoint: 1580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2

        }
      },

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

  export const fourItemsSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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


  export const fourItemsSettingsOtros = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow:<PrevArrowOtros/>,
    nextArrow:<NextArrowOtros/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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

  /*CAOUSER 3 ITEMS*/

  export const threeItemsSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow:<PrevArrowOtros/>,
    nextArrow:<NextArrowOtros/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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


/*CAOUSER 9 ITEMS*/

export const nineItemsSettings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 9,
  slidesToScroll: 5,
  initialSlide: 0,
  prevArrow:<PrevArrow/>,
  nextArrow:<NextArrow/>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    }
  ]
};


export const sixItemsSettingsC = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  prevArrow:<PrevArrowC/>,
  nextArrow:<NextArrowC/>,
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


/*CAOUSER 9 ITEMS*/

export const nineItemsSettingsC = {
dots: false,
infinite: true,
speed: 700,
slidesToShow: 9,
slidesToScroll: 5,
initialSlide: 0,
prevArrow:<PrevArrowC/>,
nextArrow:<NextArrowC/>,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 3,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 2
    }
  }
]
};