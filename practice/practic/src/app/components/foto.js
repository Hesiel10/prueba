"use client";

import Image from "next/image";
import style from './foto.module.css';
import { useState, useEffect } from "react";

export function Foto(){
    const [perrito, setPerrito] = useState("/versel.svg");
    const [estado, setEstado] = useState("estado");
    const url = "https://dog.ceo/api/breeds/image/random";

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPerrito(data.message)
            })
    },[]);
    return(
        <div className={style.container}>
            <h1>{estado}</h1>
            <Image src={perrito} width={250} height={250} />
        </div>
    )
}