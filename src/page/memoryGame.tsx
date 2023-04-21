import React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Header from "../component/header";
import Card from "../component/card";

export type Props = {};

const MemoryGame = ({}: Props) => {
    const [Data, setData] = useState<any>();
    const [cards, setCards] = useState<any[]>([]);
    const [IsLoading, setIsLoading] = useState<any>(true);
    const apiKey = process.env.REACT_APP_API_KEY;

    const [flippedCards, setFlippedCards] = useState<any[]>(["0"]);

    let totalCard = 12;

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(
                    "https://api.thecatapi.com/v1/images/search?limit=6",
                    {
                        headers: { "x-api-key": `${apiKey}` },
                    }
                );
                setData(res.data);
                await getData(res.data);
            } catch (error) {
                console.log("涼涼");
            }
        }

        fetchData();
    }, []);

    // 裝填空卡片
    async function getData(data: any) {
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
            cards.push(
                <Card
                    img={data[i].url}
                    code={data[i].id}
                    onFlip={checkOnFlip}
                />
            );
            cards.push(
                <Card
                    img={data[i].url}
                    code={data[i].id}
                    onFlip={checkOnFlip}
                />
            );

            loadingImages.push(loadImage(data[i].url));
        }

        // 等待圖片都載入再繼續執行
        await Promise.all(loadingImages);

        let tempCards = [...cards];
        // 打亂陣列
        for (let i = tempCards.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [tempCards[i - 1], tempCards[j]] = [tempCards[j], tempCards[i - 1]];
        }

        setCards(tempCards); // 設定最終卡片陣列
        setIsLoading(false); // 載入完成
    }

    // 檢查翻開的卡片是否一樣
    function checkOnFlip(cardId: string) {
        setFlippedCards(prevFlippedCards => [...prevFlippedCards, cardId]);
    }

    useEffect(() => {
        console.log(flippedCards);
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
                        {cards.map((card) => (
                            <div className="col d-flex align-items-center justify-content-center">
                                {card}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default MemoryGame;
