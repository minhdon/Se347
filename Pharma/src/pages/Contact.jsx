import { Header } from "../components/header";
import "./Contact.css";
export function Contact() {
  return (
    <>
      <Header />

      <section class="section">
        <i class="fa-solid fa-handshake"></i>
        <h1>CONTACT US</h1>
        <div class="frame">
          <div class="input">
            <div class="input-box">
              <input type="text" required />
              <label for="">Your Name</label>
            </div>

            <div class="input-box">
              <input type="email" required /> <label for="">Email</label>
            </div>

            <div class="input-box">
              <input type="text" required />
              <label for="">Message</label>
            </div>
          </div>
          <button>Contact us</button>
          <div class="contact-info">
            <h2>Contact</h2>
            <p>examle@gmail.com</p>
            <h2>Based in</h2>
            <p>120 Yên Lãng, Đống Đa, Hà Nội</p>
            <img src="/images/120yenlang.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
