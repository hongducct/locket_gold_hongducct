// Updated Locket_Gold_HongDuc_Fix.js
// Created by Hong Duc
// ========= Đặt ngày tham gia là 08/04/2025 (ngày hiện tại) ========= //
var specificDate = "2025-04-08T00:00:00Z"; // Định dạng ISO 8601, ngày hiện tại theo yêu cầu

// ========= ID Mapping ========= //
const mapping = {
  'Locket': ['Gold'] // Chỉ giữ Locket Gold để đơn giản hóa
};

// ========= Kiểm tra và Khởi tạo ========= //
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];

// Bắt lỗi khi parsing response
try {
  var obj = JSON.parse($response.body);
} catch (e) {
  console.log("Error parsing response body:", e);
  $done({}); // Trả kết quả trống nếu lỗi xảy ra
}

// Đảm bảo các key cơ bản tồn tại
if (!obj.subscriber) obj.subscriber = {};
if (!obj.subscriber.entitlements) obj.subscriber.entitlements = {};
if (!obj.subscriber.subscriptions) obj.subscriber.subscriptions = {};

// ========= Tạo thông tin gói Locket Gold ========= //
var hongduc = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-31T23:59:59Z", // Ngày hết hạn lâu dài
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: specificDate,  // Ngày tham gia
  purchase_date: specificDate,          // Ngày mua
  store: "app_store"
};

var hongduc_entitlement = {
  grace_period_expires_date: null,
  purchase_date: specificDate, // Ngày tham gia
  product_identifier: "com.hongducct.locket.premium.yearly",
  expires_date: "2099-12-31T23:59:59Z" // Ngày hết hạn lâu dài
};

// ========= Cố gắng bật âm thanh khi quay video ========= //
obj.video_settings = {
  max_duration: 15,
  allow_audio: true // Thử bật âm thanh
};

// ========= Áp dụng Mapping ========= //
const match = Object.keys(mapping).find(e => ua.includes(e));

if (match) {
  let entitlementKey = mapping[match][0] || "Gold";
  let subscriptionKey = "com.hongducct.locket.premium.yearly";

  obj.subscriber.subscriptions[subscriptionKey] = hongduc;
  obj.subscriber.entitlements[entitlementKey] = hongduc_entitlement;
} else {
  // Gán mặc định nếu không có khớp
  obj.subscriber.subscriptions["com.hongducct.locket.premium.yearly"] = hongduc;
  obj.subscriber.entitlements["Gold"] = hongduc_entitlement;
}

// ========= Thêm thông báo và Log ========= //
obj.Attention = "Chúc mừng bạn Hồng Đức! Đây là module cá nhân, vui lòng không chia sẻ!";
console.log("User-Agent:", ua);
console.log("Final Modified Response:", JSON.stringify(obj, null, 2));

// ========= Trả kết quả cuối cùng ========= //
$done({ body: JSON.stringify(obj) });

// ========= Hồng Đức - Updated April 2025 ========= //
