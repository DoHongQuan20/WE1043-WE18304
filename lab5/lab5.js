let listSection = document.getElementById("list-container");
let btnADD = document.getElementById("btnAdd");
btnADD.addEventListener("click", () => {
    addTask();
});

function addTask() {
    //thêm div vào class row
    let inputName = document.getElementById("task-name").value;
    let inputDescription = document.getElementById("description").value;
    if (inputName.length < 5 || inputDescription.length < 10) {
        alert("Tên phải chứa trên 5 kí tự và mô tả phải trên 20 kí tự, mời nhập lại!!!")
    } else {
        // create div class row
        let row = document.createElement("div");
        row.classList.add("row");
        let disabledInput = true;

        //thêm input de chứa name
        let name = document.createElement("input");
        name.type = "text";
        name.value = inputName;
        name.disabled = disabledInput;

        //thêm vào description
        let description = document.createElement("input");
        description.type = "text";
        description.value = inputDescription;
        description.disabled = disabledInput;

        //thêm delete 
        let Deletediv = document.createElement("div");
        let btnDelete = document.createElement("button");
        btnDelete.innerHTML = "Delete";
        Deletediv.appendChild(btnDelete);

        let Editdiv = document.createElement("div");
        let btnEdit = document.createElement("button");
        btnEdit.innerHTML = "Edit";
        Editdiv.appendChild(btnEdit);

        //thêm vào row
        row.appendChild(name);
        row.appendChild(description);
        row.appendChild(Deletediv);
        row.appendChild(Editdiv);

        listSection.appendChild(row);

        // xoá list
        btnDelete.addEventListener("click", () => {
            listSection.removeChild(row);
        });

        //edit list
        btnEdit.addEventListener("click", () => {
            name.disabled = !disabledInput;
            description.disabled = !disabledInput;
            disabledInput = !disabledInput;
        });

    }
}