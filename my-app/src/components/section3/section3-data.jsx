import React from "react";
import './section3.css'

export default function Section3Data ({image,text}){
    return(
        <div className="all-section3-all">

          <div className="all-section3">
            <div className="section3-img">
                <img src={image} />
            </div>
            <div className="section3-text">
                <p>{text} </p>
            </div>
          </div>
        </div>
    )
}