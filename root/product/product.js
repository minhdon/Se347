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
const btnLogin = document.querySelector(".btnLogin-popup");
btnLogin.addEventListener("click", () => {
  window.location.href = "/login/login.html";
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

const addToCarts = document.querySelectorAll(
  ".add-to-cart-icon,.btn-primary-full"
);

const numberOfProduct = document.querySelector(".number-of-product");
let count = 0;
addToCarts.forEach((addToCart) => {
  addToCart.addEventListener("click", (event) => {
    event.preventDefault();
    numberOfProduct.classList.add("active");
    count++;
    numberOfProduct.innerHTML = count;
  });
});

const productListingGrid = document.querySelector(".product-grid-listing");
const Products = productListingGrid.querySelectorAll(".product-card");
const filterGroupType = document.querySelector(".filter-group.type");
const typeButtons = filterGroupType.querySelectorAll("input[type='checkbox']");

const priceRadios = document.querySelectorAll(
  ".filter-group.price input[type='radio']"
);

const getFilterValue = (id) => {
  switch (id) {
    case "type1":
      return "Viên nén";
    case "type2":
      return "Viên sủi";
    case "type3":
      return "Chai";
    default:
      return null;
  }
};

const applyFilters = () => {
  const activeTypeFilters = [];
  typeButtons.forEach((button) => {
    if (button.checked) {
      const value = getFilterValue(button.id);
      if (value) {
        activeTypeFilters.push(value);
      }
    }
  });

  let activePriceFilter = null;
  priceRadios.forEach((radio) => {
    if (radio.checked) {
      activePriceFilter = radio.id;
    }
  });

  Products.forEach((product) => {
    let showProduct = true;

    if (activeTypeFilters.length > 0) {
      const productTypeElement = product.querySelector(".product-type");
      const productTypeText = productTypeElement
        ? productTypeElement.textContent.trim()
        : "";

      if (!activeTypeFilters.includes(productTypeText)) {
        showProduct = false;
      }
    }

    if (showProduct && activePriceFilter) {
      const realPriceElement = product.querySelector(".real-price");
      const realPrice = Number(realPriceElement.textContent);

      if (activePriceFilter === "price1") {
        if (realPrice > 100000) {
          showProduct = false;
        }
      } else if (activePriceFilter === "price2") {
        if (realPrice < 100000 || realPrice > 200000) {
          showProduct = false;
        }
      }
    }

    if (showProduct) {
      product.classList.remove("hidden");
    } else {
      product.classList.add("hidden");
    }
  });
};

typeButtons.forEach((typeButton) => {
  typeButton.addEventListener("change", applyFilters);
});

priceRadios.forEach((priceRadio) => {
  priceRadio.addEventListener("change", applyFilters);
});

// Chạy hàm lọc 1 lần khi tải trang (để áp dụng nếu có filter nào được check sẵn)
applyFilters();
az;
bxcbc;
