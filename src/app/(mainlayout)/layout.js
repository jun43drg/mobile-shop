import Header from "./components/header";
import { CartProvider } from "./cart/CartContext";
import NavigationBar from "./navigationBar/NavigationBar";

export default function MainLayout({ children }) {
  return (
    <main>
      <CartProvider>
        <Header />
        <NavigationBar />
        {children}
      </CartProvider>
    </main>
  );
}
