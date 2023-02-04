function so_thieu_so_su_menh() {

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ten = document.getElementById("fullname").value;
    let ngaySinh = document.getElementById("ngay").value;
    let thangSinh = document.getElementById("thang").value;
    let namSinh = document.getElementById("nam").value;

    ten = ten.toUpperCase();
    ten = ten.trim();
    removeAccents(ten);

    let arr = [];
    let soThieuTrongHoVaTen =[];

    function removeAccents() {
        var dauTiengViet = [
            "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ", "DĐ", "EÈẺẼÉẸÊỀỂỄẾỆ", "IÌỈĨÍỊ",
            "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ", "UÙỦŨÚỤƯỪỬỮỨỰ", "YỲỶỸÝỴ" ];
        for (var i = 0; i < dauTiengViet.length; i++) {

            var re = new RegExp('[' + dauTiengViet[i].substr(1) + ']', 'g');
            var char = dauTiengViet[i][0];

            ten = ten.replace(re, char);
        }
        return ten;
    }

    function daySoHoVaTen() {
        for (let i = 0; i < ten.length; i++) {
            if (ten[i] !== ' ') {
                arr.push(str.indexOf(ten[i]) % 9 + 1);
            }
        }
    }
    daySoHoVaTen();

    function soThieu() {
        for (let i = 1; i < 10; i++) {
            let kiemtra = true;
            for (let j = 0; j < arr.length; j++) {
                if (i === arr[j]) {
                    kiemtra = false
                    break;
                }
            }
            if (kiemtra === true) {
                soThieuTrongHoVaTen.push(i);
            }
        }
    }
    soThieu();

    function soSucManhTiemThuc() {
        return 9 - soThieuTrongHoVaTen.length;
    }

    document.getElementById("soSuMenh").innerHTML += soSucManhTiemThuc();
}