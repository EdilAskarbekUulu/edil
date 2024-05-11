import React from "react";
import './cotologAdd.css'
import photo1 from './img/right.png'

export default function CatologAdd(){
    return(
        <>
        <div className="catologAdd">
            <ul>    
                <li>Щведские стенки <img src={photo1} className="photoCat" /></li>
                <li>Турники <img src={photo1} className="photoCat" /></li>
                <li>Уличные комплексы <img src={photo1} className="photoCat" /></li>
                <li>Тяжелая атлети <img src={photo1} className="photoCat" /></li>
                <li>Стойки под штангу <img src={photo1} className="photoCat" /></li>
                <li>Единоборства <img src={photo1} className="photoCat" /></li>
                <li>Фитнес <img src={photo1} className="photoCat" /></li>
                <li>Единоборства <img src={photo1} className="photoCat" /></li>
                <li>Тубинги <img src={photo1} className="photoCat" /></li>
                <li>Батуты <img src={photo1} className="photoCat" /></li>
                <li>Бассейны <img src={photo1} className="photoCat" /></li>
                <li>Рюкзаки и сумки <img src={photo1} className="photoCat" /></li>
                <li>Новогодние ёлки <img src={photo1} className="photoCat" /></li>
                <li>Детские игрушки <img src={photo1} className="photoCat" /></li>
                <li>Самокаты <img src={photo1} className="photoCat" /></li>
                <li>Велосипеды <img src={photo1} className="photoCat" /></li>
            </ul>
        </div>
        </>
    )
}