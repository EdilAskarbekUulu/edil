import React from "react";
import './section3.css'
import Section3Data from "./section3-data";
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'
import img7 from './img/img7.png'
import img8 from './img/img8.png'

export default function Section3(){
    return(
        <>
        <div>
            <div className="section3-h1" >
                <h1>Каталог товаров</h1>
            </div>
            <div className="section3-all">
        
                <Section3Data image={img1} text="Щведские стенки"/>
                <Section3Data image={img2} text="Турники"/>
                <Section3Data image={img3} text="Уличные комплексы"/>
                <Section3Data image={img4} text="Тяжелая атлетика"/>
                <Section3Data image={img5} text="Стойки под штангу"/>
                <Section3Data image={img6} text="Единоборства"/>
                <Section3Data image={img7} text="Фитнес"/>
                <Section3Data image={img8} text="Весь каталог"/>
    
            </div>
        </div>
        
        
        
        </>
    )
}