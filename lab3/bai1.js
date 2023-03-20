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
          let diemTb = (toan + ly + hoa + sinh) / 4;
          let xepLoai;

          switch (diemTb) {
              case 10:
              case 9:
                  xepLoai = "Giỏi";
                  break;
              case 8:
              case 7:
                  xepLoai = "Khá";
                  break;
              case 6:
              case 5:
                  xepLoai = "TB";
                  break;
              case 4:
              case 3:
              case 2:
              case 1:
                  xepLoai = "Yếu"
                  break;
          }

          console.log(`Điểm trung bình: ${diemTb.toFixed(2)}, Xếp loại: ${xepLoai}`);
      } else {
          console.log('Điểm không hợp lệ, xin vui lòng kiểm tra và nhập lại!');
      }
  }
  console.log("Tính điểm TBvà xếp loại với If else" + calculateAverageWithIfElse());

  console.log("Tính điểm TBvà xếp loại với Switch case" + calculateAverageWithSwitchCase());