import React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export type Props = {};

const Photos = ({}: Props) => {
    const [Data, setData] = useState<any>();
    const [IsLoading, setIsLoading] = useState<any>(true);
    const apiKey = process.env.REACT_APP_API_KEY;

    let num: number = 20;

    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/images/search?limit=20", { headers: { "x-api-key": `${apiKey}` } }).then((res) => {
            setData(res.data);
            setIsLoading(false);
        });
    }, []);

    if (IsLoading) {
        return (
            <div className="d-flex  container justify-content-center text-amber-800">
                <p>Loading ...</p>
            </div>
        );
    } else {
        return (
            <div className="container py-2">
                <div className="row position-relative">
                    {Data?.map((id: any, index: any) => {
                        return (
                            <div className="col-md-3 py-2">
                                <img src={Data[index].url} className="img-fluid" alt="cat image" />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default Photos;
