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
            Iphone 15 pro max <span>Giá: 34.990.000đ </span>
          </h2>
          <p>Chip: Apple A17 Pro 6 nhân RAM: 8 GB Dung lượng lưu trữ: 256 GB</p>
        </Link>

        <Link href={`/product-detail/${2}`} className={styles.card}>
          <Image src="/samsung-galaxy-s23.webp" width={200} height={200} />
          <h2>
            Samsung Galaxy S23 Ultra<span>Giá: 25.000.000đ</span>
          </h2>
          <p>
            Chip: Snapdragon 8 Gen 2 for Galaxy RAM: 8 GB Dung lượng lưu trữ:
            256 GB
          </p>
        </Link>

        <Link href={`/product-detail/${3}`} className={styles.card}>
          <Image src="/xiaomi-14-ultra.jpg" width={200} height={200} />
          <h2>
            Xiaomi 14 Ultra <span>Giá: 29.999.000đ</span>
          </h2>
          <p>Chip Snapdragon 8 Gen 3 8 nhân RAM: 16 GB Dung lượng: 512 GB</p>
        </Link>

        <Link href={`/product-detail/${4}`} className={styles.card}>
          <Image src="/oppo-find-n3.webp" width={200} height={200} />
          <h2>
            OPPO Find N3 <span>Giá: 41.990.000đ</span>
          </h2>
          <p>Chip Snapdragon 8 Gen 2 8 nhân RAM: 16 GB Dung lượng: 512 GB</p>
        </Link>

        <Link href={`/product-detail/${5}`} className={styles.card}>
          <Image src="/realme-11-pro-plus.jpg" width={200} height={200} />
          <h2>
            Realme 11 Pro+ 5G <span>Giá: 13.990.000đ</span>
          </h2>
          <p>
            Chip MediaTek Dimensity 7050 5G 8 nhân RAM: 12 GB Dung lượng: 512 GB
          </p>
        </Link>

        <Link href={`/product-detail/${6}`} className={styles.card}>
          <Image src="/vivo-v30-5g.webp" width={200} height={200} />
          <h2>
            Vivo V30 <span>Giá: 13.990.000đ</span>
          </h2>
          <p>Chip Snapdragon 7 Gen 3 8 nhân RAM: 12 GB Dung lượng: 512 GB</p>
        </Link>

        <Link href={`/product-detail/${7}`} className={styles.card}>
          <Image src="/red_magic_8_pro_plus.webp" width={200} height={200} />
          <h2>
            Nubia Red Magic 8 Pro Plus <span>Giá: 16.099.000đ</span>
          </h2>
          <p>Chip: Qualcomm Snapdragon 8 Gen 2 RAM: 12 GB Dung lượng: 256 GB</p>
        </Link>

        <Link href={`/product-detail/${8}`} className={styles.card}>
          <Image src="/honor-x8b.webp" width={200} height={200} />
          <h2>
            HONOR X8b <span>Giá: 7.690.000đ</span>
          </h2>
          <p>Chip Snapdragon 680 RAM: 8 GB Dung lượng: 512 GB</p>
        </Link>
      </div>
    </>
  );
}
