import React from "react";
import photo1 from "./img/remove.png"

export default function BurgerTwo(props){
    const {burger}=props
    return(
        <>

        <div className="oneBurger">
            <div className="burgerremoveTwo">
                <img src={photo1} alt="" onClick={burger}/>
            </div>
            <ul className="burgerText">
                <li>Главная страница </li>
                <li>Каталог товаров</li>
                <li>Товары со скидкой </li>
                <li>О нас</li>
                <li>Доставка и оплата</li>
                <li>Отзывы</li>
                <li>Контакты</li>
            </ul>
            <ul className="burgerText" style={{borderTop: '2px solid gray'}}>
                <li>Избранные товары</li>
                <li>Сравнение товаров</li>
            </ul>
            <ul className="burgerText" style={{borderTop: '2px solid gray'}}>
                <li>Обратная связь</li>
                <li>Политика сайта</li>
            </ul>
        </div>
        </>
    )
}