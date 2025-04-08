// Updated deleteHeader.js
// Created by Hong Duc
// ========= Header Modification ========= //
const version = 'V1.0.5'; // Cập nhật phiên bản

function setHeaderValue(e, a, d) {
  var r = a.toLowerCase();
  r in e ? e[r] = d : e[a] = d;
}

// Lấy headers hiện tại từ request
var modifiedHeaders = $request.headers;

// Thay đổi giá trị của X-RevenueCat-ETag
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");
setHeaderValue(modifiedHeaders, "X-Locket-Audio", "enabled"); // Thử bật âm thanh

// Debug: In header đã sửa (tuỳ chọn)
console.log("Modified Headers:", JSON.stringify(modifiedHeaders));

// Kết thúc request với header đã sửa đổi
$done({ headers: modifiedHeaders });

// ========= Hồng Đức - Updated April 2025 ========= //
