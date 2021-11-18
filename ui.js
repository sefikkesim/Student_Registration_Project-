function UI() {
    
}
UI.prototype.addStudentToUI = (newStudentObject) => {
    const tBody = document.querySelector("#Students");
    tBody.innerHTML += `<tr>
    <td><img src="${newStudentObject.imageUrl}" class="img-fluid img-thumbnail" style="width:100px; border-radius:50%"></td>
    <td>${newStudentObject.imageName}</td>
    <td>${newStudentObject.imagePath}</td>
    <td><a href="#" id="delete-student" class="btn btn-danger">Delete Student</a></td>
    </tr>`;
}
UI.prototype.clearInputs = (inputArray) => {
    inputArray.forEach((element) => {
        element.value = "";
    })
}