var x = "";

function a(id) {
    return document.getElementById(id);
}

function nhap(num) {
    x += num;
    a('phantu').value = x;
}

function xoa() {
    x = "";
    a("phantu").value = x;
}

function dapan1() {
    a('phantu').value = eval(a('phantu').value);
}