import * as React from "react";
import "./maincard.css"; 
import '../font.css';

function MainCard({title,address,imageUrl}) {
  return (
    <>
    <div className="card bg-dark text-white">
      <img src={imageUrl} className="card-img square-img"/>
      <div className="card-img-overlay">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{address}</p>
      </div>
    </div>
    </>
  );
}

export default MainCard;

