import React, {useState} from "react";
import style from "./features.module.scss";
import race1grey from "../../assets/png/features-1-grey.png";
import race1color from "../../assets/png/features-1-color.png";
import race2grey from "../../assets/png/features-2-grey.png";
import race2color from "../../assets/png/features-2-color.png";
import race3grey from "../../assets/png/features-3-grey.png";
import race3color from "../../assets/png/features-3-color.png";
import race4grey from "../../assets/png/features-4-grey.png";
import race4color from "../../assets/png/features-4-color.png";
import clsx from "clsx";
import leftBottom from "../../assets/png/features-left-bottom.png";
import rightTop from "../../assets/png/features-right-top.png";
import contentBack from "../../assets/png/features-content-back.png";
import skillIconCard from "../../assets/png/features-skill-icon-card.png";
import skillIconMining from "../../assets/png/features-skill-icon-mining.png";
import skillIconCraft from "../../assets/png/features-skill-icon-craft.png";
import {Tooltip, TooltipProps} from "@mui/material";
import styled from "@emotion/styled";
import tooltipClasses from "@mui/material/Tooltip/tooltipClasses";
import storyLeft from "../../assets/png/features-story-left.png";
import storyRight from "../../assets/png/features-story-right.png";
import Modal from "react-modal";
import "./modal.scss";
import close from "../../assets/png/close.png";
import heroesJson from "../../heroes.json";
import oneHandedSword from "../../assets/png/featuresIcons/oneHandedSword.png";
import twoHandedSword from "../../assets/png/featuresIcons/twoHandedSword.png";
import twoHandedAxe from "../../assets/png/featuresIcons/twoHandedAxe.png";
import mace from "../../assets/png/featuresIcons/mace.png";
import strenght from "../../assets/png/featuresIcons/strenght.png";
import dexterity from "../../assets/png/featuresIcons/dexterity.png";
import intelligency from "../../assets/png/featuresIcons/intelligency.png";

import heavyArmor from "../../assets/png/featuresIcons/heavyArmor.png";
import lightArmor from "../../assets/png/featuresIcons/lightArmor.png";
import magicRobe from "../../assets/png/featuresIcons/magicRobe.png";
import shield from "../../assets/png/featuresIcons/shield.png";

import batteryFull from "../../assets/png/featuresIcons/batteryFull.png";
import batteryNotFull from "../../assets/png/featuresIcons/batteryNotFull.png";

import back from "../../assets/png/features-back.png";
import gnome from "../../assets/png/features-gnome.png";
import soon from "../../assets/png/features-soon.png";
import skillsLabel from "../../assets/png/features-skills-label.png";
import featuresLabel from "../../assets/png/features-features-label.png";
import {CustomTooltip} from "./CustomTooltip";
import {BatteryIcon, ValueType} from "./BatteryIcon/BatteryIcon";

const featuresIcons = {
    oneHandedSword,
    twoHandedSword,
    twoHandedAxe,
    mace,
    strenght,
    dexterity,
    intelligency,
    heavyArmor,
    lightArmor,
    magicRobe,
    shield
}

const skillsIcons = {
    mining: skillIconMining,
    craft: skillIconCraft
}

const races = [
    {
        icon_grey: race1grey,
        icon_color: race1color,
        raceName: 'DWARVES'
    },
    {
        icon_grey: race2grey,
        icon_color: race2color,
        raceName: 'HUMANS'
    },
    {
        icon_grey: race3grey,
        icon_color: race3color,
        raceName: 'ELVES'
    },
    {
        icon_grey: race4grey,
        icon_color: race4color,
        raceName: 'ORCS'
    },
];

const tabMenu = [
    "EQUIPMENT",
    "WEAPONS",
    "FEATURES OF THE RACE",
];

