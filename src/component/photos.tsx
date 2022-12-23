import React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export type Props = {};

const Photos = ({}: Props) => {
    const [Data, setData] = useState<any>();
    const apiKey = process.env.REACT_APP_API_KEY;

    let num: number = 20;

    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/images/search?limit=20", { headers: { "x-api-key": `${apiKey}` } }).then((res) => {
            setData(res.data);
            //console.log(res.data);
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full h-full min-w-xl columns-3 gap-8 p-12 items-center justify-center">
                {Data?.map((id: any, index: any) => {
                    return <div className="mb-6 items-center justify-center"><img src={Data[index].url} className="shadow-md rounded-sm" alt="cat image" /></div>;
                })}
            </div>
        </div>
    );
};

export default Photos;
