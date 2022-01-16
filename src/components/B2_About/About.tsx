import React from "react";
import style from "./about.module.scss";
import divider from "../../assets/png/about-divider.png";
import item1 from "../../assets/png/about1.png";
import item2 from "../../assets/png/about2.png";
import item3 from "../../assets/png/about3.png";
import item4 from "../../assets/png/about4.png";

export const About = () => {
    return (
        <section className={style.about}>
            <div className={style.inner}>

                <p className={style.title}><span>We are pleased to present our first collection of the world of the </span><span>Great Eimolad</span></p>

                <img src={divider} alt="" className={style.divider}/>

                <p className={style.text}>
                    This is an amazing world inhabited by humans, dwarves, orcs, elves and other fantastic creatures. This is a world of magic and valor. This world is full of mysteries, dangers and incredible adventures. Away from the main roads, it is restless here even in peacetime. There is always a danger of being caught by robbers or in the clutches of an unknown beast. But time is not always peaceful..
                </p>

                <div className={style.items}>
                    <img src={item1} alt=""/>
                    <img src={item2} alt=""/>
                    <img src={item3} alt=""/>
                    <img src={item4} alt=""/>
                </div>

            </div>
        </section>
    )
};