import React, { useState } from 'react'
import '../style/carousel.css'
const Carousel = ({imgArr}) => {
  const [imageOnScreen, setImageOnScreen] = useState(0);
  const carouselFrame = {
      width:"100%",
      height:"100%",
      backgroudPosition:"center",
      backgroundSize:"cover",
      backgroundImage: `url(${imgArr[imageOnScreen].url})`,
  }
  return (
    <div className="carousel">
        <div style={carouselFrame}/>
    </div>
  )
}

export default Carousel
