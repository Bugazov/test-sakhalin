import React from 'react'
import styles from "./timetable.module.scss"
export const Timetable = () => {
  return (
    <div className={styles.timetable}>
        <h2 className={styles.title}>Расписание</h2>

        <div className={styles["timetable-item"]}>
          <div className={styles.date}>
            <div className={styles.number}>15</div>
            <div className={styles.month}>
              <span>декабря</span>
              <span>пятница</span>
            </div>
          </div>

          <div className={styles.time}>
            <p>19:00</p>
            <span>от 2 200Р</span>
          </div>

          <div className={styles.time}>
            <p>Milo Concert Hall</p>
            <span>Родионова, 4</span>
          </div>

          <button className={styles.btn}>Купить билеты</button>
        </div>
      </div>
  )
}
