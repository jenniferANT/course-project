// tránh event mặc định nhấp enter thì reload lại trang
document.querySelector('form[name="frm1"]').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Call the kiemTra() function for form validation
    var isFormValid = kiemTra();

    if (isFormValid) {
        // Form is valid, you can perform additional actions or submit the form
        this.submit(); // Submit the form
    }
});

function kiemTra() {
    var mssv = document.frm1.mssv.value;
    var ht = document.frm1.ht.value;
    var email = document.frm1.email.value;
    var quocTich = document.frm1.quocTich.value;
    var bosung = document.frm1.bosung.value;
    var gioiTinh = document.frm1.gender.value;
    var checkboxes = document.querySelectorAll('input[name="hobby"]:checked');
    var soThich = Array.from(checkboxes).map(function(checkbox) {
        return checkbox.value;
    });
    var loi = "";

    if (mssv.length == 0) {
        loi = loi + "MSSV không được để trống <br>";
        document.frm1.mssv.classList.add("bg-warning");
    }
    if (ht.length <= 0 || ht.length > 30) {
        loi = loi + "Họ tên không được bỏ trống <br>";
        document.frm1.ht.classList.add("bg-warning");
    }
    var s = parseInt(mssv);
    if (email == '') {
        loi = loi + "Email không được để trống<br>";
        document.frm1.email.classList.add("bg-warning");
    }
    if (gioiTinh == '') {
        loi = loi + "Bạn chưa chọn giới tính<br>";
        document.getElementById("gender_input").classList.add("bg-warning");
    }
    if (soThich.length == 0) {
        loi = loi + "Bạn chưa chọn sở thích";
        document.getElementById("hobbies_input").classList.add("bg-warning");
    }
    if (quocTich == 0) {
        loi = loi + "Bạn chưa chọn quốc tịch<br>";
        document.frm1.quocTich.classList.add("bg-warning");
    }
    if (bosung.length < 50 || bosung.length > 1000) {
        loi = loi + "Hãy nhập Thông tin bổ sung ít hơn 200 ký tự";
        document.frm1.bosung.classList.add("bg-warning");
    }

    if (loi.length > 0) {
        document.getElementById("loi").innerHTML = loi;
    }
    return false;
}

/*function ganChuoiRong() {
    document.getElementById("loi").innerHTML = "";
}
setTimeout("ganChuoiRong()", 10000);*/