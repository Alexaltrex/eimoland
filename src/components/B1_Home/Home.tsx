import React, {useState} from "react";
import style from "./home.module.scss";
import eimoland from '../../assets/png/home-Eimolad.png';
import races from '../../assets/png/home-races.png';
import btn from '../../assets/png/home-button.png';
import btnLeft from '../../assets/png/home-button-left.png';
import btnRight from '../../assets/png/home-button-right.png';
import back from '../../assets/png/home-back.png';
import blur from '../../assets/png/home-blur.png';

export const Home = () => {
    const [show, setShow] = useState(false)

    const onClickHandler = () => {
        setShow(true);
        const id = setTimeout(() => setShow(false), 1000);
    }

    return (
        <section className={style.home} style={{backgroundImage: `url(${back})`}}>
            <div className={style.inner}>
                <img src={eimoland} alt="" className={style.title}/>
                <img src={races} alt="" className={style.races}/>
                <div className={style.btnBlock}>
                    <img src={btnLeft} alt="" className={style.btnAside}/>

                    <div className={style.btnWrapper}>
                        <img src={btn} alt=""/>
                        <button className={style.btn}
                                onClick={onClickHandler}
                        >
                            <span>play now</span>

                            {
                                show &&
                                <p className={style.progress}>In progress...</p>
                            }

                        </button>

                    </div>


                    <img src={btnRight} alt="" className={style.btnAside}/>
                </div>

            </div>
            {/*<img src={blur} alt="" className={style.blur}/>*/}
        </section>
    )
};