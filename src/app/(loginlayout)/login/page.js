import { loginAction } from "./actions";
import styles from "./login.module.css";

export default function Login() {
  const loginForm = loginAction.bind(null);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>Thông tin đăng nhập</div>
        <div className={styles.loginitem}>
          <form action={loginForm} className={(styles.form, styles.formlogin)}>
            <div className={styles.formfield}>
              <label className="" htmlFor="login-username">
                <span className={styles.user}>Tên đăng nhập</span>
              </label>
              <input
                id="login-username"
                name="username"
                type="text"
                className={styles.forminput}
                placeholder=""
                required
              />
            </div>

            <div className={styles.formfield}>
              <label className="" htmlFor="login-password">
                <span className={styles.lock}>Mật khẩu</span>
              </label>
              <input
                id="login-password"
                name="password"
                type="password"
                className={styles.forminput}
                placeholder=""
                required
              />
            </div>

            <div className={styles.formfield}>
              <input type="submit" value="Đăng nhập"></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
