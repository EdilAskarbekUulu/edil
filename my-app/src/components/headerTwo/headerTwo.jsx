import React from "react";
import './headerTwo.css'
import photo01 from "./img/City.png"
import photo02 from "./img/Clock.png"

export default function HeaderTwo(){
    return(
        <header>
            <div className="headerMain">
                <div className="headerTwo">
                    <div className="headerBoxOne">
                        <img src={photo01} alt="" />
                        <p>Нижний Новгород</p>
                    </div>
                    <ul className="headerBoxTwo">
                        <li><a>Акции</a></li>
                        <li><a>Как заказать</a></li>
                        <li><a>О компании</a></li>
                        <li><a>Доставка и Оплата</a></li>
                        <li><a>Гарантии</a></li>
                        <li><a>Контакты</a></li>
                    </ul>
                    <ul className="headerBoxThree">
                        <li><img src={photo02}/> 8800 550-22-16</li>
                        <li>Заказать звонок</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}