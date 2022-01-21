import {ClickAwayListener, TooltipProps, useMediaQuery} from "@mui/material";
import React, {FC, ReactElement, useState} from "react";
import Tooltip from "@mui/material/Tooltip";
import styled from "@emotion/styled";
import tooltipClasses from "@mui/material/Tooltip/tooltipClasses";
import { theme } from "../../theme";

const StyledTooltip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#232327",
        opacity: 0.95,
        "box-shadow": "0px 0px 14px rgba(0, 0, 0, 0.52)",
        "border-radius": "5px",
        "font-family": "Comfortaa",
        "font-style": "normal",
        "font-weight": "normal",
        "font-size": "14px",
        "line-height": "140%",
        color: "#B8B8B8",
        padding: "25px 30px",
        width: "378px",
        boxSizing: "border-box",
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: "#232327",
        opacity: 0.95,
    }
}));

interface ICustomTooltip {
    children: ReactElement
    title: string
}

export const CustomTooltip: FC<ICustomTooltip> = ({
                                                      children,
                                                      title
                                                  }) => {


    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const matchDesktop = useMediaQuery(theme.breakpoints.up('desktop'));

    return (
        <>
            {
                matchDesktop
                ? (
                        <StyledTooltip title={title}
                                       placement='top-end'
                                       arrow>
                            {children}
                        </StyledTooltip>
                    )
                    : (
                        <ClickAwayListener onClickAway={handleTooltipClose}>
                            <div>
                                <StyledTooltip
                                    PopperProps={{
                                        disablePortal: true,
                                    }}
                                    onClose={handleTooltipClose}
                                    open={open}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title={title}
                                    placement='top-end'
                                    arrow
                                >
                                    <div onClick={() => handleTooltipOpen()}>
                                        {children}
                                    </div>

                                </StyledTooltip>
                            </div>
                        </ClickAwayListener>
                    )
            }
        </>


    )
}