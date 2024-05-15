import React from "react";
import "./Email.css";

const Email = () => {
  return (
    <div className="email">
      <div className="email__main">
        <div className="email__text">
          <p>
            <strong>Редкие, но очень полезные письма!</strong> <br />
            Подпишись и получи промокод на скидку! Его можно <br /> применить ко
            всем товарам в магазине
          </p>
        </div>
        <div className="email__subscribe">
          <input className="email__block" type="email" placeholder="Ваш e-mail" required />
          <div className="email__button">Подписаться</div>
        </div>
      </div>
    </div>
  );
};

export default Email;
