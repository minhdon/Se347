import "./index.css";
import { Header } from "../components/header";
// import React, { useEffect } from "react";

// import {
//   initializeCarouselLogic,
//   initializeNavigationLogic, // Cần thêm vào Index nếu bạn muốn xử lý click map ở đây
// } from "./index.js";
// import { Header } from "../components/header.jsx";

// export function Index() {
//   useEffect(() => {
//     return initializeCarouselLogic(
//       ".why-choice-slide",
//       "prevBtn",
//       "nextBtn",
//       620
//     );
//   }, []); // [] đảm bảo chỉ chạy 1 lần sau khi mount

//   // Gọi logic Carousel cho Feedback
//   useEffect(() => {
//     return initializeCarouselLogic(
//       ".feedback-slide",
//       "fb-prevBtn",
//       "fb-nextBtn",
//       720
//     );
//   }, []);

//   // Gọi logic navigation (map) trong useEffect
//   useEffect(() => {
//     return initializeNavigationLogic();
//   }, []);
export function Index() {
  return (
    <>
      <Header />
      <section className="hero" id="hero">
        <img src="/images/anh duoc si.png" alt="" /> {/* Sửa đường dẫn */}
        <div className="content">
          <h1>
            Improving Your Health <br />
            With Medicare
          </h1>
          <p>
            Discover how Medicare can be your trusted partner on your journey
            <br />
            to better health.
          </p>
          <div className="shopping">
            <a href="/product/product.html">Shop Now</a>
            <a href="">Top Product</a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src="/images/logo.png" alt="" /> {/* Sửa đường dẫn */}
        </div>
        <div className="about-pharma-content">
          <p>
            Được thành lập từ năm 2005, Medicare đã có gần 20 năm đồng hành cùng
            sức khỏe cộng đồng. Trải qua thời gian dài phát triển, nhà thuốc
            luôn cam kết cung cấp các loại thuốc tân dược, thực phẩm chức năng
            và thiết bị y tế chính hãng, chất lượng.
          </p>
        </div>
      </section>

      <section className="choice">
        <h1>
          {/* Sửa style */}
          <span style={{ color: "#2b9474" }}>Medicare</span>
          <span> - Lựa chọn số một cho sức khỏe gia đình Việt!</span>
        </h1>
      </section>

      <section className="utility">
        <div className="box box1">
          <i className="fa-solid fa-stethoscope"></i>
          <span>Đội ngũ y bác sĩ giàu kinh nghiệm</span>
          <i className="fa-solid fa-capsules"></i>
          <span>Dược phẩm uy tín hàng đầu</span>
        </div>
        <div className="box box2">
          <i className="fa-solid fa-truck"></i>
          <span>Giao hàng 24/7</span>
          <i className="fa-solid fa-handshake"></i>
          <span>Đội ngũ hỗ trợ tận tâm</span>
        </div>
      </section>

      <section className="why-choice-container" id="why-choice-container">
        <h1>
          <span style={{ color: "#2b9474" }}>Medicare</span>{" "}
          <span style={{ color: "gray" }}>Service</span>
        </h1>
        <section className="why-choice-wrapper">
          <div className="why-choice">
            <div className="why-choice-slide">
              {/* Sửa lỗi <i> và đường dẫn ảnh */}
              <div className="box support">
                <img src="/images/support.png" alt="" />
              </div>

              <div className="doctor-background-img">
                <div className="box doctor">
                  <img src="/images/doctor.png" alt="" />
                </div>
              </div>
              <div className="box medicine">
                <img src="/images/medicine.png" alt="" />
              </div>
              <div className="box delivery">
                <img src="/images/delivery.png" alt="" />
              </div>
              <div className="box support">
                <img src="/images/support.png" alt="" />
              </div>

              <div className="box doctor">
                <img src="/images/doctor.png" alt="" />
              </div>
              <div className="box medicine"></div>
            </div>
          </div>

          <button className="carousel-btn prev-btn" id="prevBtn">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="carousel-btn next-btn" id="nextBtn">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </section>
      </section>

      <section className="certification" id="certification">
        <div className="image">
          <img src="/images/gpp.webp" alt="" /> {/* Sửa đường dẫn */}
        </div>
        <div className="cer-content">
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

      <section className="feedback-container">
        <h1>
          <span style={{ color: "#2b9474" }}>Customers</span>{" "}
          <span style={{ color: "gray" }}>Feedback</span>
        </h1>
        <section className="feedback-wrapper">
          <div className="feedback">
            <div className="feedback-slide">
              <div className="box fb4">
                <p>
                  "Đây là nhà thuốc lớn, luôn có đầy đủ các loại thuốc từ thông
                  thường đến chuyên khoa mà tôi cần, không phải đi tìm nhiều
                  nơi. Giá cả cũng rất hợp lý, minh bạch. Đặc biệt, cách bố trí
                  quầy kệ gọn gàng giúp tôi dễ dàng tìm kiếm sản phẩm."
                </p>
                <h4>Chị Yến Bủm</h4>
              </div>

              <div className="box fb1">
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

              <div className="box fb2">
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
              <div className="box fb3">
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
              <div className="box fb4">
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

              <div className="box fb1">
                <p>
                  "Dược sĩ ở đây rất chuyên nghiệp và tận tâm. Tôi bị cảm và ho
                  kéo dài, được dược sĩ hỏi kỹ về triệu chứng, tiền sử bệnh và
                  tư vấn rất chi tiết về cách dùng thuốc, liều lượng, và cả
                  những lưu ý trong sinh hoạt. Nhờ sự hướng dẫn kỹ lưỡng mà tôi
                  đã đỡ hơn rất nhiều. Cảm ơn nhà thuốc!"
                </p>
              </div>
              <div className="box fb2">
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

          <button className="carousel-btn prev-btn" id="fb-prevBtn">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="carousel-btn next-btn" id="fb-nextBtn">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </section>
      </section>

      <section className="footer">
        <div className="footer-logo">
          {" "}
          <img src="/images/logo.png" alt="" /> {/* Sửa đường dẫn */}
        </div>
        <div className="footer-contact">
          <h1>Medicare-Lựa chọn số một </h1>
          <p id="footer-location">
            <i className="fa-solid fa-location-dot"></i>120 Yên Lãng, Đống Đa,
            Hà Nội
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>0123-456-789
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>example@gmail.com
          </p>
          <div className="line"></div>
          <div className="platform">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="footer-something">
          <div className="about-us">
            <h1>Về chúng tôi</h1>
            <a href="#hero">Trang chủ</a>
            <a href="#about">Tổng quan</a>
            <a href="#why-choice-container">Hoạt động thường ngày</a>
            <a href="#certification">Chứng nhận GPP</a>
          </div>

          <div className="contact-us">
            <h1>Liên hệ</h1>
            <a href="/contact/contact.html">Liên hệ ngay</a>
          </div>
          <div className="product">
            <h1>Sản phẩm</h1>
            <a href="">Thuốc theo đơn</a>
            <a href="">Thuốc không theo đơn</a>
            <a href="">Thực phẩm chức năng</a>
            <a href="">Sản phẩm bán chạy</a>
          </div>
        </div>
      </section>
    </>
  );
}
