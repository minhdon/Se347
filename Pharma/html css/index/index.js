// const wrapper = document.querySelector(".wrapper");
// const loginLink = document.querySelector(".login-link");
// const registerLink = document.querySelector(".register-link");
// const btnLoginPopup = document.querySelector(".btnLogin-popup");
// const iconClose = document.querySelector(".icon-close");

// // Xử lý sự kiện khi nhấn vào link "Register"
// registerLink.addEventListener("click", (event) => {
//   event.preventDefault();
//   wrapper.classList.add("active");
// });

// // Xử lý sự kiện khi nhấn vào link "Login" (từ form đăng ký)
// loginLink.addEventListener("click", (event) => {
//   event.preventDefault();
//   wrapper.classList.remove("active");
// });

// // Xử lý sự kiện khi nhấn vào nút "Login" trên header
// btnLoginPopup.addEventListener("click", () => {
//   wrapper.classList.add("unhidden");
// });

// // Xử lý sự kiện khi nhấn vào nút đóng (dấu X)
// iconClose.addEventListener("click", () => {
//   wrapper.classList.remove("unhidden");
//   wrapper.classList.remove("active");
// });

let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  let scrollTop = this.window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }
  //Cap nhat lai vi tri cuon cuoi cung
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.addEventListener("DOMContentLoaded", () => {
  // === THAY ĐỔI DUY NHẤT LÀ DÒNG NÀY ===
  const slide = document.querySelector(".why-choice-slide");
  // ===================================

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // --- Cài đặt ---
  // Kích thước 1 box (200px) + lề 2 bên (10px * 2)
  const boxWidth = 620;
  let currentStep = 1; // Bắt đầu ở step 1 (box 1, 2 thật)
  let isMoving = false;

  // --- Hàm ---

  // 1. Hàm di chuyển slide
  function moveSlide() {
    slide.style.transition = "transform 0.5s ease-in-out";
    slide.style.transform = `translateX(${-boxWidth * currentStep}px)`;
  }

  // 2. Hàm xử lý "nhảy" (jump) khi lặp
  function handleLoop() {
    isMoving = false; // Kết thúc di chuyển

    // Nếu đang ở step 5 (clone 1, 2)
    if (currentStep === 5) {
      slide.style.transition = "none"; // Tắt transition
      currentStep = 1; // Nhảy về step 1 (box 1, 2 thật)
      slide.style.transform = `translateX(${-boxWidth * currentStep}px)`;
    }

    // Nếu đang ở step 0 (clone 4, 1)
    if (currentStep === 0) {
      slide.style.transition = "none"; // Tắt transition
      currentStep = 4; // Nhảy về step 4 (box 4, 1 thật)
      slide.style.transform = `translateX(${-boxWidth * currentStep}px)`;
    }
  }

  // --- Khởi tạo ---

  // 1. Tắt transition và đặt vị trí ban đầu
  slide.style.transition = "none";
  slide.style.transform = `translateX(${-boxWidth * currentStep}px)`;

  // 2. Bật lại transition sau một khoảng trễ
  setTimeout(() => {
    slide.style.transition = "transform 0.5s ease-in-out";
  }, 50);

  // --- Gán sự kiện ---

  nextBtn.addEventListener("click", () => {
    if (isMoving) return;
    isMoving = true;
    currentStep++;
    moveSlide();
  });

  prevBtn.addEventListener("click", () => {
    if (isMoving) return;
    isMoving = true;
    currentStep--;
    moveSlide();
  });

  // Lắng nghe sự kiện khi transition kết thúc
  slide.addEventListener("transitionend", handleLoop);
});

// Lấy các phần tử bằng ID đã thêm
const productLink = document.getElementById("product");
const listProductDropdown = document.getElementById("listProduct");

let mouseLeaveTimer;
const ACTIVE_CLASS = "active";

