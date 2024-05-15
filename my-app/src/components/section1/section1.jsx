import React from "react";
import Section1Data from "./section1data";
import './section1.css'
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"
import img5 from "./img/icon.png"


export default function Section1(){
    return(
        <>
        <div>
            <div className="section1-h1" >
                <h1>Уличные спортивные комплексы</h1>
            </div>
            <div className="section1-all">
                <Section1Data image={img1} text="УСК Богатырь Romana, качели гнездо Romana" newprice="27 590 ₽" icon={img5}/>
                <Section1Data image={img2} text="Спортивный детский комплекс “Юниор-Плюс”..."  price="18 500 ₽" newprice={<span id="newprice">15 990 ₽</span>} icon={img5}/>
                <Section1Data image={img3} text="Детский уличный спортивный комплекс «Юниор» (с сеткой)..." price="23 800 ₽" newprice={<span id="newprice">19 990 ₽</span>} icon={img5}/>
                <Section1Data image={img4} text="Уличный спортивный турник Романа" newprice="22 990 ₽" icon={img5}/>
            </div>
        </div>
        
        
        
        </>
    )
}