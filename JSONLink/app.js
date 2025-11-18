// Đường dẫn đến file JSON gốc của bạn
const jsonFilePath = "http://127.0.0.1:8000/?format=json";
const localStorageKey = "productDataCache"; // Khóa dùng để lưu trữ trong Local Storage
const container = document.getElementById("data-container");

// Hàm hiển thị dữ liệu (chung cho cả cache và dữ liệu mới)
function renderData(data) {
  container.innerHTML = ""; // Xóa nội dung cũ
  if (!data || data.length === 0) {
    container.innerHTML = "<p>Không có dữ liệu để hiển thị.</p>";
    return;
  }

  data.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "product-item";
    itemDiv.innerHTML = `
            <h3>${item.ten}</h3>
            <p>Giá: <strong>${item.gia.toLocaleString("vi-VN")} VND</strong></p>
            <hr>
        `;
    container.appendChild(itemDiv);
  });
}

// Hàm tải dữ liệu từ JSON gốc
async function fetchAndCacheData() {
  try {
    console.log("Đang tải dữ liệu mới từ file JSON gốc...");
    const response = await fetch(jsonFilePath);

    if (!response.ok) {
      // Ném lỗi nếu file JSON gốc bị lỗi (ví dụ: 404 hoặc 500)
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Lưu dữ liệu mới vào Local Storage
    localStorage.setItem(localStorageKey, JSON.stringify(data));
    console.log("Đã lưu dữ liệu mới vào Local Storage.");

    return data;
  } catch (error) {
    console.error("LỖI: Không thể tải file JSON gốc.", error);
    return null; // Trả về null nếu tải thất bại
  }
}

// Hàm chính để ưu tiên Cache
async function initializeData() {
  // 1. Kiểm tra Local Storage
  const cachedData = localStorage.getItem(localStorageKey);

  if (cachedData) {
    try {
      // Sử dụng dữ liệu cache
      const data = JSON.parse(cachedData);
      renderData(data);
      console.log("Đã tải dữ liệu từ Local Storage (cache).");

      // Tùy chọn: Có thể chạy fetchAndCacheData() ở chế độ nền
      // để làm mới cache mà không làm gián đoạn người dùng (Stale-While-Revalidate pattern)
    } catch (e) {
      // Nếu cache bị hỏng (JSON không hợp lệ)
      console.error("Cache bị hỏng, đang cố gắng tải lại từ gốc.");
      localStorage.removeItem(localStorageKey);

      const freshData = await fetchAndCacheData();
      if (freshData) {
        renderData(freshData);
      } else {
        container.innerHTML =
          "<p>Dữ liệu cache bị lỗi và không thể tải file JSON gốc.</p>";
      }
    }
  } else {
    // 2. Không có cache, tải từ JSON gốc
    const freshData = await fetchAndCacheData();
    if (freshData) {
      renderData(freshData);
    } else {
      container.innerHTML =
        "<p>Không thể tải file JSON gốc và không có cache.</p>";
    }
  }
}

initializeData();