if (productLink && listProductDropdown) {
  // --- HIỂN THỊ DROPDOWN (mouseenter) ---

  // 1. Khi di chuột vào liên kết Product
  productLink.addEventListener("mouseenter", () => {
    // Xóa bất kỳ lệnh ẩn nào đang chờ thực hiện
    clearTimeout(mouseLeaveTimer);
    listProductDropdown.classList.add(ACTIVE_CLASS);
  });

  // 2. Khi di chuột vào vùng dropdown
  listProductDropdown.addEventListener("mouseenter", () => {
    // Xóa bất kỳ lệnh ẩn nào đang chờ thực hiện
    clearTimeout(mouseLeaveTimer);
    listProductDropdown.classList.add(ACTIVE_CLASS);
  });

  // --- ẨN DROPDOWN (mouseleave) ---

  // 1. Khi di chuột rời khỏi liên kết Product
  productLink.addEventListener("mouseleave", () => {
    // Thiết lập timer để ẩn sau 100ms.
    // Nếu chuột kịp thời vào listProductDropdown, timer sẽ bị hủy.
    mouseLeaveTimer = setTimeout(() => {
      listProductDropdown.classList.remove(ACTIVE_CLASS);
    }, 100); // 100ms là đủ để chuột di chuyển
  });

  // 2. Khi di chuột rời khỏi vùng dropdown
  listProductDropdown.addEventListener("mouseleave", () => {
    // Thiết lập timer để ẩn sau 100ms.
    mouseLeaveTimer = setTimeout(() => {
      listProductDropdown.classList.remove(ACTIVE_CLASS);
    }, 100);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // === THAY ĐỔI DUY NHẤT LÀ DÒNG NÀY ===
  const slide = document.querySelector(".feedback-slide");
  // ===================================

  const prevBtn = document.getElementById("fb-prevBtn");
  const nextBtn = document.getElementById("fb-nextBtn");

  // --- Cài đặt ---
  // Kích thước 1 box (200px) + lề 2 bên (10px * 2)
  const boxWidth = 720;
  let currentStep = 1; // Bắt đầu ở step 1 (box 1, 2 thật)
  let isMoving = false;

  // --- Hàm ---

  // 1. Hàm di chuyển slide
  function moveSlide() {
    slide.style.transition = "transform 0.5s ease-in-out";
    slide.style.transform = `translateX(${-boxWidth * currentStep}px)`;
  }

  // 2. Hàm xử lý "nhảy" (jump) khi lặp
  function handleLoop() {
    isMoving = false; // Kết thúc di chuyển

    // Nếu đang ở step 5 (clone 1, 2)
    if (currentStep === 5) {
      slide.style.transition = "none"; // Tắt transition
      currentStep = 1; // Nhảy về step 1 (box 1, 2 thật)
      slide.style.transform = `translateX(${-boxWidth * currentStep}px)`;
    }

    // Nếu đang ở step 0 (clone 4, 1)
    if (currentStep === 0) {
      slide.style.transition = "none"; // Tắt transition
      currentStep = 4; // Nhảy về step 4 (box 4, 1 thật)
      slide.style.transform = `translateX(${-boxWidth * currentStep}px)`;
    }
  }

  // --- Khởi tạo ---

  // 1. Tắt transition và đặt vị trí ban đầu
  slide.style.transition = "none";
  slide.style.transform = `translateX(${-boxWidth * currentStep}px)`;

  // 2. Bật lại transition sau một khoảng trễ
  setTimeout(() => {
    slide.style.transition = "transform 0.5s ease-in-out";
  }, 50);

  // --- Gán sự kiện ---

  nextBtn.addEventListener("click", () => {
    if (isMoving) return;
    isMoving = true;
    currentStep++;
    moveSlide();
  });

  prevBtn.addEventListener("click", () => {
    if (isMoving) return;
    isMoving = true;
    currentStep--;
    moveSlide();
  });

  // Lắng nghe sự kiện khi transition kết thúc
  slide.addEventListener("transitionend", handleLoop);
});

const map = document.getElementById("footer-location");
map.addEventListener("click", () => {
  window.location.href =
    "https://www.google.com/maps/place/120+P.Y%C3%AAn+L%C3%A3ng,+Th%E1%BB%8Bnh+Quang,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i+100000,+Vietnam/@21.0101303,105.8127533,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ac9d65911ef1:0x6a4df45cca423e18!8m2!3d21.0101303!4d105.8153282!16s%2Fg%2F11xzq7y1bt?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D";
});
const LoginLink = document.querySelector(".btnLogin-popup");
LoginLink.addEventListener("click", () => {
  window.location.href = "/login/login.html";
});
