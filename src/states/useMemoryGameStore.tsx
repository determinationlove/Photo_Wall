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
    flippedCardsPlus: () => void;
    flippedCardsID: string[];
    flippedCardsIDPlus: (_id: string) => void;
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
            set({ cards: [] });

            await fetchData();

            //console.log(useMemoryGameStore.getState().cards);
            return state;
        },

        getPic: async (cards: any, data: any) => {
            let totalCard = 12;
            let loadingImages: any = [];

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

                cards.push(cardData, cardData); // 将 cardData 加入到 state.cards 中
                loadingImages.push(loadImage(data[i].url));
            }
            await Promise.all(loadingImages);

            // 打亂陣列
            let tempCards = [...cards];
            for (let i = tempCards.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [tempCards[i - 1], tempCards[j]] = [
                    tempCards[j],
                    tempCards[i - 1],
                ];
            }
            console.log("打亂陣列", tempCards);
            set({ cards: tempCards, IsLoading: false });
        },

        Data: null,
        IsLoading: true,
        flippedCards: 0,
        flippedCardsPlus: () =>
            set((state) => ({
                flippedCards: state.flippedCards + 1,
            })),
        flippedCardsID: [],
        flippedCardsIDPlus: (_id: string, callback?: () => void) => {
            set((state) => ({
                flippedCardsID: [...state.flippedCardsID, _id],
            }))
            console.log(useMemoryGameStore.getState().flippedCardsID);
        },
        coverAllCards: () => {
            set(() => ({
                flippedCards: 0,
                flippedCardsID: []
            }));
        },
    };
});

export default useMemoryGameStore;
