import React from "react";
import './headerTwo.css'
import photo01 from "./img/City.png"
import photo02 from "./img/Clock.png"
import photo03 from "./img/SPORTOVA_logo.png"
import photo04 from "./img/lupa.png"
import photo05 from "./img/love.png"
import photo06 from "./img/empty.png"
import photo07 from "./img/Vector.png"
import { useState } from "react";
import photo08 from "./img/btnBurger.png"
import BurgerTwo from "./headerTwoBurger";

export default function HeaderTwo(){
    const[burgerHeaderTwo, setBurgerHeaderTwo]=useState(false)

    function burgerTwo(){
        setBurgerHeaderTwo(true)
    }
    function budgerText(){
        setBurgerHeaderTwo(false)
    }

    return(
            <div className="headerMain">
                <div className="headerTwo">
                    <div className="headerBoxOne">
                        <img src={photo01} alt="" />
                        <p>Нижний Новгород</p>
                    </div>
                    <ul className="headerBoxTwo">
                        <li><a style={{color: 'red'}}>Акции</a></li>
                        <li><a>Как заказать</a></li>
                        <li><a>О компании</a></li>
                        <li><a>Доставка и Оплата</a></li>
                        <li><a>Гарантии</a></li>
                        <li><a>Контакты</a></li>
                    </ul>
                    <ul className="headerBoxThree">
                        <li><img src={photo02}/> 8800 550-22-16</li>
                        <li style={{color: 'blue'}}>Заказать звонок</li>
                    </ul>
                </div>
                <div className="headerLogo">
                    <div className="headerBlockOne">
                        <img src={photo03} alt="" />
                    </div>
                    <div className="headerBlockTwo">
                        <div className="inputHeader">
                            <img src={photo04} alt="" />
                            <input type="text" placeholder="Поиск по сайту" />
                        </div>
                    </div>
                    <div className="headerBlockThree">
                        <img src={photo05} alt="" />
                        <img src={photo06} alt="" />
                        <div className="shop">
                            <img src={photo07} alt="" />
                            <span>
                                <h2>Корзина (0)</h2>
                                <p>Нет товаров</p>
                            </span>
                        </div>
                    </div>
                </div>
                {burgerHeaderTwo ? (
                    <BurgerTwo burger={budgerText}/>
                ):(
                    <div className="burgerBtnTwo">
                        <img src={photo08} className="burgerTwo" onClick={burgerTwo}/>
                    </div>
                )}
            </div>
    )
}