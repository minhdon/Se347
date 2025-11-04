import { Header } from "../components/header";
import styles from "./Contact.module.css";
import { Footer } from "../components/footer";
//trong module css phai dung [] cho các class có tên chưa dấu -

export function Contact() {
  return (
    <>
      <Header />

      <section className={styles.section}>
        {/* Lớp global (Font Awesome) được giữ nguyên */}
        <i className="fa-solid fa-handshake"></i>
        <h1>CONTACT US</h1>
        <div className={styles.frame}>
          <div className={styles.input}>
            <div className={styles["input-box"]}>
              <input type="text" required />
              {/* 'for' được đổi thành 'htmlFor' trong React */}
              <label htmlFor="">Your Name</label>
            </div>

            <div className={styles["input-box"]}>
              <input type="email" required /> <label htmlFor="">Email</label>
            </div>

            <div className={styles["input-box"]}>
              <input type="text" required />
              <label htmlFor="">Message</label>
            </div>
          </div>
          <button>Contact us</button>
          <div className={styles["contact-info"]}>
            <h2>Contact</h2>
            <p>examle@gmail.com</p>
            <h2>Based in</h2>
            <p>120 Yên Lãng, Đống Đa, Hà Nội</p>
            <img src="/images/120yenlang.png" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