export const Features = () => {
    const [selectRaceIndex, setSelectRaceIndex] = useState(0);
    const [tabIndex, setTabIndex] = useState(0);
    const [skillType, setSkillType] = useState("active");

    const [open, setOpen] = useState(false);
    const heroes = JSON.stringify(heroesJson);
    const heroesDB = JSON.parse(heroes)
    const currentHero: any = Object.values(heroesDB)[selectRaceIndex];
    const currentFeature: any = Object.values(currentHero.features)[tabIndex];
    //const currentSkill: any = Object.values(currentHero.skills)[skillType];

    // @ts-ignore
    return (
        <section className={style.features}>
            <div className={style.back}
                 style={{backgroundImage: `url(${back})`}}
            />

            <div className={style.inner}>

                <div className={style.racesItems}>
                    {
                        races.map(({icon_grey, icon_color, raceName}, index) => (
                            <div className={style.racesItem}
                                //onClick={() => setSelectRaceIndex(index)}
                                 key={index}
                                 style={{
                                     cursor: index === 0 ? "pointer" : "not-allowed"
                                 }}
                            >


                                <div className={clsx({
                                    [style.iconWrapper]: true,
                                    [style.iconWrapper_selected]: selectRaceIndex === index,
                                })}
                                >
                                    {index !== 0 &&
                                    <p className={style.disable}>
                                        <p>Coming</p>
                                        <p>soon</p>
                                    </p>
                                    }
                                    {
                                        selectRaceIndex === index
                                            ? <img src={icon_color}
                                                   alt=""
                                                   className={clsx(style.iconSelected, style[`iconSelected${index}`])}
                                                //style={styleSelected[selectRaceIndex]}
                                            />
                                            : <img src={icon_grey}
                                                   alt=""
                                                   className={style.icon}
                                            />
                                    }
                                </div>

                                <p className={clsx({
                                    [style.raceName]: true,
                                    [style.raceName_selected]: selectRaceIndex === index,
                                })}
                                >
                                    {raceName}
                                </p>
                            </div>

                        ))
                    }
                </div>

                <div className={style.middleBlock}>

                    <div className={style.leftBlock}>
                        <img src={selectRaceIndex === 0 ? gnome : gnome} alt="" className={style.hero}/>
                    </div>

                    <div className={style.rightBlock}>
                        <p className={style.title}>FEATURES</p>

                        <div className={style.tabBlockWrapper}>
                            <img src={featuresLabel} alt="" className={style.featuresLabel}/>

                            <div className={style.tabMenu}>
                                {
                                    tabMenu.map((el, index) => (
                                        <p key={index}
                                           className={clsx({
                                               [style.tabMenuItem]: true,
                                               [style.tabMenuItem_selected]: tabIndex === index,
                                           })}
                                           onClick={() => setTabIndex(index)}
                                        >
                                            {el}
                                        </p>
                                    ))
                                }
                            </div>

                            <div className={style.content}>
                                <div className={style.contentBack} style={{backgroundImage: `url(${contentBack})`}}/>
                                <div className={style.mask}/>

                                <div className={style.contentInner}>
                                    <div className={style.inner2}>
                                        {
                                            currentFeature.length
                                                ? (
                                                    <>
                                                        {
                                                            (currentFeature as any[]).map((el, index) => (
                                                                <div className={style.currentFeatureItem} key={index}>


                                                                    <div className={style.iconWrapper}>

                                                                        {
                                                                            tabIndex === 2 &&
                                                                            <>
                                                                                <CustomTooltip
                                                                                    // @ts-ignore
                                                                                    title={el.title}>
                                                                                    <div className={style.toolTip}>?</div>
                                                                                </CustomTooltip>
                                                                            </>
                                                                        }

                                                                        {/*@ts-ignore*/}
                                                                        <img src={featuresIcons[el?.name]} alt=""
                                                                             className={style.icon}/>
                                                                    </div>

                                                                    {
                                                                        tabIndex === 2 &&
                                                                        <BatteryIcon value={Number(el.value) as ValueType}/>
                                                                    }

                                                                    <p>{el.description}</p>
                                                                </div>
                                                            ))
                                                        }
                                                    </>
                                                )
                                                : <p className={style.empty}>Soon...</p>
                                        }
                                    </div>

                                </div>

                                <img src={leftBottom} alt="" className={style.leftBottom}/>
                                <img src={rightTop} alt="" className={style.rightTop}/>
                            </div>

                        </div>


                        <div className={style.skills}>
                            <img src={skillsLabel} alt="" className={style.skillsLabel}/>
                            <div className={style.skillsItems}>
                                {
                                    (Object.values(currentHero.skills) as any[])
                                        .map((el, index) => (
                                            <div className={style.skillsItem} key={index}>
                                                <div className={style.skillsItemIconCard}>
                                                    <img src={skillIconCard} alt=""/>
                                                    {/*@ts-ignore*/}
                                                    <img src={skillsIcons[el.name]} alt=""
                                                         className={style.skillsItemIcon}/>

                                                    <CustomTooltip title={el.description}>
                                                        <div className={style.toolTip}>?</div>
                                                    </CustomTooltip>


                                                </div>
                                                <div className={style.skillName}>
                                                    {el.title}
                                                </div>
                                            </div>
                                        ))
                                }
                                {
                                    [0, 1].map((el) => (
                                        <div className={style.skillsItem} key={el}>
                                            <div className={style.skillsItemIconCard}>
                                                <img src={skillIconCard} alt=""/>
                                                <p className={style.disableText2}>Coming soon</p>
                                                {/*@ts-ignore*/}
                                                {/*<img src={skillsIcons[el.name]} alt="" className={style.skillsItemIcon}/>*/}
                                                <CustomTooltip title="COMING SOON"
                                                >
                                                    <div className={style.toolTip}>?</div>
                                                </CustomTooltip>
                                            </div>
                                            <div className={style.skillName}>
                                                N/A
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className={style.storyBox}>
                            <img src={storyLeft} alt=""/>
                            <p className={style.storyBoxText} onClick={() => setOpen(true)}>Learn more
                                about <span>{currentHero?.name}</span> skills</p>
                            <img src={storyRight} alt=""/>
                        </div>
                    </div>
                </div>

            </div>

            <Modal isOpen={open}
                   onRequestClose={() => setOpen(false)}
                   className="skills-modal"
                   overlayClassName="skills-overlay"
            >
                <p className="skills-modal-title"><span>{currentHero.name}</span> skills</p>

                <div className="skills-modal-menu">
                    {
                        ["active", "passive"]
                            //(Object.values(currentHero.skills) as any[])
                            .map((el, index) => (
                                <div className={clsx({
                                    ["skills-modal-menu-item"]: true,
                                    ["skills-modal-menu-item_selected"]: skillType === el,
                                })}
                                     key={index}
                                     onClick={() => setSkillType(el)}
                                >
                                    {el}
                                </div>
                            ))
                    }
                </div>


                <div className="skills-modal-content">
                    {
                        skillType === "active" &&
                        <div style={{
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            {
                                [
                                    {
                                        name: 'mining',
                                        description: 'Some places of Eimolad are rich in minerals. Dwarves have been able to mine them since ancient times.'
                                    },
                                    {
                                        name: 'craft',
                                        description: 'Dwarves Elders inherited from their ancestors the secrets of Weapon & Equipment Production.'
                                    },
                                ]
                                    .map((el, index) => (
                                        <div key={index} className="skill-block">
                                            <div className="skills-modal-iconBlock">
                                                <div className="skills-modal-iconWrapper">
                                                    <img src={skillIconCard} alt=""
                                                         className="skills-modal-iconWrapper-back"/>
                                                    {/*@ts-ignore*/}
                                                    <img src={skillsIcons[el.name]} alt=""
                                                         className="skills-modal-iconWrapper-icon"/>
                                                </div>
                                                <p className="skills-modal-iconBlock-name">
                                                    {el.name}
                                                </p>

                                            </div>
                                            <div className="skills-modal-description">{el.description}</div>
                                        </div>

                                    ))
                            }
                        </div>
                    }

                    {
                        skillType === "passive" &&
                        <div style={{
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            {
                                [
                                    {
                                        name: 'N/A',
                                        description: ''
                                    },
                                    {
                                        name: 'N/A',
                                        description: ''
                                    },
                                ]
                                    .map((el, index) => (
                                        <div key={index} className="skill-block">
                                            <div className="skills-modal-iconBlock">
                                                <div className="skills-modal-iconWrapper">
                                                    <p>Coming soon</p>
                                                    <img src={skillIconCard} alt=""
                                                         className="skills-modal-iconWrapper-back"/>
                                                    {/*@ts-ignore*/}
                                                    {/*<img src={skillsIcons[el.name]} alt=""*/}
                                                    {/*     className="skills-modal-iconWrapper-icon"/>*/}
                                                </div>
                                                <p className="skills-modal-iconBlock-name">
                                                    {el.name}
                                                </p>

                                            </div>
                                            <div className="skills-modal-description">{el.description}</div>
                                        </div>

                                    ))
                            }
                        </div>
                    }
                </div>


                <div className="skills-modal-close"
                     onClick={() => setOpen(false)}
                >
                    <img src={close} alt=""/>
                </div>
            </Modal>

        </section>
    )
};