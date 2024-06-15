import Header from "./components/header";
import { CartProvider } from "./cart/CartContext";

export default function MainLayout({ children }) {
  return (
    <main>
      <CartProvider>
        <Header />
        {children}
      </CartProvider>
    </main>
  );
}
