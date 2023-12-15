import React from 'react'
import Image from "next/image";
import aboutImg from "../images/about_img.png";
import styles from "./about.module.scss"
import { createArray } from '@/shared/utils/create-array';
import Link from 'next/link';
export const About = () => {
  return (
    <div className={styles.about}>
    <h2>О Концерте</h2>
    <div className={styles.description}>
      <p>
        {" "}
        OG Buda выступит с эксклюзивным зимним концертом 15 декабря в
        нижегородском клубе Milo Concert Hall!OG Buda — один из лидеров
        современной волны рэпа в России. Молодой и дерзкий исполнитель, со
        свойственной ему хулиганской харизмой, прямолинейностью и бандитским
        вайбом 90-х, погружает слушателя в свой мир и даёт прочувствовать
        атмосферу вечной борьбы, братства и криминала.Всего за несколько лет
        активной творческой деятельности OG Buda стал фаворитом стриминговых
        чартов и одним из наиболее востребованных артистов в стране. Его
        новый альбом «Скучаю, но работаю» стал настоящим прорывом не только
        для самого музыканта, но и для всей рэп-сцены.На эксклюзивном зимнем
        концерте в Нижнем Новгороде OG Buda исполнит наиболее яркие треки из
        своей последней нашумевшей пластинки, а также главные хиты, столь
        любимые публикой. Ждём всех 15 декабря в клубе Milo Concert Hall!
      </p>

      <Link href="/">Читать далее</Link>
    </div>
    <div className={styles["about-photo"]}>
      {createArray(4).map((item) => {
        return (
          <Image
            key={item}
            src={aboutImg}
            alt="about"
            width={280}
            height={150}
          />
        );
      })}
    </div>

    <div className={styles.info}>
      {createArray(2).map((item)=> {
        return (
          <div key={item} className={styles["info-item"]}>
        <span>Жанры</span>
        <p>Хип-Хоп</p>
      </div>
        )
      })}
    </div>
  </div>
  )
}
