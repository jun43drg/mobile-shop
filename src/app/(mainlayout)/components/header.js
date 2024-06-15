import Link from "next/link";
import Image from "next/image";
import styles from "../home/page.module.css";
import { cookies } from "next/headers";
import TotalCart from "../cart/TotalCart";

export default function Header() {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has("currentuser");
  const currentUser = cookieStore.get("currentuser");

  return (
    <>
      <div className={styles.description}>
        <h2>
          {!hasCookie && <Link href="/login">Đăng nhập</Link>}
          {hasCookie && <Link href="/logout">Đăng xuất</Link>}
        </h2>
        <div>{hasCookie && <label>Xin chào: {currentUser.value}</label>}</div>
        <div>{hasCookie && <TotalCart />}</div>
        <div>
          <Link href="/home">
            <Image
              src="/logo.png"
              alt="Logo"
              className={styles.vercelLogo}
              width={80}
              height={80}
              priority
            />
          </Link>
        </div>
      </div>
    </>
  );
}
