// index.js

/**
 * Xử lý logic ẩn/hiện header khi cuộn.
 * @param {HTMLElement} headerElement - Tham chiếu đến thẻ <header>.
 */
export function initializeHeaderScrollLogic(headerElement) {
  if (!headerElement) return;

  let lastScrollTop = 0;

  const handleScroll = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 50) {
      headerElement.classList.add("header-hidden");
    } else {
      headerElement.classList.remove("header-hidden");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  window.addEventListener("scroll", handleScroll);
  // Quan trọng: Trả về hàm cleanup để React dọn dẹp
  return () => window.removeEventListener("scroll", handleScroll);
}

/**
 * Xử lý logic dropdown menu Product.
 * @param {HTMLElement} productLink - Link Product (id="product").
 * @param {HTMLElement} listProductDropdown - Dropdown menu (id="listProduct").
 */
export function initializeProductDropdownLogic(
  productLink,
  listProductDropdown
) {
  if (!productLink || !listProductDropdown) return;

  let mouseLeaveTimer;
  const ACTIVE_CLASS = "active";

  const show = () => {
    clearTimeout(mouseLeaveTimer);
    listProductDropdown.classList.add(ACTIVE_CLASS);
  };

  const hide = () => {
    mouseLeaveTimer = setTimeout(() => {
      listProductDropdown.classList.remove(ACTIVE_CLASS);
    }, 100);
  };

  productLink.addEventListener("mouseenter", show);
  listProductDropdown.addEventListener("mouseenter", show);
  productLink.addEventListener("mouseleave", hide);
  listProductDropdown.addEventListener("mouseleave", hide);

  return () => {
    productLink.removeEventListener("mouseenter", show);
    listProductDropdown.removeEventListener("mouseenter", show);
    productLink.removeEventListener("mouseleave", hide);
    listProductDropdown.removeEventListener("mouseleave", hide);
    clearTimeout(mouseLeaveTimer);
  };
}

/**
 * Xử lý logic carousel lặp vô hạn (Why Choice và Feedback).
 * @param {string} slideSelector - Selector của slide wrapper.
 * @param {string} prevBtnId - ID nút trước.
 * @param {string} nextBtnId - ID nút kế tiếp.
 * @param {number} boxWidth - Chiều rộng của 1 box.
 */
export function initializeCarouselLogic(
  slideSelector,
  prevBtnId,
  nextBtnId,
  boxWidth
) {
  const slide = document.querySelector(slideSelector);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);

  if (!slide || !prevBtn || !nextBtn) return;

  let currentStep = 1;
  let isMoving = false;

  const moveSlide = () => {
    slide.style.transition = "transform 0.5s ease-in-out";
    slide.style.transform = `translateX(${-boxWidth * currentStep}px)`;
  };

  const handleLoop = () => {
    isMoving = false;
    if (currentStep === 5) {
      slide.style.transition = "none";
      currentStep = 1;
      slide.style.transform = `translateX(${-boxWidth * currentStep}px)`;
    }
    if (currentStep === 0) {
      slide.style.transition = "none";
      currentStep = 4;
      slide.style.transform = `translateX(${-boxWidth * currentStep}px)`;
    }
  };

  // Khởi tạo
  slide.style.transition = "none";
  slide.style.transform = `translateX(${-boxWidth * currentStep}px)`;
  setTimeout(() => {
    slide.style.transition = "transform 0.5s ease-in-out";
  }, 50);

  // Gán sự kiện
  const handleNext = () => {
    if (isMoving) return;
    isMoving = true;
    currentStep++;
    moveSlide();
  };
  const handlePrev = () => {
    if (isMoving) return;
    isMoving = true;
    currentStep--;
    moveSlide();
  };

  nextBtn.addEventListener("click", handleNext);
  prevBtn.addEventListener("click", handlePrev);
  slide.addEventListener("transitionend", handleLoop);

  return () => {
    nextBtn.removeEventListener("click", handleNext);
    prevBtn.removeEventListener("click", handlePrev);
    slide.removeEventListener("transitionend", handleLoop);
  };
}

// Logic chuyển trang (Sử dụng DOM thuần, không khuyến khích trong React)
export function initializeNavigationLogic() {
  const map = document.getElementById("footer-location");
  if (map) {
    const handleMapClick = () => {
      window.location.href =
        "https://www.google.com/maps/place/120+P.Y%C3%AAn+L%C3%A3ng,+Th%E1%BB%8Bnh+Quang,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i+100000,+Vietnam/@21.0101303,105.8127533,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ac9d65911ef1:0x6a4df45cca423e18!8m2!3d21.0101303!4d105.8153282!16s%2Fg%2F11xzq7y1bt?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D";
    };
    map.addEventListener("click", handleMapClick);
    return () => map.removeEventListener("click", handleMapClick); //clear
  }
}
