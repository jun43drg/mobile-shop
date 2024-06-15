// components/detail-content.js
import { useContext, useState } from "react";
import { CartContext } from "../cart/CartContext";
import Image from "next/image";
import styles from "./ShopItem.module.css";
import Link from "next/link";

export default function DetailContent({ product }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  return (
    <>
      <div className={styles.shopItem}>
        <div className={styles.imageWrapper}>
          <Image
            src={product.imageDetail}
            alt={product.name}
            width={660}
            height={400}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.sku}>ID sản phẩm {product.id}</div>
          <h1 className={styles.title}>Điện thoại {product.name}</h1>
          <div className={styles.priceWrapper}>
            <span className={styles.newPrice}>
              Giá: {product.price.toLocaleString("vi")}đ
            </span>
          </div>
          <p className={styles.description}>{product.specs}</p>
          <ul className={styles.description}>
            <li>{product.display}</li>
            <li>{product.operatingSystem}</li>
            <li>{product.rearCamera}</li>
            <li>{product.frontCamera}</li>
            <li>{product.chip}</li>
            <li>{product.ram}</li>
            <li>{product.storage}</li>
            <li>{product.Pin}</li>
          </ul>
          <div className={styles.addToCart}>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className={styles.quantity}
            />
            <button
              className={styles.addToCartButton}
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <Link href="/home">Quay về trang chủ</Link>
      </div>
    </>
  );
}
