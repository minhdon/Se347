import styles from "./HomePage.module.css";
import { Header } from "../components/header.jsx";
import React, { useEffect } from "react";
import { Footer } from "../components/footer.jsx";

import { initializeCarouselLogic, initializeNavigationLogic } from "./index.js";

export function Index() {
  useEffect(() => {
    return initializeCarouselLogic(
      ".why-choice-slide",
      "prevBtn",
      "nextBtn",
      620
    );
  }, []);

  useEffect(() => {
    return initializeCarouselLogic(
      ".feedback-slide",
      "fb-prevBtn",
      "fb-nextBtn",
      720
    );
  }, []);

  useEffect(() => {
    return initializeNavigationLogic();
  }, []);

  return (
    <>
      <Header />
      <section className={styles.hero} id="hero">
        <img src="/images/anh duoc si.png" alt="" /> {/* Sửa đường dẫn */}
        <div className={styles.content}>
          <h1>
            Improving Your Health <br />
            With Medicare
          </h1>
          <p>
            Discover how Medicare can be your trusted partner on your journey
            <br />
            to better health.
          </p>
          <div className={styles.shopping}>
            <a href="/product/product.html">Shop Now</a>
            <a href="">Top Product</a>
          </div>
        </div>
      </section>

      <section className={styles.about} id="about">
        <div className={styles["about-img"]}>
          <img src="/images/logo.png" alt="" /> {/* Sửa đường dẫn */}
        </div>
        <div className={styles["about-pharma-content"]}>
          <p>
            Được thành lập từ năm 2005, Medicare đã có gần 20 năm đồng hành cùng
            sức khỏe cộng đồng. Trải qua thời gian dài phát triển, nhà thuốc
            luôn cam kết cung cấp các loại thuốc tân dược, thực phẩm chức năng
            và thiết bị y tế chính hãng, chất lượng.
          </p>
        </div>
      </section>

      <section className={styles.choice}>
        <h1>
          {/* Sửa style */}
          <span style={{ color: "#2b9474" }}>Medicare</span>
          <span> - Lựa chọn số một cho sức khỏe gia đình Việt!</span>
        </h1>
      </section>

      <section className={styles.utility}>
        <div className={`${styles.box} ${styles.box1}`}>
          <i className="fa-solid fa-stethoscope"></i>
          <span>Đội ngũ y bác sĩ giàu kinh nghiệm</span>
          <i className="fa-solid fa-capsules"></i>
          <span>Dược phẩm uy tín hàng đầu</span>
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <i className="fa-solid fa-truck"></i>
          <span>Giao hàng 24/7</span>
          <i className="fa-solid fa-handshake"></i>
          <span>Đội ngũ hỗ trợ tận tâm</span>
        </div>
      </section>

      <section
        className={styles["why-choice-container"]}
        id="why-choice-container"
      >
        <h1>
          <span style={{ color: "#2b9474" }}>Medicare</span>{" "}
          <span style={{ color: "gray" }}>Service</span>
        </h1>
        <section className={styles["why-choice-wrapper"]}>
          <div className={styles["why-choice"]}>
            <div className={styles["why-choice-slide"]}>
              {/* Sửa lỗi <i> và đường dẫn ảnh */}
              <div className={`${styles.box} ${styles.support}`}>
                <img src="/images/support.png" alt="" />
              </div>

              <div className={styles["doctor-background-img"]}>
                <div className={`${styles.box} ${styles.doctor}`}>
                  <img src="/images/doctor.png" alt="" />
                </div>
              </div>
              <div className={`${styles.box} ${styles.medicine}`}>
                <img src="/images/medicine.png" alt="" />
              </div>
              <div className={`${styles.box} ${styles.delivery}`}>
                <img src="/images/delivery.png" alt="" />
              </div>
              <div className={`${styles.box} ${styles.support}`}>
                <img src="/images/support.png" alt="" />
              </div>

              <div className={`${styles.box} ${styles.doctor}`}>
                <img src="/images/doctor.png" alt="" />
              </div>
              <div className={`${styles.box} ${styles.medicine}`}></div>
            </div>
          </div>

          <button
            className={`${styles["carousel-btn"]} ${styles["prev-btn"]}`}
            id="prevBtn"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            className={`${styles["carousel-btn"]} ${styles["next-btn"]}`}
            id="nextBtn"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </section>
      </section>

      <section className={styles.certification} id="certification">
        <div className={styles.image}>
          <img src="/images/gpp.webp" alt="" /> {/* Sửa đường dẫn */}
        </div>
        <div className={styles["cer-content"]}>
          <h1>
            <span style={{ color: "#42d673" }}>Medicare</span>{" "}
            <span>Certification</span>
          </h1>
          <p>
            Nhà thuốc chúng tôi tự hào đạt chuẩn GPP . Đây là sự cam kết cao
            nhất về chất lượng và chuyên môn, đảm bảo quý khách hàng luôn nhận
            được thuốc chính hãng, được bảo quản theo tiêu chuẩn nghiêm ngặt.
            Đội ngũ dược sĩ giàu kinh nghiệm của chúng tôi luôn sẵn sàng tư vấn
            tận tâm, giúp quý khách sử dụng thuốc an toàn, hiệu quả, vì lợi ích
            và sức khỏe cộng đồng.
          </p>
        </div>
      </section>

      <section className={styles["feedback-container"]}>
        <h1>
          <span style={{ color: "#2b9474" }}>Customers</span>{" "}
          <span style={{ color: "gray" }}>Feedback</span>
        </h1>
        <section className={styles["feedback-wrapper"]}>
          <div className={styles.feedback}>
            <div className={styles["feedback-slide"]}>
              <div className={`${styles.box} ${styles.fb4}`}>
                <p>
                  "Đây là nhà thuốc lớn, luôn có đầy đủ các loại thuốc từ thông
                  thường đến chuyên khoa mà tôi cần, không phải đi tìm nhiều
                  nơi. Giá cả cũng rất hợp lý, minh bạch. Đặc biệt, cách bố trí
                  quầy kệ gọn gàng giúp tôi dễ dàng tìm kiếm sản phẩm."
                </p>
                <h4>Chị Yến Bủm</h4>
              </div>

              <div className={`${styles.box} ${styles.fb1}`}>
                <p>
                  "Dược sĩ ở đây rất chuyên nghiệp và tận tâm. Tôi bị cảm và ho
                  kéo dài, được dược sĩ hỏi kỹ về triệu chứng, tiền sử bệnh và
                  tư vấn rất chi tiết về cách dùng thuốc, liều lượng, và cả
                  những lưu ý trong sinh hoạt. Nhờ sự hướng dẫn kỹ lưỡng mà tôi
                  đã đỡ hơn rất nhiều. Cảm ơn nhà thuốc!"
                </p>
                <h4>
                  {" "}
                  <img src="/images/boy.png" alt="" />
                  Anh Tin Ngo
                </h4>
              </div>

              <div className={`${styles.box} ${styles.fb2}`}>
                <p>
                  "Tôi luôn tin tưởng mua thuốc và thực phẩm chức năng ở đây vì
                  sản phẩm luôn là hàng mới, chính hãng, hạn sử dụng còn rất xa.
                  Tôi rất yên tâm khi sử dụng sản phẩm cho cả gia đình. Nhà
                  thuốc còn cam kết hoàn tiền nếu phát hiện hàng giả, điều này
                  củng cố niềm tin rất lớn."
                </p>
                <h4>
                  <img src="/images/boy.png" alt="" /> Anh Kiệt Võ
                </h4>
              </div>
              <div className={`${styles.box} ${styles.fb3}`}>
                <p>
                  "Tôi rất hài lòng với thái độ phục vụ của nhân viên. Dù đông
                  khách nhưng các bạn luôn niềm nở, thân thiện, trò chuyện rất
                  gần gũi. Hơn nữa, nhà thuốc có dịch vụ giao hàng tận nhà rất
                  tiện lợi và nhanh chóng. Một trải nghiệm mua hàng tuyệt vời!"
                </p>
                <h4>
                  <img src="/images/boy.png" alt="" />
                  Anh Lực 8 tuổi
                </h4>
              </div>
              <div className={`${styles.box} ${styles.fb4}`}>
                <p>
                  "Đây là nhà thuốc lớn, luôn có đầy đủ các loại thuốc từ thông
                  thường đến chuyên khoa mà tôi cần, không phải đi tìm nhiều
                  nơi. Giá cả cũng rất hợp lý, minh bạch. Đặc biệt, cách bố trí
                  quầy kệ gọn gàng giúp tôi dễ dàng tìm kiếm sản phẩm."
                </p>
                <h4>
                  <img src="/images/girl.png" alt="" />
                  Chị Yến Bủm
                </h4>
              </div>

              <div className={`${styles.box} ${styles.fb1}`}>
                <p>
                  "Dược sĩ ở đây rất chuyên nghiệp và tận tâm. Tôi bị cảm và ho
                  kéo dài, được dược sĩ hỏi kỹ về triệu chứng, tiền sử bệnh và
                  tư vấn rất chi tiết về cách dùng thuốc, liều lượng, và cả
                  những lưu ý trong sinh hoạt. Nhờ sự hướng dẫn kỹ lưỡng mà tôi
                  đã đỡ hơn rất nhiều. Cảm ơn nhà thuốc!"
                </p>
              </div>
              <div className={`${styles.box} ${styles.fb2}`}>
                <p>
                  "Tôi luôn tin tưởng mua thuốc và thực phẩm chức năng ở đây vì
                  sản phẩm luôn là hàng mới, chính hãng, hạn sử dụng còn rất xa.
                  Tôi rất yên tâm khi sử dụng sản phẩm cho cả gia đình. Nhà
                  thuốc còn cam kết hoàn tiền nếu phát hiện hàng giả, điều này
                  củng cố niềm tin rất lớn."
                </p>
              </div>
            </div>
          </div>

          <button
            className={`${styles["carousel-btn"]} ${styles["prev-btn"]}`}
            id="fb-prevBtn"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            className={`${styles["carousel-btn"]} ${styles["next-btn"]}`}
            id="fb-nextBtn"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </section>
      </section>

      <Footer />
    </>
  );
}
