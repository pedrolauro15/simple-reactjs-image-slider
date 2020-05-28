import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [index, setIndex] = useState(0);

  function changeImage(){
    let i = index;
    const images = document.querySelectorAll(".image-box img");
    const max = images.length -1;

    if(i >= max){
      setIndex(0);
      i = 0; 
      images[max].classList.remove("selected");
      images[0].classList.add("selected");

      return;
    }

    images[i].classList.remove('selected');
    setIndex(index + 1);
    i++;
    images[i].classList.add('selected');
    console.log(i);

    
  }

  useEffect(() => {
    setTimeout(()=>{changeImage()}, [3000]);
  }, [index]);

  return (
    <div id="app">
      <div className="image-box">
        <img alt="img1" className="selected" src="https://i.pinimg.com/originals/f5/95/c4/f595c4c6f356447d67e2dadc87c05093.jpg"/> 
        <img alt="img2" className="" src="https://mcdn.wallpapersafari.com/medium/36/93/2HY7if.jpg"/>
        <img alt="img3" className="" src="https://i.pinimg.com/originals/91/35/5a/91355aee765eb07a95e5b6741fb8a42e.jpg"/> 
      </div>
      
    </div>
  );
}

export default App;
