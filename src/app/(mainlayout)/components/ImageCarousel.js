"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./ImageCarousel.module.css";
import Link from "next/link";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
  ]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <Link href={"/product-detail/2"}>
            <img src="/Galaxy-S23-banner.jpg" width={1000} height={350} />
          </Link>
        </div>
        <div className={styles.embla__slide}>
          <Link href={"/product-detail/3"}>
            <img src="/xiaomi-14-banner.jpg" width={1000} height={350} />
          </Link>
        </div>
        <div className={styles.embla__slide}>
          <Link href={"/product-detail/4"}>
            <img src="/oppo-find-n3-banner.webp" width={1000} height={350} />
          </Link>
        </div>
        <div className={styles.embla__slide}>
          <Link href={"/product-detail/1"}>
            <img src="/iphone-15-banner.jpg" width={1000} height={350} />
          </Link>
        </div>
      </div>
    </div>
  );
}
