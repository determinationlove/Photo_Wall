import React from "react";
import { useEffect, useRef, useState, useMemo } from "react";
import createCardStore from "../../states/useCardStore";
import { useStore } from "zustand";
import "../../style/custom.css";
import useMemoryGameStore from "../../states/useMemoryGameStore";

export type Props = {
    id: string;
    img: string;
    code: string;
};

const Card = ({ id, img, code }: Props) => {
    const cardStore = useMemo(() => createCardStore(), []); // 創建獨立的 store
    const { isFlip, isClickable, Done, DoneAdd, image, resetCards } =
        useStore(cardStore); // 使用獨立的 store

    const {
        flippedCards,
        flippedCardsPlus,
        flippedCardsID,
        flippedCardsIDPlus,
    } = useMemoryGameStore();

    const cardfront = require("../../assets/logo192.png");
    const cardback = img;

    useEffect(() => {
        //console.log(flippedCardsID);
        if (flippedCards >= 2) {
            for (let i = 0; i < flippedCardsID.length; i++)
                if (flippedCardsID[i] != flippedCardsID[i + 1]) continue;
                else {
                    DoneAdd();
                    console.log(flippedCardsID[i], flippedCardsID[i + 1]);
                    return;
                }

            setTimeout(() => {
                resetCards();
            }, 1000);
        }
    }, [flippedCardsID]);

    const handleClick = () => {
        console.log("flippedCards: ", flippedCards);
        console.log(code);
        if (flippedCards < 2) {
            image();
            flippedCardsPlus();
            flippedCardsIDPlus(code);
        }
    };

    return (
        <div
            id="card"
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
