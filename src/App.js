import Carousel from "./components/Carousel";
import "./style/app.css"

function App() {
  const imgArr =[
    {url :"http://localhost:3000/img1.jpg" , id:1},
    {url :"http://localhost:3000/img2.jpg", id:2},
    {url :"http://localhost:3000/img3.jpg",id:3}
  ]
  return (
    <div className="mainPage">
      <h1>carousel</h1>
      {/* carousel container */}
      <div className="carouselContainer">
         <Carousel imgArr={imgArr}/>
      </div>
      {/* carousel container */}
    </div>
  );
}

export default App;
