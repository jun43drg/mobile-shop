import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksSection}>
        <div>
          <h3>Thông tin và chính sách</h3>
          <ul>
            <li>Tra thông tin bảo hành</li>
            <li>Tra cứu hoá đơn điện tử</li>
            <li>Mua hàng và thanh toán Online</li>
            <li>Trung tâm bảo hành chính hãng</li>
          </ul>
        </div>
        <div>
          <h3>Dịch vụ và thông tin khác</h3>
          <ul>
            <li>Ưu đãi thanh toán</li>
            <li>Quy chế hoạt động</li>
            <li>Chính sách bảo mật thông tin cá nhân</li>
            <li>Chính sách Bảo hành</li>
          </ul>
        </div>
        <div>
          <h3>Tổng đài hỗ trợ miễn phí</h3>
          <ul>
            <li>Gọi mua hàng 1800.9991 (7h30 - 22h00)</li>
            <li>Gọi khiếu nại 1800.9992 (8h00 - 21h30)</li>
            <li>Gọi bảo hành 1800.9993 (8h00 - 21h00)</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Key Pass" />
          <p>
            © 2019 EasyGo Digital Technologies
            <br />
            Copyright All Rights Reserved.
          </p>
        </div>
        <div className={styles.socialMedia}>
          <a href="#">
            <img src="/facebook.png" alt="Facebook" height={20} width={20} />
          </a>
          <a href="#">
            <img src="/linkedin.png" alt="LinkedIn" height={20} width={20} />
          </a>
          <a href="#">
            <img src="/twitter.png" alt="Twitter" height={20} width={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
