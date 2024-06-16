import Link from "next/link";
// import { useState } from "react";
import styles from "./NavigationBar.module.css";

// const NavigationBar = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Thực hiện hành động tìm kiếm, ví dụ: chuyển hướng tới trang kết quả tìm kiếm
//     console.log("Search query:", searchQuery);
//   };
export default function NavigationBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/home">
          <img src="/logo.png" alt="Logo" className={styles.logoImage} />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navLinksItem}>
          <Link href="/home">Home</Link>
        </li>
        <li className={styles.navLinksItem}>
          <Link href="/about">Thông tin</Link>
        </li>
        <li className={styles.navLinksItem}>
          <Link href="/contact">Liên hệ</Link>
        </li>
      </ul>
      <div className={styles.searchContainer}>
        <form>
          <input
            type="text"
            // value={searchQuery}
            // onChange={handleSearchChange}
            placeholder="Tìm kiếm..."
            className={styles.searchInput}
          />
        </form>
        <button type="submit" className={styles.searchButton}>
          Tìm kiếm
        </button>
      </div>
      <div className={styles.notifications}>
        <button className={styles.notificationButton}>🔔</button>
      </div>
    </nav>
  );
}
