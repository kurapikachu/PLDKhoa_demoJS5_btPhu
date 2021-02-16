/**BÀI TẬP 1: TÍNH THUẾ THU NHẬP CÁ NHÂN
 * Khối 1:
 * Nhập tên người dùng, tổng thu nhập cá nhân trong năm và số người phụ thuộc
 * 
 * Khối 2:
 * Khai báo biến cho Tên người dùng, tổng thuế thu nhập cá nhân, số người phụ thuộc
 * Khai báo hàm tỉnh tổng thu nhập phải chịu thuế =  Tổng thu nhập năm - 4 - số người phụ thuộc*1.6;
 * So sánh thu nhập chịu thuế với các mức khác nhau để xác định thuế suất:
 * 
 * tnChiuThue <= 60 
 *      tnChiuThue = tnChiuThue*0.05;
 * 
 * tnChiuThue > 60 && tnChiuThue <= 120
 *      tnChiuThue = tnChiuThue*0.1;
 * 
 * tnChiuThue > 120 && tnChiuThue <= 210
 *      tnChiuThue = tnChiuThue*0.15;
 * 
 * tnChiuThue > 210 && tnChiuThue <= 384
 *      tnChiuThue = tnChiuThue*0.2;
 * 
 * tnChiuThue > 384 && tnChiuThue <= 624
 *      tnChiuThue = tnChiuThue*0.25;
 * 
 * tnChiuThue > 624 && tnChiuThue <= 960
 *      tnChiuThue = tnChiuThue*0.3;
 * 
 * tnChiuThue > 960
 *      tnChiuThue = tnChiuThue*0.35;
 * 
 * Khối 3:
 * Xuất ra tổng tiền thuế thu nhập cá nhân người đó phải trả trong năm
 */

// Khai báo hàm tính thu nhập chịu thuế
var tinhThuNhapChiuThue = function (tongThuNhapNam, soNguoiPhuThuoc) {
    tnChiuThue = 0;
    tnChiuThue = tongThuNhapNam - 4 - soNguoiPhuThuoc * 1.6;
    return tnChiuThue;
}
// Khai báo hàm tính thuế năm
var tinhThueNam = function (thuNhapChiuThue) {
    tongThue = 0;
    if (thuNhapChiuThue <= 60) {
        tongThue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
        tongThue = thuNhapChiuThue * 0.1;
    } else if (thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) {
        tongThue = thuNhapChiuThue * 0.15;
    } else if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
        tongThue = thuNhapChiuThue * 0.2;
    } else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
        tongThue = thuNhapChiuThue * 0.25;
    } else if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
        tongThue = thuNhapChiuThue * 0.3;
    } else {
        tongThue = thuNhapChiuThue * 0.35;
    }
    tongThue = tongThue.toFixed(2);
    return tongThue;
}

var ketQua = document.getElementById("ketQua");

ketQua.addEventListener("click", function () {
    var user = document.getElementById("user").value;
    var tongThuNhap = parseFloat(document.getElementById("tongThuNhap").value);
    var nguoiPhuThuoc = parseFloat(document.getElementById("nguoiPhuThuoc").value);
    var tbThue = document.getElementById("tbThue");

    tinhThuNhapChiuThue(tongThuNhap, nguoiPhuThuoc);

    tinhThueNam(tnChiuThue);
    console.log(tnChiuThue, tongThue);
    tbThue.innerHTML = "Tổng thuế " + user + " phải trả là: " + tongThue + " (triệu)";
})

/**BÀI TẬP 2: TÍNH TIỀN CÁP
 *
 * Khối 1:
 * Nhập mã khách hàng, loại khách hàng, số kết nối (nếu là doanh nghiệp), và số kênh cao cấp
 * 
 * Khối 2:
 * Khai báo biến cho mã khách hàng, loại khách hàng, số kết nối, số kênh cao cấp
 * 
 * Tính tổng chi phí:
//  * Nếu là Nhà dân:
    tongChiPhi = 4.5 + 20.5 + 7.5*kenhCaoCap

//  * Nếu là Doanh nghiệp:
    - Số kết nối <= 10: tongChiPhi = 15 + 7.5*soKetNoi + 50*kenhCaoCap
    - Số kết nối > 10: tongChiPhi = 15 + 75 + 5*(soKetNoi-10) + 50*kenhCaoCap
 * 
 * Khối 3:
 * Xuất ra tổng chi phí của khách hàng
 */


//  KHAI BÁO HÀM TÍNH PHÍ CÁP
var tinhChiPhiCap = function (loaiKhachHang,soKetNoi,kenhCaoCap) {
    var tongChiPhi = 0;

    if (loaiKhachHang == "nhaDan") {
        tongChiPhi = 4.5 + 20.5 + 7.5 * kenhCaoCap;
    } else if (loaiKhachHang == "doanhNghiep") {
        if (soKetNoi <= 10) {
            tongChiPhi = 15 + 7.5 * soKetNoi + 50 * kenhCaoCap;
        } else {
            tongChiPhi = 15 + 75 + 5 * (soKetNoi - 10) + 50 * kenhCaoCap;
        }
    }
    return tongChiPhi;
}


// CODE XỬ LÍ
var doanhNghiep = document.getElementById("doanhNghiep");
var nhaDan = document.getElementById("nhaDan");
var ketNoi = document.getElementById("ketNoi");

var loaiKhachHang = "";

nhaDan.addEventListener("click", function(){
    ketNoi.setAttribute("disabled", "true");
})
doanhNghiep.addEventListener("click",function(){
    ketNoi.removeAttribute("disabled");
})

var ketQua2 = document.getElementById("ketQua2");
ketQua2.addEventListener("click", function () {
    var userCode = document.getElementById("userCode").value;
    var kenhCaoCap = parseFloat(document.getElementById("kenhCaoCap").value);
    var tbTienCap = document.getElementById("tbTienCap");
    var soKetNoi = parseFloat(ketNoi.value);

    if (nhaDan.checked) {
        loaiKhachHang = nhaDan.value;
    }else if (doanhNghiep.checked){
        loaiKhachHang = doanhNghiep.value;
    }

    tongChiPhi = tinhChiPhiCap(loaiKhachHang,soKetNoi,kenhCaoCap);
    
    tbTienCap.innerHTML = "Tổng chi phí của khách hàng " + userCode + " là: " + tongChiPhi + " $";
})