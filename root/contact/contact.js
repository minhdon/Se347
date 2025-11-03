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

const homePage = document.getElementById("logo");
homePage.addEventListener("click", () => {
  window.location.href = "/index/index.html";
});

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
const btnLogin = document.querySelector(".btnLogin-popup");
btnLogin.addEventListener("click", () => {
  window.location.href = "/login/login.html";
});
