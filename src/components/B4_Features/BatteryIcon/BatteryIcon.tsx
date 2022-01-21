import React, {FC} from "react";
import style from "./batteryIcon.module.scss"
import clsx from "clsx";


interface IBatteryIcon {
    value: ValueType
}
export type ValueType = 1 | 2 | 3 | 4 | 5

export const BatteryIcon: FC<IBatteryIcon> = ({value}) => {
    return (
        <div className={style.batteryIcon}>
            {
                [1, 2, 3, 4, 5].map(el => (
                    <div key={el} className={clsx({
                        [style.item]: true,
                        [style.item_full]: el <= value
                    })}/>
                ))
            }
        </div>
    )
}