import React from "react";
import "./Footer.css";
import { assets } from "../../assets/data";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__main">
          <div className="footer__contacts">
            <h1>Контакты</h1>
            <li className="contact__address">
              г. Нижний Новгород, <br /> ул.Народная, 20
            </li>
            <li className="contact__number">8 (800) 550-22-16</li>
            <li className="contact__email">info@sportova.ru</li>
            <li className="contact__social">Sportova на связи:</li>
            <div className="social__media">
              <img src={assets.icon9} />
              <img src={assets.icon10} />
              <img src={assets.icon11} />
              <img src={assets.icon12} />
              <img src={assets.icon13} />
            </div>
          </div>

          <div className="footer__catalog li">
            <h1>Каталог</h1>
            <li>Шведские стенки</li>
            <li>Турники</li>
            <li>Уличные комплексы</li>
            <li>Тяжелая атлетика</li>
            <li>Единоборства</li>
            <li>Тюбинги</li>
          </div>

          <div className="footer__text li">
            <li>Игровые домики</li>
            <li>Фитнес</li>
            <li>Скамьи и стойки под штангу</li>
            <li>Сухие бассейны</li>
            <li>Батуты</li>
            <li>Новогодние елки</li>
          </div>

          <div className="footer__useful li">
            <h1>Полезное</h1>
            <li>Обратная связь</li>
            <li>Акции и скидки</li>
            <li>Доставка и оплата</li>
            <li>О нас</li>
            <li>Контакты</li>
            <li>Политика сайта</li>
          </div>
        </div>
      </div>

      <div className="footers__emblem">
        <div className="emblem__main">
          <img src={assets.ph4}/>
          <h3>© ООО «Спортова», 2021</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
