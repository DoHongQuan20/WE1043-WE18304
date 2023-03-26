class Student {
    constructor(id, firstName, lastName, classId, email, phoneNumber, dob) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.classId = classId;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.dob = dob;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    getTinhTuoiTheoNam() {
        const dob = new Date(this.dob);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const diffMonths = today.getMonth() - dob.getMonth();
        if (diffMonths < 0 || (diffMonths === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }

    getTinhTuoiTheoNgay() {
        const dob = new Date(this.dob);
        const today = new Date();
        const diffTime = Math.abs(today - dob);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
}

const students = [
    new Student(1, "Đặng", "Dũng", 1, "dangdung@gmail.com", "0123456789", "1990-01-01"),
    new Student(2, "Nguyễn", "Hoàng", 1, "nguyenhoang@gmail.com", "0123456789", "1995-05-10"),
    new Student(3, "Trần", "Minh", 1, "tranminh@gmail.com", "0123456789", "1992-03-15"),
    new Student(4, "Phạm", "Dương", 1, "phamduong@gmail.com", "0123456789", "1993-07-01"),
    new Student(5, "Vũ", "Hoài", 1, "vuhoai@gmail.com", "0123456789", "1991-12-30")
];

students.sort((a, b) => a.getTinhTuoiTheoNgay() - b.getTinhTuoiTheoNgay());

console.log('Danh sách sinh viên theo thứ tự sinh viên có số tuổi từ thấp đến cao:');
students.forEach(student => {
    console.log(`${student.getFullName()} (${student.getTinhTuoiTheoNgay()} ngày tuổi)`);
});

console.log(`Thông tin chiều rộng và chiều cao của màn hình: ${window.innerWidth} x ${window.innerHeight}`);