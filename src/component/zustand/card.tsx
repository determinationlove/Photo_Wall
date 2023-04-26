import React from "react";
import { useEffect, useRef, useState, useMemo } from "react";
import createCardStore from "../../states/useCardStore";
import { useStore } from "zustand";
import "../../style/custom.css";

export type Props = {
    id: string;
    img: string;
    code: string;
};

const Card = ({ id, img, code }: Props) => {

    const cardStore = useMemo(() => createCardStore(), []); // 創建獨立的 store
    const { isFlip, isClickable, Done, image } = useStore(cardStore); // 使用獨立的 store

    const cardfront = require("../../assets/logo192.png");
    const cardback = img;

    const handleClick = () => {
        console.log("isClickable: ", isClickable);
        console.log(img);
        image();
    };

    return (
        <div
            className={`card align-items-center justify-content-center col m-2 shadow-sm overflow-hidden
                  bg-image hover-zoom ${Done ? "d-none" : "d-flex"}`}
            style={{ maxWidth: "10rem", height: Done ? "0" : "14rem" }}
            onMouseDown={() => (isClickable ? handleClick() : "")}
        >
            <img
                src={isFlip ? cardback : cardfront}
                alt=""
                className="w-100"
                style={{ height: Done ? "0" : "fit-content" }}
            />
        </div>
    );
};

export default Card;
