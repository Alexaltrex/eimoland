import React, {FC} from "react";
import style from "./timerBlock.module.scss";
import item from "../../assets/png/timer-item.png"

interface ITimerBlock {
    num1: string
    num2: string
    title: string
}

export const TimerBlock: FC<ITimerBlock> = ({num1, num2, title}) => {
    return (
        <div className={style.timerBlock}>
            <div className={style.nums}>
                <div className={style.item}>
                    <img src={item} alt=""/>
                    <p>{num1}</p>
                </div>
                <div className={style.item}>
                    <img src={item} alt=""/>
                    <p>{num2}</p>
                </div>
            </div>
            <p className={style.title}>{title}</p>
        </div>
    )
}