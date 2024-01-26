"use client";

import Image from "next/image";
import style from './pokemon.module.css';
import { useState, useEffect } from "react";

export function Pokelist(){
    const [poke, setPoke]=useState("/vercel.svg");
    const [estado, setEstado] = useState("esperando");
    const [habilidad, setHabilidad] = useState("habilidad")
    const url="https://pokeapi.co/api/v2/pokemon/ditto";
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPoke(data.sprites.front_default),
            setEstado(data.species.name),
            setHabilidad(data.moves[0].move.name)
        });
    },[]);
    return(
        <div className={style.container}>
            <h1>{estado}</h1>
            <h1>{habilidad}</h1>
            <Image src={poke} width={250} height={250} />
        </div>
    )
}