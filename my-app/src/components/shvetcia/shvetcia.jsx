import React from "react";
import ShvetciaTwo from "./shvetciaTwo";
import photo01 from "./img/photo01.png"
import photo02 from "./img/photo02.png"
import photo03 from "./img/photo03.png"
import photo04 from "./img/photo04.png"
import './shvetcia.css'

export default function Shvetcia(){
    return(
        <>
        <div className="shvetciaMain">
            <h3>Шведские стенки</h3>
            <div className="shvetsia">
                <ShvetciaTwo photo={photo02} text="Шведская стенка P-19 (Цвет: Белый)" rub="14 980 ₽" redRub={null} />
                <ShvetciaTwo photo={photo01} text="Шведская стенка P-3 (Цвет: Антик Серебро)${style{{}}}" rub="7 990 ₽" redRub="17 320 ₽" />
                <ShvetciaTwo photo={photo03} text="Шведская стенка P-4 (Цвет: Светофор)" rub="10 990 ₽" redRub="17 320 ₽" />
                <ShvetciaTwo photo={photo04} text="Шведская стенка P-19 (Цвет: Антик серебро)" rub="14 980 ₽" redRub={null} />
            </div>
        </div>
        </>
    )
}