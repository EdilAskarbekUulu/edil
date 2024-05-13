import React from "react";
import photo001 from "./img/Vector.png"
import photo002 from "./img/Union.png"

export default function ShvetciaTwo( { photo, text, rub, redRub } ){
    return(
        <>
        <div className="Gallery">
            <div className="img"><img src={photo} alt="" /></div>
            <p>{text}</p>
            <div className="galleryTop">
                <h2>{redRub}</h2>
                <span>{rub}</span>
                <div className="shopGallery">
                    <img src={photo001} alt="" className="shopImg"/>
                    <img src={photo002} alt="" className="shopPl" />
                </div>
            </div>
        </div>
        </>
    )
}