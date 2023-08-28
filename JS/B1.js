var images = [];
var index = 0;
var soHinh = 3;
var soThuTu = String(index + 1) + '/' + soHinh;
document.getElementById("thu_tu_anh").innerHTML = soThuTu;
for (var i = 0; i < soHinh; i++) {
    images[i] = new Image();
    images[i].src = "../Assignment/Tainguyen/Anh/" + i + ".jpg";
}

function next() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    soThuTu = String(index + 1) + '/' + soHinh;
    document.getElementById("thu_tu_anh").innerHTML = soThuTu;
}

function prev() {
    index--;
    if (index < 0) {
        console.log(images.length);
        index = images.length - 1;
        console.log(index);
    }
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    soThuTu = String(index + 1) + '/' + soHinh;
    document.getElementById("thu_tu_anh").innerHTML = soThuTu;
}

setInterval(() => {
    next();
}, 5000);