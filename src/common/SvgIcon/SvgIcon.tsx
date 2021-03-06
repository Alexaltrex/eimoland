import React, {cloneElement, FC} from "react";
import style from './svgIcon.module.scss';
import clsx from "clsx";

export interface ISvgIcon {
    icon: JSX.Element
    className?: string
    color?: string
}

export const SvgIcon: FC<ISvgIcon> = ({icon, className, color}) => {
    return (
       <span className={clsx(className, style.wrapper)}>
          {cloneElement(icon)}
       </span>
    )
}