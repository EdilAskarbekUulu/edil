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
        <div className="shvetsia">
            <ShvetciaTwo photo={photo01} text="Шведская стенка P-19 (Цвет: Белый)" rub="14 980 ₽" redRub={null} />
            <ShvetciaTwo photo={photo01} text="Шведская стенка P-19 (Цвет: Белый)" rub="14 980 ₽" redRub={null} />
            <ShvetciaTwo photo={photo01} text="Шведская стенка P-19 (Цвет: Белый)" rub="14 980 ₽" redRub={null} />
            <ShvetciaTwo photo={photo01} text="Шведская стенка P-19 (Цвет: Белый)" rub="14 980 ₽" redRub={null} />
        </div>
        </>
    )
}