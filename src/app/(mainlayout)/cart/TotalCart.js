"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function TotalCart() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <h2>
        <Link href="/cart">Giỏ hàng ({totalItems}) </Link>
      </h2>
    </>
  );
}
