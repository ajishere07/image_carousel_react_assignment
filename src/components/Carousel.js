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
        <div className="leftArrow" onClick={() => {

            const isFirstFrame = imageOnScreen === 0;
            const newImageOnScreen = isFirstFrame ? imgArr.length - 1 : imageOnScreen - 1;
            setImageOnScreen(newImageOnScreen)

        }}>❰</div>

        <div className="rightArrow" onClick={()=> {
            const isLastFrame = imageOnScreen === imgArr.length - 1;
            const newImageOnScreen = isLastFrame ? 0 : imageOnScreen + 1;
            setImageOnScreen(newImageOnScreen);  

        }}>❱</div>
        <div style={carouselFrame}/>
    </div>
  )
}

export default Carousel
