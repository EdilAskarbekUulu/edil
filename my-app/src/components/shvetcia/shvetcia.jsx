import React, { useEffect, useRef } from "react";
import ShvetciaTwo from "./shvetciaTwo";
import photo01 from "./img/photo01.png"
import photo02 from "./img/photo02.png"
import photo03 from "./img/photo03.png"
import photo04 from "./img/photo04.png"
import photo05 from "./img/static.png"
import photo06 from "./img/bac.png"
import './shvetcia.css'

export default function Shvetcia(){
    const scrollContainerRef = useRef(null);
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const backBtn = document.getElementById("backBtn");
        const nextBtn = document.getElementById("nextBtn");
    
        function handleScroll(evt) {
          evt.preventDefault();
          if (evt.deltaY > 0) {
            rotateLeft();
          } else {
            rotateRight();
          }
        }
        function backFun(){
            rotateRight();
        }
        function nextFan(){
            rotateLeft();
        }
    
        if (scrollContainer) {
          scrollContainer.addEventListener("wheel", handleScroll);
        }
        if(backBtn){
            backBtn.addEventListener("click", backFun)
        }
        if(nextBtn){
            nextBtn.addEventListener("click", nextFan)
        }
    
        return () => {
          if (scrollContainer) {
            scrollContainer.removeEventListener("wheel", handleScroll);
          }
          if(backBtn){
            backBtn.removeEventListener("click", backFun)
          }
          if(nextBtn){
            nextBtn.removeEventListener("click", nextFan)
            }
        };
      }, []);
      const rotateLeft = () => {
        const scrollContainer = scrollContainerRef.current;
        const firstItem = scrollContainer.firstElementChild;
        scrollContainer.appendChild(firstItem);
        scrollContainer.style.transition = "transform 0.5s ease-in-out";
        scrollContainer.style.transform = "translateX(-100%)";
        setTimeout(() => {
            scrollContainer.style.transition = "";
            scrollContainer.style.transform = "translateX(0)";
        }, 0);
      };
    
      const rotateRight = () => {
        const scrollContainer = scrollContainerRef.current;
        const lastItem = scrollContainer.lastElementChild;
        scrollContainer.insertBefore(lastItem, scrollContainer.firstChild);
        scrollContainer.style.transition = "transform 0.5s ease-in-out";
        scrollContainer.style.transform = "translateX(-100%)";
        setTimeout(() => {
            scrollContainer.style.transition = "";
            scrollContainer.style.transform = "translateX(0)";
        }, 0);
      };

    return(
        <>
        <div className="shvetciaMain">
            <h3>Шведские стенки</h3>
            <div className="shvetsiaWrap">
                <img src={photo06} alt="" id="backBtn" onClick={rotateRight} />
                <div className="shvetsia"  ref={scrollContainerRef}>
                    <ShvetciaTwo photo={photo02} text="Шведская стенка P-19 (Цвет: Белый)" rub="14 980 ₽" redRub={null} />
                    <ShvetciaTwo photo={photo01} text="Шведская стенка P-3 (Цвет: Антик Серебро)" rub={<span id="redText">7 990 ₽</span>} redRub="17 320 ₽"  />
                    <ShvetciaTwo photo={photo03} text="Шведская стенка P-4 (Цвет: Светофор)" rub={<span id="redText">10 990 ₽</span>} redRub="17 320 ₽" />
                    <ShvetciaTwo photo={photo04} text="Шведская стенка P-19 (Цвет: Антик серебро)" rub="14 980 ₽" redRub={null} />
                </div>
                <img src={photo05} alt="" id="nextBtn" onClick={rotateLeft} />
            </div>
        </div>
        </>
    )
}