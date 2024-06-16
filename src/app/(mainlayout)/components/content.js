import Image from "next/image";
import Link from "next/link";
import styles from "../home/page.module.css";
import EmblaCarousel from "./ImageCarousel";

export default function Content() {
  return (
    <>
      <div className={styles.center}>
        <EmblaCarousel />
      </div>

      <div className={styles.grid}>
        <Link href={`/product-detail/${1}`} className={styles.card}>
          <Image src="/iphone-15-pro-max.webp" width={200} height={200} />
          <h2>
            Iphone 15 pro max{" "}
            <span className={styles.price}>Giá: 34.990.000đ </span>
          </h2>
          <ul>
            <li>Chip: Apple A17 Pro 6 nhân</li>
            <li>RAM: 8 GB</li>
            <li>Dung lướng lưu trữ: 256 GB</li>
          </ul>
        </Link>

        <Link href={`/product-detail/${2}`} className={styles.card}>
          <Image src="/samsung-galaxy-s23.webp" width={200} height={200} />
          <h2>
            Samsung Galaxy S23
            <span className={styles.price}>Giá: 25.000.000đ</span>
          </h2>
          <ul>
            <li>Chip: Snapdragon 8 Gen 2</li>
            <li>RAM: 8 GB</li>
            <li>Dung lướng lưu trữ: 256 GB</li>
          </ul>
        </Link>

        <Link href={`/product-detail/${3}`} className={styles.card}>
          <Image src="/xiaomi-14-ultra.jpg" width={200} height={200} />
          <h2>
            Xiaomi 14 Ultra{" "}
            <span className={styles.price}>Giá: 29.999.000đ</span>
          </h2>
          <ul>
            <li>Chip: Snapdragon 8 Gen 3</li>
            <li>RAM: 16 GB</li>
            <li>Dung lướng lưu trữ: 512 GB</li>
          </ul>
        </Link>

        <Link href={`/product-detail/${4}`} className={styles.card}>
          <Image src="/oppo-find-n3.webp" width={200} height={200} />
          <h2>
            OPPO Find N3 <span className={styles.price}>Giá: 41.990.000đ</span>
          </h2>
          <ul>
            <li>Chip: Snapdragon 8 Gen 2</li>
            <li>RAM: 16 GB</li>
            <li>Dung lướng lưu trữ: 512 GB</li>
          </ul>
        </Link>

        <Link href={`/product-detail/${5}`} className={styles.card}>
          <Image src="/realme-11-pro-plus.jpg" width={200} height={200} />
          <h2>
            Realme 11 Pro+ 5G
            <span className={styles.price}>Giá: 13.990.000đ</span>
          </h2>
          <ul>
            <li>Chip: Dimensity 7050</li>
            <li>RAM: 12 GB</li>
            <li>Dung lướng lưu trữ: 512 GB</li>
          </ul>
        </Link>

        <Link href={`/product-detail/${6}`} className={styles.card}>
          <Image src="/vivo-v30-5g.webp" width={200} height={200} />
          <h2>
            Vivo V30 5G <span className={styles.price}>Giá: 13.990.000đ</span>
          </h2>
          <ul>
            <li>Chip: Snapdragon 7 Gen 3</li>
            <li>RAM: 12 GB</li>
            <li>Dung lướng lưu trữ: 512 GB</li>
          </ul>
        </Link>

        <Link href={`/product-detail/${7}`} className={styles.card}>
          <Image src="/red_magic_8_pro_plus.webp" width={200} height={200} />
          <h2>
            Nubia Red Magic 8 Pro
            <span className={styles.price}>Giá: 16.099.000đ</span>
          </h2>
          <ul>
            <li>Chip: Snapdragon 8 Gen 2</li>
            <li>RAM: 12 GB</li>
            <li>Dung lướng lưu trữ: 256 GB</li>
          </ul>
        </Link>

        <Link href={`/product-detail/${8}`} className={styles.card}>
          <Image src="/honor-x8b.webp" width={200} height={200} />
          <h2>
            HONOR X8b <span className={styles.price}>Giá: 7.690.000đ</span>
          </h2>
          <ul>
            <li>Chip: Snapdragon 680</li>
            <li>RAM: 8 GB</li>
            <li>Dung lướng lưu trữ: 512 GB</li>
          </ul>
        </Link>
      </div>
    </>
  );
}
