// pages/[id].js
"use client";
import Footer from "../../components/footer";
import DetailContent from "../../components/detail-content";
import { useEffect, useState } from "react";

export default function Detail({ params }) {
  const id = params.id;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (id) {
      fetch(`/product-detail/api?id=${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DetailContent product={product} />
      <Footer />
    </>
  );
}
