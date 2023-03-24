  // Hàm tính điểm trung bình với if/else
  function calculateAverageWithIfElse() {
      // Nhập điểm từ 0-10 dành cho 4 môn Toán, Lý, Hóa, Sinh.
      let toan = parseFloat(prompt("Nhập điểm môn Toán: "));
      let ly = parseFloat(prompt("Nhập điểm môn Lý: "));
      let hoa = parseFloat(prompt("Nhập điểm môn Hóa: "));
      let sinh = parseFloat(prompt("Nhập điểm môn Sinh: "));

      // Kiểm tra tính hợp lệ của các điểm
      if (toan >= 0 && toan <= 10 && ly >= 0 && ly <= 10 && hoa >= 0 && hoa <= 10 && sinh >= 0 && sinh <= 10) {
          // Tính điểm trung bình 4 môn
          let diemTb = (toan + ly + hoa + sinh) / 4;
          let xepLoai;

          // Xếp loại dựa trên điểm trung bình
          if (diemTb < 5) {
              xepLoai = "Yếu";
          } else if (diemTb >= 5 && diemTb < 7) {
              xepLoai = "Khá";
          } else if (diemTb >= 7 && diemTb < 9) {
              xepLoai = "Giỏi";
          } else {
              xepLoai = "Xuất Sắc";
          }

          console.log(`Điểm trung bình: ${diemTb.toFixed(2)}, Xếp loại: ${xepLoai}`);
      } else {
          console.log('Điểm không hợp lệ, xin vui lòng kiểm tra và nhập lại!');
      }
  }

  // Hàm tính điểm trung bình với Switch Case
  function calculateAverageWithSwitchCase() {
      let a = prompt("Nhap diem tiep cho ham tinh diem tb voi swithcase");
      // Nhập điểm từ 0-10 dành cho 4 môn Toán, Lý, Hóa, Sinh
      let toan = parseFloat(prompt("Nhập điểm môn Toán: "));
      let ly = parseFloat(prompt("Nhập điểm môn Lý: "));
      let hoa = parseFloat(prompt("Nhập điểm môn Hóa: "));
      let sinh = parseFloat(prompt("Nhập điểm môn Sinh: "));

      // Kiểm tra tính hợp lệ của các điểm
      if (toan >= 0 && toan <= 10 && ly >= 0 && ly <= 10 && hoa >= 0 && hoa <= 10 && sinh >= 0 && sinh <= 10) {
          // Tính điểm trung bình 4 môn
          let diemTb2 = (toan + ly + hoa + sinh) / 4;
          let xepLoai2;

          switch (true) {
              case (diemTb2 >= 9 && diemTb2 <= 10):
                  xepLoai2 = "Giỏi";
                  break;
              case (diemTb2 >= 7):
                  xepLoai2 = "Khá";
                  break;
              case (diemTb2 >= 5):
                  xepLoai2 = "Trung bình";
                  break;
              default:
                  xepLoai2 = "Yếu";
          }

          console.log(`Điểm trung bình: ${diemTb2.toFixed(1)}, Xếp loại: ${xepLoai2}`);
      } else {
          console.log('Điểm không hợp lệ, xin vui lòng kiểm tra và nhập lại!');
      }
  }
  console.log("Tính điểm TBvà xếp loại với If else" + calculateAverageWithIfElse());

  console.log("Tính điểm TBvà xếp loại với Switch case" + calculateAverageWithSwitchCase());