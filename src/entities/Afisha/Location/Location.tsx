import React from 'react'
import Image from "next/image";
import map from "../images/map.png";
import styles from "./location.module.scss"
export  function Location() {
  return (
    <div className={styles.location}>
          <h2>Место проведения</h2>
          <div className={styles.address}>
            <p>Milo Concert Hall</p>
            <span>Нижний Новгород, ул. Родионова, 4</span>
          </div>
          <Image src={map} width={800} height={300} alt="map"/>
      </div>
  )
}
