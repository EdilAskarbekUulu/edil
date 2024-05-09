import React, { useState } from "react";
import './headerOne.css'
import photo1 from "./img/logoOne.png"
import photo2 from "./img/lupa.png"
import photo3 from "./img/love.png"
import photo4 from "./img/empty.png"
import photo5 from "./img/phone.png"
import photo6 from "./img/shop.png"
import photo7 from "./img/btnBurger.png"
import BurgerHeaderOne from "./burgerHeaderOne";

export default function HeaderOne(){
    const [showBurgerHeaderOne, setShowBurgerHeaderOne] = useState(false);

    const handleShowBurgerHeaderOne = () => {
        setShowBurgerHeaderOne(true);
    };

    const handleHideBurgerHeaderOne = () => {
        setShowBurgerHeaderOne(false);
    };
    return(
        <>
            <div className="headerWrap">
                <div className="logoOne">
                    <a href="" className="giperSylcka">
                        <img src={photo1} alt="" />
                    
                    <ul className="ulNav">
                        <li><a>Шведские стенки</a></li>
                        <li><a>Уличные комплексы</a></li>
                        <li><a>Турники</a></li>
                        <li><a>Тяжелая атлетика</a></li>
                        <li style={{color: 'red'}}><a>Каталог товаров</a></li>
                    </ul>
                    </a>
                    
                    <div className="btnHeader">
                        <img className="photoBtn" src={photo2} alt="" />
                        <img className="photoBtn" src={photo3} alt="" />
                        <img className="photoBtn photoRemove" src={photo4} alt="" />
                        <img className="photoBtn" src={photo5} alt="" />
                        <img className="photoBtn photoRemove" src={photo6} alt="" />
                    </div>
                    <div className="Burger">
                        {showBurgerHeaderOne ? (
                            <BurgerHeaderOne onHide={handleHideBurgerHeaderOne}/>
                        ) : (
                            <div className="btnBurger">
                                <img className="btn_burger" src={photo7} onClick={handleShowBurgerHeaderOne} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}