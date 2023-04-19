var form = document.querySelector("#contact-form");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var phoneInput = document.querySelector("#phone");
var resultDiv = document.querySelector("#result");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn gửi form đi

    // Kiểm tra tên
    if (nameInput.value.trim() === "") {
        alert = "<p id='error'>Vui lòng nhập tên của bạn.</p>";
        return;
    }

    // Kiểm tra email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var email = emailInput.match(emailPattern);
    if (email) {
        alert = "<p id='error'>Email không hợp lệ.</p>";
        return;
    }

    // Kiểm tra số điện thoại
    var phonePattern = /^[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
    var phone = phoneInput.match(phonePattern);
    if (phone) {
        alert = "<p id='error'>Số điện thoại không hợp lệ.</p>";
        return;
    }

    // Nếu tất cả đều đúng, hiển thị thông báo gửi thành công
    resultDiv.innerHTML = "<p>Gửi thành công!</p>";
});