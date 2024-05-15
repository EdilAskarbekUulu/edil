import React from "react";
import './section1.css'

export default function Section1Data ({image,text,price,newprice,icon}){
    return(
        <div className="all-section1-all">

          <div className="all-section1">
            <div className="section1-img">
                <img src={image} />
            </div>
            <div className="section1-text">
                <p>{text} </p>
            </div>
            <div className="section1-price-icon">
                <div className="section1-price">
                    <h3>{price} </h3>
                    <h4>{newprice} </h4>
                </div>
                <div className="section1-icon">
                    <img src={icon} />
                </div>
            </div>
          </div>
        </div>
    )
}