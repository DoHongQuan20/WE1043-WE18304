//querySelector`: đây là một hàm cho phép chúng ta chọn một phần tử trong HTML DOM và trả về phần tử đó.
const slide = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let counter = 0;
const size = slide.children[0].clientWidth;
/*`addEventListener`: hàm này cho phép chúng ta lắng nghe các sự kiện trên một phần tử nhất định. 
Chúng ta có sử dụng sự kiện `click` để bắt sự kiện khi người dùng bấm vào nút "previous" hoặc "next".*/
nextBtn.addEventListener("click", () => {
    if (counter >= slide.children.length - 1) return;
    slide.style.transition = "transform 0.5s ease";
    counter++;
    slide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    slide.style.transition = "transform 0.5s ease";
    counter--;
    slide.style.transform = "translateX(" + (-size * counter) + "px)";
});

slide.addEventListener("transitionend", () => {
    if (slide.children[counter].id === "last-clone") {
        slide.style.transition = "none";
        counter = slide.children.length - 2;
        slide.style.transform = "translateX(" + (-size * counter) + "px)";
    }

    if (slide.children[counter].id === "first-clone") {
        slide.style.transition = "none";
        counter = slide.children.length - counter;
        slide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});
/*`style.transition`: thuộc tính này cho phép bạn thêm hiệu ứng chuyển động vào phần tử HTML bằng cách chỉ định 
 thời gian và đường dẫn chuyển động. Ở đây, chúng ta sử dụng nó để thêm hiệu ứng chuyển động khi trượt ảnh.
`style.transform`: thuộc tính này cho phép chúng ta thay đổi vị trí của phần tử HTML
. Chúng ta sử dụng nó để di chuyển slider sang trái hoặc phải.
`transitionend`: sự kiện này được bắt sự kiện khi hoàn thành một hiệu ứng chuyển động cho phần tử HTML.
 Chúng ta sử dụng sự kiện này để xử lý khi slider đã đến cuối cùng hoặc đầu tiên. */