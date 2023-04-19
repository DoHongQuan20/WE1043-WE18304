let slideIndex = 1;
showSlides(slideIndex);

// Hàm plusSlides(n) được sử dụng để di chuyển slide tương đối.
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Hàm currentSlide(n) được sử dụng để hiển thị slide được chỉ định.
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Hàm showSlides(n) được sử dụng để hiển thị slide.
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Nếu slideIndex lớn hơn số lượng slide, đặt slideIndex về 1.
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Nếu slideIndex nhỏ hơn 1, đặt slideIndex bằng số cuối cùng trong slide.
    if (n < 1) {
        slideIndex = slides.length;
    }


    // Ẩn tất cả các slide.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Xóa lớp "active" khỏi tất cả các chấm.
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Hiển thị slide hiện tại bằng cách đặt "display" thành "block".
    slides[slideIndex - 1].style.display = "block";

    // Thêm lớp "active" vào chấm hiện tại để chỉ định slide đang hiển thị.
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}