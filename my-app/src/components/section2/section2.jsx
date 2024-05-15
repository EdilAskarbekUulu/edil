import React from "react";
import './section2.css'
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"
import img5 from "./img/icon.png"
import Section2Data from "./section2-data";


export default function Section2(){
    return(
        <>
        <div>
            <div className="section2-h1" >
                <h1>Тяжелая атлетика</h1>
            </div>
            <div className="section2-all">
                <Section2Data image={img1} text="Гантель разборная стальная (гриф + блины) 15 кг" newprice="1 920 P" icon={img5}/>
                <Section2Data image={img2} text="Гантель разборная (гриф + блины) 24,1 кг" price="6 200 P" newprice="4 260 P" icon={img5}/>
                <Section2Data image={img3} text="Гантель разборная (гриф + блины) 26,6 кг" price="5 500 P" newprice="4 260 P" icon={img5}/>
                <Section2Data image={img4} text="Гиря «Горилла» 16,0 кг" newprice="5 990 P" icon={img5}/>
            </div>
        </div>
        
        
        
        </>
    )
}