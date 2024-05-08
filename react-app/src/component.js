import React from "react";
import f3 from "./images/f3.png";
import f4 from "./images/f4.png";
import f5 from "./images/f5.png";

const SectionFirstBlock = ({ imageSrc, title, text }) => {
    return (
        <div className="section-first__container-block">
            <img
                src={imageSrc}
                alt=""
                className="section-first__container-img"
            />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};


const SectionFirstTitle = ({title}) => {
    return (
        <div className="section-firsttitle">
            <h1 className="title animateanimated animatepulse animateinfinite">
                {title}
            </h1>
        </div>
    );
};


const SectionFirst = () => {
    return (
        <section className="section-first">
            <SectionFirstTitle title="Что Вам необходимо?"/>
            <div className="section-first__container">
                <SectionFirstBlock
                    imageSrc={f3}
                    title="Первый блок"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <SectionFirstBlock
                    imageSrc={f4}
                    title="Второй блок"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <SectionFirstBlock
                    imageSrc={f5}
                    title="Третий блок"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
            </div>
        </section>
    );
};

export default SectionFirst;