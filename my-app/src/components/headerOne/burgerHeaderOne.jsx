import React from "react";

import remove from "./img/remove.png"

export default function BurgerHeaderOne(props){
    const { onHide } = props;
    return(
        <>
        <div className="burgerOne">
            <div className="removeBurger">
                <img className="btnRemove" src={remove}  onClick={onHide}/>
            </div>
            <ul className="burgerNav">
                <li>Шведские стенки</li>
                <li>Уличные комплексы</li>
                <li>Турники</li>
                <li>Тяжелая атлетика</li>
                <li style={{color: 'red'}}>Каталог товаров</li>
            </ul>
        </div>
        </>
    )
}