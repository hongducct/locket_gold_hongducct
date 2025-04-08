// fakeIP.js
// Created by Hong Duc
var modifiedHeaders = $request.headers;
modifiedHeaders["X-Forwarded-For"] = "103.224.182.1"; // Giả lập IP (có thể thay đổi)
console.log("Fake IP applied:", modifiedHeaders["X-Forwarded-For"]);
$done({ headers: modifiedHeaders });

// ========= Hồng Đức - Updated April 2025 ========= //
