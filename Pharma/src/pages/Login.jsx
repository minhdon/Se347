import styles from "./Login.module.css";

export function Login() {
  return (
    <>
      <main className={styles["login-page-wrapper"]}>
        <section className={styles.image}>
          <img src="/images/PHARMACY CHAINS.png" alt="" />
        </section>
        <section className={styles["hero"]}>
          <div className={styles.logo}>
            <img src="/images/logo.png" alt="" />
          </div>
          <div className={styles.wrapper}>
            <div
              className={`${styles["form-box"]} ${styles.login}`}
              id="login-box"
            >
              <h2>Login</h2>
              <p className={styles["first-p"]}>
                Login to your account <a href="/index/index.html">Medicare</a>
              </p>
              <form className={styles.form} action="">
                <div className={styles["input-box"]}>
                  <span className={styles.icon}>
                    {" "}
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input type="text" id="emailLog" required />
                  <label htmlFor="">Email</label>
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.icon}>
                    <i
                      className={`fa-solid fa-eye ${styles["eye-icon"]}`}
                      id="eye"
                    ></i>
                    <i
                      className={`fa-solid fa-eye-slash ${styles["eye-slash-icon"]}`}
                      id="eye-slash"
                    ></i>
                  </span>

                  <input type="password" id="passwordLog" required />
                  <label>Password</label>
                </div>
                <div className={styles["remember-forgot"]}>
                  <label htmlFor="">
                    <input type="checkbox" />
                    <span style={{ paddingLeft: "5px" }}>Remember me</span>
                  </label>
                  <a href="">Forgot Password?</a>
                </div>
                <button type="submit" className={styles.btn} id="btnLogin">
                  Login
                </button>
                <div className={styles["login-register"]}>
                  <p>
                    Don't have an account?
                    <a
                      href=""
                      className={styles["register-link"]}
                      id="register-link"
                    >
                      Register
                    </a>
                  </p>
                </div>
                <div className={styles.line}>
                  <div className={styles["child-line"]}></div>
                  <p>OR</p>
                  <div className={styles["child-line"]}></div>
                </div>

                <button className={`${styles.btn} ${styles.google}`}>
                  <img src="/images/google.webp" alt="" />
                  <span>Login with Google</span>
                </button>
              </form>
            </div>

            <div
              className={`${styles["form-box"]} ${styles.register}`}
              id="register-box"
            >
              <h2>Register</h2>
              <p className={styles["first-p"]}>
                Create your account for <a href="/index/index.html">Medicare</a>
              </p>
              <form className={styles.form} action="">
                <div className={styles["input-box"]}>
                  <span className={styles.icon}>
                    {" "}
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input type="text" required id="email-res" />
                  <label htmlFor="">Email</label>
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.icon}>
                    <i
                      className={`fa-solid fa-eye ${styles["eye-icon"]}`}
                      id="eye"
                    ></i>
                    <i
                      className={`fa-solid fa-eye-slash ${styles["eye-slash-icon"]}`}
                      id="eye-slash"
                    ></i>
                  </span>
                  <input type="password" id="password-res" required />
                  <label>Password</label>
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.icon}>
                    <i
                      className={`fa-solid fa-eye ${styles["eye-icon"]}`}
                      id="eye"
                    ></i>
                    <i
                      className={`fa-solid fa-eye-slash ${styles["eye-slash-icon"]}`}
                      id="eye-slash"
                    ></i>
                  </span>
                  <input type="password" id="password-res" required />
                  <label>Confirm Password</label>
                </div>

                <div className={styles.agree}>
                  <label htmlFor="">
                    <input type="checkbox" />
                    <span>I agree to the terms & conditions</span>
                  </label>
                </div>
                <button type="submit" className={styles.btn} id="btnRegister">
                  Register
                </button>
                <div className={styles["login-register"]}>
                  <p>
                    Already have an account?
                    <a
                      href="#"
                      className={styles["login-link"]}
                      id="login-link"
                    >
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
