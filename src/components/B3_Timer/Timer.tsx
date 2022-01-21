import React, {useEffect, useState} from "react";
import style from "./timer.module.scss";
import {TimerBlock} from "./TimerBlock";
import {convertToTwoDigit, dateStart, getDays, getHours, getMins, getSecs} from "./helpers";
import src1 from "../../assets/png/timer-icon-1.png";
import src2 from "../../assets/png/timer-icon-2.png";
import src3 from "../../assets/png/timer-icon-3.png";
import gnom from "../../assets/png/timer-gnom.png";

export const iconLinks = [
    { src: src1, href: "https://t.me/eimolad"},
    { src: src2, href: "https://discord.gg/K56KWEFdtU"},
    { src: src3, href: "https://twitter.com/eimolad"},
];


export const Timer = () => {
    const [timeIsOver, setTimeIsOver] = useState(false);
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const time = new Date(14 * 24 * 60 * 60 * 1000 + dateStart.getTime() - new Date().getTime()).getTime();
        if (time > 0 && !timeIsOver) {
            setTime(time);
            setStart(true);
        }
    }, []);

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (start) {
                if (time <= 60000) {
                    setTimeIsOver(true);
                    clearTimeout(timeId);
                } else {
                    setTime(time => time - 1000);
                }
            }
        }, 1000);
        return () => {
            clearTimeout(timeId);
        }
    }, [time]);


    return (
        <section className={style.timer}>

            <div className={style.inner}>

                <div className={style.innerLeft}>
                    <div className={style.topBlock}>

                        <div className={style.imgWrapper}>
                            <img src={gnom} alt=""/>
                        </div>
                        <div className={style.textWrapper}>
                            <p className={style.title}>
                                <span>We will start the countdown </span>
                                <span>14 days</span>
                                <span> before our pre-sale on Entrepot</span>
                            </p>
                            <p className={style.text}>
                                First, we will mint 2880 3D NFT "Elder Dwarves", but only 2500 Elder Dwarves will be available
                                for sale. This is the only Elder Dwarves emission. But there will be other races. We will
                                publish the details of the terms of sale later. Subscribe to our social networks for the latest
                                news from official sources. All official sources will be presented on this website.
                                Beware of scammers!!!
                            </p>
                        </div>
                    </div>

                    <div className={style.bottomBlock}>


                        <div className={style.timerWrapper}>
                            <div className={style.timerBlockWrapper}>
                                <TimerBlock num1="1"//{convertToTwoDigit(getDays(time))[0]}
                                            num2="4"//{convertToTwoDigit(getDays(time))[1]}
                                            title="Days"/>
                            </div>

                            <div className={style.timerBlockWrapper}>
                                <TimerBlock num1="0"//{convertToTwoDigit(getHours(time))[0]}
                                            num2="0"//{convertToTwoDigit(getHours(time))[1]}
                                            title="Hours"/>
                            </div>

                            <div className={style.timerBlockWrapper}>
                                <TimerBlock num1="0"//{convertToTwoDigit(getMins(time))[0]}
                                            num2="0"//{convertToTwoDigit(getMins(time))[1]}
                                            title="Minutes"/>
                            </div>

                            <div className={style.timerBlockWrapper}>
                                <TimerBlock num1="0"//{convertToTwoDigit(getSecs(time))[0]}
                                            num2="0"//{convertToTwoDigit(getSecs(time))[1]}
                                            title="Seconds"/>
                            </div>
                        </div>



                        <div className={style.socialBlock}>
                            <p>Find out more details about the sales rounds</p>
                            <div className={style.links}>
                                {
                                    iconLinks.map(({src, href}, index) => (
                                        <a className={style.link} href={href} key={index} target="_blank" rel="noopener noreferrer">
                                            <img src={src} alt=""/>
                                        </a>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>

                <div className={style.innerRight}>
                    <img src={gnom} alt=""/>
                </div>


            </div>

        </section>
    )
};