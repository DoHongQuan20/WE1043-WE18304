// tạo biến countdow clock và thiết lập thời gian đém ngược
var countDownDate = new Date("April 21 2023 00:00:00").getTime();

// cập nhật đếm ngược cứ sau 1 giây
var x = setInterval(function() {

    // lấy ngày giờ hiện tại
    var now = new Date().getTime();

    // tính khoảng cách từ bây giờ đến ngày đếm ngược
    var distance = countDownDate - now;

    // tính toán ngày, giờ, phút và giây
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // hiển thị kết quả trong HTML
    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";

    // nếu đếm ngược kết thúc, hiển thị "EXPIRED" và xóa khoảng thời gian
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "0d ";
        document.getElementById("hours").innerHTML = "0h ";
        document.getElementById("minutes").innerHTML = "0m ";
        document.getElementById("seconds").innerHTML = "0s ";
    }
}, 1000);