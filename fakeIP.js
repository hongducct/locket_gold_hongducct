// fakeIP.js
// Created by Hong Duc
// Updated to extend video duration

// Kiểm tra xem đây là request hay response
if ($response) {
  // Xử lý phản hồi từ api.locket-app.com
  try {
    var obj = JSON.parse($response.body);

    // Thêm hoặc chỉnh sửa video settings
    if (!obj.video_settings) obj.video_settings = {};
    obj.video_settings.max_duration = 15; // Tăng thời gian quay lên 15 giây
    obj.video_settings.allow_audio = true; // Đảm bảo bật âm thanh

    console.log("Video settings updated:", JSON.stringify(obj.video_settings));
    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    console.log("Error parsing response body:", e);
    $done({});
  }
} else {
  // Xử lý yêu cầu (giả lập IP như trước)
  var modifiedHeaders = $request.headers;
  modifiedHeaders["X-Forwarded-For"] = "103.224.182.1"; // Giả lập IP
  console.log("Fake IP applied:", modifiedHeaders["X-Forwarded-For"]);
  $done({ headers: modifiedHeaders });
}

// ========= Hồng Đức - Updated April 2025 ========= //
