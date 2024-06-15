"use client";
import React from "react";
import styles from "./ShoppingCart.module.css";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import Link from "next/link";

const ShoppingCart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };
  return (
    <div className={styles.shoppingCart}>
      <h2>Shopping Cart</h2>
      <table className={styles.cartTable}>
        <thead>
          <tr>
            <th>Thông tin sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <div className={styles.itemDetails}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <p>{item.name}</p>
                </div>
              </td>
              <td>
                <div className={styles.quantity}>
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
              </td>
              <td>{item.price.toLocaleString("vi")}đ</td>
              <td>
                <button
                  className={styles.removeItem}
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  ×
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.summary}>
        <p>Số lượng hàng: {totalItems}</p>

        <div className={styles.giveCode}>
          <input type="text" placeholder="Enter your code" />
          <button>→</button>
        </div>
        <p className={styles.totalPrice}>
          Tổng giá tiền: {totalPrice.toLocaleString("vi")}đ
        </p>
        <button className={styles.checkout}>Thanh toán</button>
      </div>
      <div>
        <Link href="/home">Quay về trang chủ</Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
