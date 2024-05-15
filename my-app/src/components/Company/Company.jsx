import React from "react";
import "./Company.css";
import { assets } from "../../assets/data";

const Company = () => {
  return (
    <div className="company">
      <h1>О компании</h1>
      <div className="company__title">
        <p>
          Компания «Sportova» специализируется на продаже шведских стенок,
          детских <br /> площадок и тренажеров. Мы являемся официальными
          дилерами ведущих <br /> производителей шведских стенок и детских
          площадок.
        </p>
        <div className="company__icon">
          <p>Подробнее</p>
          <img className="icon1" src={ass} />
        </div>
      </div>

      <div className="company__block">
        <div className="block">
          <img className="block__img" src={assets.icon2} />
          <p>
            Выставочный зал <br />
            на 450 кв.м
          </p>
        </div>
        <div className="block">
          <img className="block__img" src={assets.icon3} />
          <p>
            90% товара <br />
            в наличии на <br /> складе
          </p>
        </div>
        <div className="block">
          <img className="block__img" src={assets.icon4} />
          <p>
            Монтаж <br /> опытными <br /> специалистами
          </p>
        </div>
        <div className="block">
          <img className="block__img" src={assets.icon5} />
          <p>
            Отправляем в <br /> регионы с оплатой <br /> при получении
          </p>
        </div>
      </div>

      <div className="company__box">
        <div className="company__img">
          <div className="main__img">
            <img className="main__img__main" src={assets.ph1} />
            <div className="arrow right"><img className="img__right" src={assets.icon8}/></div>
            <div className="arrow left"><img className="img__left" src={assets.icon7}/></div>
          </div>
          <div>
            <img className="box__img" src={assets.ph2} />
            <img className="box__img" src={assets.ph3} />
            <img className="box__img" src={assets.ph2} />
            <img className="box__img" src={assets.ph3} />
          </div>
        </div>
        <div className="company__text">
          <div className="item__text">
            <img src={assets.icon6} />
            <p>
              Узкая специализация. Мы знаем больше нюансов и <br /> потребностей
              клиента, чем магазины, которые продают все <br /> подряд.
              Соответственно, сможем лучше проконсультировать <br /> и подобрать
              необходимый Вам комплекс;
            </p>
          </div>
          <div className="item__text">
            <img src={assets.icon6} />
            <p>
              90% ассортимента держим в наличии на складе в Нижнем <br />{" "}
              Новгороде и Москве;
            </p>
          </div>
          <div className="item__text">
            <img src={assets.icon6} />
            <p>
              Выставочный зал, где все оборудование надежно <br /> закреплено.
              Вы можете протестировать комплексы еще до <br /> покупки;
            </p>
          </div>
          <div className="item__text">
            <img src={assets.icon6} />
            <p>
              Если Вам необходима сборка шведской стенки, детской <br />{" "}
              площадки или турника – мы предоставляем такую услугу. В <br />{" "}
              компании работают опытные и аккуратные специалисты. <br /> Также
              мы оказываем услугу по укорачиванию шведской <br /> стенки;
            </p>
          </div>
          <div className="item__text">
            <img src={assets.icon6} />
            <p>
              Если товар не подошел, Вы можете его обменять или вернуть <br /> в
              течение расширенного срока в 30 дней;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
