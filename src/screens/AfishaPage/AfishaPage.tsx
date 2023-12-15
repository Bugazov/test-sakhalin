import { PageLayout } from "@/shared/ui/page-layout";
import Image from "next/image";
import React from "react";
import afishaImg from "./images/Cover.png";
import styles from "./afisha-page.module.scss";
import { About, Timetable, Location } from "@/entities/Afisha";

export function AfishaPage() {
  return (
    <PageLayout className={styles.main}>
      <div className={styles["wrapper-afisha-img"]}>
        <Image src={afishaImg} fill alt="afisha" />
      </div>
      <Timetable />
      <About />
      <Location />
    </PageLayout>
  );
}
