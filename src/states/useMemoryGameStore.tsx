import { create } from "zustand";
import React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from "../component/zustand/card";
import useCardStore from "./useCardStore";

type MemoryGameState = {
    callPic: (state: MemoryGameState) => Promise<any>;
    getPic: (cards: any, data: any) => void;
    Data: any;
    cards: any[];
    IsLoading: boolean;
    flippedCards: number;
    coverAllCards: () => void;
};

const useMemoryGameStore = create<MemoryGameState>((set, get) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const fetchData = async () => {
        try {
            console.log("fetchData");
            
            const res = await axios.get(
                "https://api.thecatapi.com/v1/images/search?limit=6",
                {
                    headers: { "x-api-key": `${apiKey}` },
                }
            );
            get().getPic(get().cards, res.data);
            set({ Data: res.data });
            set({ IsLoading: false });
        } catch (error) {
            console.log("涼涼 " + error);
        }
    };

    return {
        cards: [],
        callPic: async (state: any) => {
            set({ IsLoading: true });

            await fetchData();

            console.log(useMemoryGameStore.getState().cards);
            return state;
        },

        getPic: (cards: any, data: any) =>
            set((state) => {
                let totalCard = 12;
                let loadingImages = [];

                // 檢查圖片是否都載入
                const loadImage = (url: string) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = url;
                        img.onload = () => resolve(true);
                    });
                };

                // 將請求回來的卡片資料賦值，因為有每張圖片要有2張卡片，所以 push 2次
                for (let i = 0; i < totalCard / 2; i++) {
                    const cardData = {
                        img: data[i].url,
                        code: data[i].id,
                    };

                    state.cards.push(cardData, cardData); // 将 cardData 加入到 state.cards 中
                    loadingImages.push(loadImage(data[i].url));
                }

                Promise.all(loadingImages);
                let tempCards = [...cards];
                // 打亂陣列
                for (let i_1 = tempCards.length; i_1; i_1--) {
                    let j = Math.floor(Math.random() * i_1);
                    [tempCards[i_1 - 1], tempCards[j]] = [
                        tempCards[j],
                        tempCards[i_1 - 1],
                    ];
                }
                set({ cards: tempCards, IsLoading: false });
                return state;
            }),

        Data: null,
        IsLoading: true,
        flippedCards: 0,
        coverAllCards: () => {
            //useCardStore.setState({ isFlip: false });
        },
    };
});

export default useMemoryGameStore;
