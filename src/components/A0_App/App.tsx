import React, {useState} from 'react';
import style from "./app.module.scss";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Mousewheel, Navigation} from 'swiper';
import {Home} from "../B1_Home/Home";
import {About} from "../B2_About/About";
import {Timer} from "../B3_Timer/Timer";
import {Features} from "../B4_Features/Features";
import {World} from "../B5_World/World";
import {FAQ} from "../B6_FAQ/FAQ";


SwiperCore.use([Navigation, Mousewheel]);

const slides = [
    {
       component: <Home/>,
       slide: Home,
    },
    {
        component: <About/>,
        slide: About,
    },
    {
        component: <Timer/>,
        slide: Timer,
    },
    {
        component: <Features/>,
        slide: Features,
    },
    {
        component: <World/>,
        slide: World,
    },
    {
        component: <FAQ/>,
        slide: FAQ,
    },
];

export const App = () => {

    return (
        <div className={style.app}>

            {/*<Swiper className={style.swiper}*/}
            {/*        direction='vertical'*/}
            {/*        mousewheel={true}*/}
            {/*        slidesPerView={1}*/}
            {/*        spaceBetween={0}*/}
            {/*        allowTouchMove={false}*/}
            {/*        speed={500}*/}
            {/*>*/}
            {/*    {*/}
            {/*        slides.map(*/}
            {/*            ({slide}, index) => (*/}
            {/*                <SwiperSlide className={style.slide}*/}
            {/*                             key={index}*/}
            {/*                >*/}
            {/*                    {slide}*/}
            {/*                </SwiperSlide>*/}
            {/*            )*/}
            {/*        )*/}
            {/*    }*/}
            {/*</Swiper>*/}

            {/*<div className={style.mobileComponents}>*/}
            {/*    */}
            {/*</div>*/}

            <div className={style.components}>
                {
                    slides.map(({component}, index) => (
                        <div key={index}>
                            {component}
                        </div>
                    ))
                }
            </div>


        </div>
    );
}

