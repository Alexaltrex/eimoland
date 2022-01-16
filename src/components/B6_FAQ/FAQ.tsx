import React from "react";
import style from "./faq.module.scss";
import footer from "../../assets/png/footer.png"
import src1 from "../../assets/png/timer-icon-1.png";
import src2 from "../../assets/png/timer-icon-2.png";
import src3 from "../../assets/png/timer-icon-3.png";
import src4 from "../../assets/png/timer-icon-4.png";
import src5 from "../../assets/png/timer-icon-5.png";
import src6 from "../../assets/png/timer-icon-6.png";
import src7 from "../../assets/png/timer-icon-7.png";
import back from "../../assets/png/faq-back.png";
import leftBottom from "../../assets/png/faq-left-bottom.png";
import rightTop from "../../assets/png/faq-right-top.png";
import {Accordion, AccordionDetails} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

export const iconLinks = [
    {src: src1, href: "#"},
    {src: src2, href: "#"},
    {src: src3, href: "#"},
    {src: src4, href: "#"},
    {src: src5, href: "#"},
    {src: src6, href: "#"},
    {src: src7, href: "#"},
];

export const accordions = [
    {
        summary: 'When will the game be launched',
        details: "We plan to start developing the game in January 2022. It’s impossible to start before the first NFT collection of Dwarves Elders is ready. Characters are the basis of the game. But we have already completed the preliminary concept and architecture of the game. We will present the roadmap at the end of Q1 2022."
    },
    {
        summary: "What genre will the game be in",
        details: "We want to make a hybrid of a full-fledged MMORPG and PLAY-2-EARN. We have many amazing ideas of social and economic interaction. The possibilities of blockchain and NFT technology open the doors to a new world and provide opportunities that are difficult to realize today."
    },
    {
        summary: "On which blockchain will the game be made?",
        details: "Internet Computer Protocol (DFINITY). At the beginning, we will use IC (DFINITY) technologies only to identify game assets and for moving them from user to user. At some point we will be fully deployed on IC (DFINITY)."
    },
    {
        summary: "Why did you choose blockchain IC (DFINITY)?",
        details: "There are no other qualified alternatives for several reasons:\n" +
            "\n" +
            "- if you want to make a full-fledged game with good graphics — It is the only capable system that can carry the huge files of our game. Look at the current cost of 1Gb/year from other blockchains and you can understand our reasoning.\n" +
            "\n" +
            "- we want to make a game for the masses. Thanks to the reverse gas system, a new player may not even know how the game is on the blockchain.In order to make a game on any other blockchain it requires a gas fee and in order to pay for them, you need to own a cryptocurrency. As you can see it would be a huge problem for a player to go through this process by themselves that is new to the wide community."
    },
    {
        summary: "Is Eimolad a Metaverse?",
        details: "Yes and no. A lot of projects launch their own Metaverse. They sell plots of land for a lot of money. But what is Metaverse today? I would call it a MetaDesert. It’s like a blockchain without apps. We want to fix this and create MetaHeroes that can populate in any Metaverse. As we have already stated, NFT technology pushes the boundaries of the world we are used to another level."
    },
    {
        summary: "We have seen that Dwarves Elders have two special skills. Will other races have similar skills?",
        details: "Yes, of course! When all the collections are ready, the players will have to make a very difficult choice of which character to develop on. The truth is that it is advisable to unite in communities that include different races.\n" +
            "\n" +
            "But here it is important to know one detail: later, when the game is fully ready and widely spread, we will provide the opportunity to create a character of any race for free. 2500 characters is too small for one race. But these new characters will not be the same as in the first collection. They won’t have the CRAFT skill and they will be called simply Dwarves. It will be the same with other races."
    },
    {
        summary: "Can you tell us more about the game mechanics?",
        details: "As we stated before, we have thought through the architecture of the game. We can only tell you in general terms. It will be a game where the characters alone or in a group participate in battles against monsters, bosses or each other. The character’s characteristics will depend on his level and equipment. As a result of the activity, the character will earn money and ingredients that will be required to create equipment and other game actions. Each race will have its own skill tree and racial traits."
    },
]


export const FAQ = () => {
    const [expandedIndex, setExpandedIndex] = React.useState<null | number>(null);
    const onChangeHandler = (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpandedIndex(index);
    };


    return (
        <section className={style.faq}
        >
            <img src={back} alt="" className={style.blur}/>

            <div className={style.top}>
                <div className={style.inner}>
                    <p className={style.title}>
                        QUESTION & ANSWER
                    </p>
                    <div className={style.accordionWrapper}>
                        <img src={leftBottom} alt="" className={style.leftBottom}/>
                        <img src={rightTop} alt="" className={style.rightTop}/>
                        <div className={style.inner}>
                            {
                                accordions.map(({summary, details}, index) => (
                                    <Accordion key={index}
                                               expanded={expandedIndex === index}
                                               onChange={onChangeHandler(index)}
                                               sx={{
                                                   background: "transparent",
                                                   boxShadow: "none",
                                                   minHeight: 0,
                                                   "&:not(:first-child)": {
                                                       marginTop: "20px"
                                                   }
                                               }}
                                    >
                                        <AccordionSummary
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                            sx={{
                                                padding: 0,
                                                fontFamily: "Overlock",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "24px",
                                                lineHeight: '160%',
                                                letterSpacing: "0.01em",
                                                transition: "0.3s",
                                                minHeight: "0!important",
                                                "& .MuiAccordionSummary-content": {
                                                    margin: "0!important",
                                                    color: expandedIndex === index ? "#CF5929" : "#FAFAFA",
                                                }
                                            }}
                                        >
                                            {summary}
                                        </AccordionSummary>
                                        <AccordionDetails sx={{
                                            padding: 0,
                                            marginTop: "15px",
                                            fontFamily: "Comfortaa",
                                            fontStyle: "normal",
                                            fontWeight: "300",
                                            fontSize: "18px",
                                            lineHeight: "160%",
                                            letterSpacing: "0.01em",
                                            color: "#B8B8B8",
                                        }}>
                                            {details}
                                        </AccordionDetails>
                                    </Accordion>
                                ))
                            }

                        </div>

                    </div>
                </div>
            </div>

            <footer className={style.footer}>
                <img src={footer} alt="" className={style.img}/>
                <div className={style.links}>
                    {
                        iconLinks.map(({src, href}, index) => (
                            <a className={style.link} href={href} key={index}>
                                <img src={src} alt=""/>
                            </a>
                        ))
                    }
                </div>
            </footer>


        </section>
    )
};