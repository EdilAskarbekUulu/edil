import React from "react";
import { useState } from "react";
import CatologAdd from "./catologAdd";
import './cotolog.css'
import photo10 from "./img/burger-menu.png"
import photo11 from "./img/down.png"

export default function Cotolog(){
    const[add, setadd]=useState(false)

    function addUl(){
        setadd(!add)
    }
    
    return(
        <>
        <section className="sectionOne">
            <div className="cotologMain">
                <div className="cotologWrap">
                    <button className="cotologBtn" onClick={addUl}><img src={photo10}/>Каталог товаров <img src={photo11} /></button>
                    {add && (
                        <CatologAdd/>
                    )}
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