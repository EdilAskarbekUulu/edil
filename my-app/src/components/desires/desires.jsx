import React from "react";
import './desires.css'
import photoOne from "./img/photoOne.png"
import photoTwo from "./img/Rectangle 6.png"
import photoThree from "./img/Rectangle 35.png"
import photoFour from "./img/static.png"

export default function Desires(){
    return(
        <>
        <div className="desiresMain">
            <div className="desiresWrap">
                <div className="desiresPhotoOne">
                    <div className="desiresOne">
                        <img src={photoOne} />
                        <div className="desiresText">
                            <h1>Соберите шведскую стенку по своему  желанию!</h1>
                            <p>Проснувшись однажды утром после беспокойного
                                 сна , Грегор Замза обнаружил, что он у себя 
                                 в постели превратился в страшное насекомое.</p>
                            <button>Перейти в конструктор</button>
                        </div>
                    </div>
                </div>
                <div className="desireTwo">
                    <div className="desiresPhotoTwo">
                        <div className="pho">
                        <img src={photoTwo} alt="" className="desireCildOne" />
                        </div>
                        <div className="textDesire">
                            <h2>Собственное швейное <br /> производство</h2>
                            <p>Приглашаем <br /> к сотрудничеству</p>
                            <span><img src={photoFour} alt="" /></span>
                        </div>
                    </div>
                    <div className="desiresThree">
                        <div className="pho">
                            <img src={photoThree} alt="" className="desireCildTwo" />
                        </div>
                        <div className="textDesireTwo">
                            <h2>Посетите наш шоу-рум!</h2>
                            <p>Н.Новгород, ул.Народная 20 <br /> Ежедневно с 9:00 до 19:00</p>
                            <span><img src={photoFour} alt="" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}