toDoList = [];
      while (true) {
        let choice = prompt(
          "          MENU: \n1: Thêm công việc. \n2: Xem danh sách công việc. \n3: Sửa công việc. \n4: Xóa công việc. \n5: Thoát. \nNhập lựa chọn của bạn: "
        );

        switch (choice) {
          case "1":
            let cviec = prompt("Nhập công việc muốn thêm: ");
            toDoList.push(cviec);
            alert("Thêm công việc thành công!");
            break;

          case "2":
            alert(toDoList);
            for (cv of toDoList) {
              console.log(`${cv}`);
            }
            break;

          case "3":
            let cvCu = prompt("Chọn công việc bạn muốn chỉnh sửa:");
            let d = 0;
            for (let i = 0; i < toDoList.length; i++) {
              if (toDoList[i] === cu) {
                let moi = prompt("Công việc mới:");
                toDoList[i] = cvMoi;
                d++;
              }
            }
            if (d === 0) {
              alert("Không tìm thấy công việc muốn chỉnh sửa.");
            }
            break;

          case "4":
            let xoa = prompt("Chọn công việc bạn muốn xóa:");
            toDoList1 = [];
            for (cv of toDoList) {
              if (cv !== xoa) {
                toDoList1.push(cv);
              }
            }
            toDoList = toDoList1;
            break;

          case "5":
            alert("Đã thoát chương trình!");
            break;

          default:
            alert("Lựa chọn không hợp lệ! Vui lòng chọn lại: ");
            break;
        }

        if (choice === "5") {
          break;
        }
      }