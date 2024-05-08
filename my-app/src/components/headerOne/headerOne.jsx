import React from "react";
import './headerOne.css'
import photo1 from "./img/logoOne.png"
import photo2 from "./img/lupa.png"
import photo3 from "./img/love.png"
import photo4 from "./img/empty.png"
import photo5 from "./img/phone.png"
import photo6 from "./img/shop.png"
import photo7 from "./img/btnBurger.png"

export default function HeaderOne(){
    return(
        <>
        <header className="headerOne">
            <div className="headerWrap">
                <div className="logoOne">
                    <a href="" className="giperSylcka">
                        <img src={photo1} alt="" />
                        <ul className="ulNav">
                            <li>Шведские стенки</li>
                            <li>Уличные комплексы</li>
                            <li>Турники</li>
                            <li>Тяжелая атлетика</li>
                            <li style={{color: 'red'}}>Каталог товаров</li>
                        </ul>
                    </a>
                    <div className="btnHeader">
                        <img className="photoBtn" src={photo2} alt="" />
                        <img className="photoBtn" src={photo3} alt="" />
                        <img className="photoBtn photoRemove" src={photo4} alt="" />
                        <img className="photoBtn" src={photo5} alt="" />
                        <img className="photoBtn photoRemove" src={photo6} alt="" />
                    </div>
                    <div className="btnBurger">
                        <img src={photo7} alt="" />
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}