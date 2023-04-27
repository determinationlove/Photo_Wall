import React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useMemoryGameStore from "../../states/useMemoryGameStore";
import Header from "../../component/header";
import Card from "../../component/zustand/card";

export type Props = {};

const MemoryGame = ({}: Props) => {
    const { callPic, cards, IsLoading, flippedCards, coverAllCards } =
        useMemoryGameStore();
    const memoryGameState = useMemoryGameStore.getState();

    useEffect(() => {
        memoryGameState.callPic(memoryGameState);
    }, []);

    useEffect(() => {
        if (flippedCards >= 2) {
            coverAllCards();
        }
    }, [flippedCards]);

    if (IsLoading) {
        return (
            <div className="d-flex flex-column container justify-content-center text-amber-800">
                <h1>貓貓翻牌遊戲</h1>
                <p>遊戲載入中 ...</p>
            </div>
        );
    } else {
        //console.log(cards);
        return (
            <div className="d-flex container-fluid my-3 align-items-center justify-content-center  flex-column">
                <div className=" py-4">
                    <h1>貓貓翻牌遊戲</h1>
                    <Header />
                </div>

                <div className="container d-flex flex-wrap align-items-center justify-content-center">
                    <div className="row row-cols-4 ">
                        {cards.map((card, index) => (
                            <div className="col d-flex align-items-center justify-content-center">
                                <Card
                                    id={card.code + index}
                                    img={card.img}
                                    code={card.code}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default MemoryGame;
