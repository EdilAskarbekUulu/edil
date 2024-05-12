import React from "react";
import './desires.css'
import photoOne from "./img/photoOne.png"
import photoTwo from "./img/Rectangle 6.png"
import photoThree from "./img/Rectangle 35.png"

export default function Desires(){
    return(
        <>
        <div className="desiresMain">
            <div className="desiresWrap">
                <div className="desiresPhotoOne">
                    <div className="desiresOne">
                        <img src={photoOne} />
                        <div className="desiresText">
                            <h1>Соберите шведскую <br /> стенку по своему <br /> желанию!</h1>
                            <p>Проснувшись однажды утром после беспокойного
                                 сна, Грегор Замза обнаружил, что он у себя 
                                 в постели превратился в страшное насекомое.</p>
                                 <button>Перейти в конструктор</button>
                        </div>
                    </div>
                </div>
                <div className="desireTwo">
                    <div className="desiresPhotoTwo">
                        <img src={photoTwo} alt="" />
                    </div>
                    <div className="desiresThree">
                        <img src={photoThree} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}