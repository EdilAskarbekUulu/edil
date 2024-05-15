import React from "react";
import './section2.css'

export default function Section2Data ({image,text,price,newprice,icon}){
    return(
        <div className="all-section2-all">

          <div className="all-section2">
            <div className="section2-img">
                <img src={image} />
            </div>
            <div className="section2-text">
                <p>{text} </p>
            </div>
            <div className="section2-price-icon">
                <div className="section2-price">
                    <h3>{price} </h3>
                    <h4>{newprice} </h4>
                </div>
                <div className="section2-icon">
                    <img src={icon} />
                </div>
            </div>
          </div>
        </div>
    )
}