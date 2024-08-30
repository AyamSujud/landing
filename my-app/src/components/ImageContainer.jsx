import React from 'react';

function ImageContainer() {
  return (
    <div className="image-container">
      <img src="Technology.jpg" alt="Gambar" />
      <div className="overlay-text" >TechForge</div> 
      <div className="operlay-text">Tech information</div>
    </div>
  );
}

export default ImageContainer;