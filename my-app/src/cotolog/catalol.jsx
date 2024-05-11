import React from "react";
import './cotolog.css'
import photo10 from "./img/burger-menu.png"
import photo11 from "./img/down.png"

export default function Cotolog(){
    return(
        <>
        <section className="sectionOne">
            <div className="cotologMain">
                <div className="cotologWrap">
                    <button className="cotologBtn"><img src={photo10}/>Каталог товаров <img src={photo11} /></button>
                    <ul className="cotologUl">
                        <li>Шведские стенки</li>
                        <li>Уличные комплексы</li>
                        <li>Турники</li>
                        <li>Тяжелая атлетика</li>
                    </ul>
                    <p style={{color: 'rgba(255, 250, 47, 1)'}}>% Товары со скидкой</p>
                </div>
            </div>
        </section>
        </>
    )
}