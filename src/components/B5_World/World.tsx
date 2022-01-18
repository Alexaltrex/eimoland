import React, {useState} from "react";
import style from "./world.module.scss";
import left from "../../assets/png/world-btn-left.png";
import right from "../../assets/png/world-btn-right.png";
import img1 from "../../assets/png/world1.png";
import img2 from "../../assets/png/world2.png";
import Modal from 'react-modal';
import "./modal.scss";
import modalBack from "../../assets/png/modal-back.png";
import close from "../../assets/png/close.png";
import point from "../../assets/png/world-point.png"

export const World = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className={style.world}>
            <div className={style.inner}>
                <p className={style.title}>World of <span>Eimolad</span></p>
                <div className={style.texts}>
                    <p>
                        The world of Eimolad is a fantasy world populated by races of humans, orcs, dwarves, elves and
                        many
                        other fabulous creatures. This is the world where the elements of Fire, Water, Wind and Earth
                        magic
                        are constantly raging. Here the Gods weave their plots, demons try to escape from the abyss
                        they’ve
                        been caged in and the fragile peace is being continuously interrupted by internecine wars.
                    </p>
                    <p>Here, now and then, the strangest alliances are made in order to deal with various challenges of
                        the
                        world. Unique skill sets of members belonging to different races increase the level of social
                        interaction, the usefulness of joint war campaigns and of trade activity.</p>
                    <p>Orc tribes settle in the North. They are undemanding and strong, yet dull for not acknowledging
                        the
                        importance of progress. Old-timers say that it is blood of demons, the children of pure evil,
                        that
                        runs in their veins. Orcs are the least socially adapted and very inconsistent creatures. In the
                        heat of an argument, an orc can easily kill his colleague or even a fellow tribesman. Their
                        shamans
                        call to chaos and cast all kinds of destructive spells upon the heads of their enemies. Once
                        they
                        smell blood, they easily grow furious and fall into rage which increases the speed and power of
                        their attacks.</p>
                </div>
                <div className={style.btnBlock}>
                    <img src={left} alt=""/>
                    <p onClick={() => setOpen(true)}
                            className={style.button}
                    >
                        Read more
                    </p>
                    <img src={right} alt=""/>
                </div>
                <img src={img1} alt="" className={style.img1}/>
                <img src={img2} alt="" className={style.img2}/>
            </div>
            <Modal isOpen={open}
                   onRequestClose={() => setOpen(false)}
                   className="world-modal"
                   overlayClassName="world-overlay"
            >
                <div className="world-modal-back"
                     style={{backgroundImage: `url(${modalBack})`}}
                />
                <div className="world-modal-mask"
                />

                <p className="world-modal-title">World of <span>Eimolad</span></p>

                <div className="world-modal-close"
                     onClick={() => setOpen(false)}
                >
                    <img src={close} alt=""/>
                </div>

                <div className="world-modal-texts-wrapper">

                    <img src={point} alt="" className="world-modal-texts-point"/>

                    <div className="world-modal-texts">
                        <p>
                            The world of Eimolad is a fantasy world populated by races of humans, orcs, dwarves, elves
                            and many other fabulous creatures. This is the world where the elements of Fire, Water, Wind
                            and Earth magic are constantly raging. Here the Gods weave their plots, demons try to escape
                            from the abyss. They’ve been caged in and the fragile peace is being continuously
                            interrupted by internecine wars.
                        </p>
                        <p>
                            Here in this merciless land, from time to time, the strangest alliances are made in order to
                            deal with various challenges of the world. Unique sets of each race belonging to different
                            races increase the level of social interaction, the usefulness of joint war campaigns and of
                            trade activity.
                        </p>
                        <p>
                            Orc tribes settle in the North. They are undemanding and strong, yet dull for not
                            acknowledging the importance of progress. Old-timers say that it is because the blood of
                            demons, the children of pure evil, that runs in their veins. Orcs are the least socially
                            adapted Creatures. Their actions are very inconsistent. In the heat of an argument, an orc
                            can easily kill his colleague or even a fellow tribesman. Their shamans call to chaos and
                            cast all kinds of destructive spells upon the heads of their enemies. Once they smell blood,
                            they get furious and fall into rage which increases the speed and power of their attacks.
                        </p>
                        <p>
                            The western foothills are inhabited by dwarves, a hardworking and skillful race. Their
                            ancient chronicles keep the location of rare earth elements that are so important for
                            manufacturing weapons, gear and all sorts of sophisticated devices. Their mines are located
                            higher up in the mountains and it is constantly busy. Their workshops always buzz with
                            manufacturing an order coming from a wandering elf or some other daredevil who is going on a
                            long and dangerous journey. Dwarves, despite being short, are incredibly strong and also
                            well-protected by armor, thanks to the superior gear they produce.

                        </p>
                        <p>
                            Humans, once the weakest yet the most ruthless creatures, have conquered most of the Great
                            Eimolad by using their talent on mischief and art of treachery. They have taken sovereignty
                            of the secret knowledge by deceit and have gathered their power in the central part of the
                            country. They are incredibly gifted in using sneaky tricks that helps them hit an enemy in
                            his most vulnerable spots causing critical damage even to a superior opponent.. Humans
                            control the main transit routes between the locations of the Great Eimolad. As a result they
                            have the control of income and enormous power.
                        </p>
                        <p>
                            Elves, the first-born race, are the descendants of the Goddess Ierel. They have a close
                            connection with nature and all the magical elements. Moreover, elves are extremely skilled
                            at making all kinds of miraculous potions while also being incredibly fast and dexterous.
                            Their bards appeal to nature and to the Gods which encourage their warriors and to sustain
                            their life force. The elves’ unparalleled supremacy and domination have gone down to flames
                            the moment their main Artifact got lost. An insidious princess from the human race deceived
                            the Elf King by using his arrogant pride and stole the Artifact. Afterwards, humans
                            destroyed it. through this they discovered the secret knowledge which causes the current
                            imbalance of the world and set the dark forces free. So elves, as a noble race, couldn’t
                            stand this humiliation and by covering themselves with the Wind magic, escaped into the
                            southern fertile lands.
                        </p>
                    </div>
                </div>

            </Modal>

        </section>
    )
};