const _name = document.querySelector("#name");
const _path = document.querySelector("#path");
const _url = document.querySelector("#url");
const adddBtn = document.querySelector("#registration-form").lastElementChild;
const clearAllBtn = document.querySelector("#clear-students");
const tBody = document.querySelector("#Students");
const loading = document.querySelector("#loading");
const table = document.querySelector(".table");
const textAdd = document.querySelector(".text-add")
const textRemove = document.querySelector(".text-remove")

const ui = new UI();

const showLoading = ()=>{
    loading.style.display ="block"}


const hideLoading =() => {
    setTimeout(() => {
        loading.style.display ="none"
    }, 1000);
    }

window.addEventListener("DOMContentLoaded",()=>{
    adddBtn.addEventListener("click",addNewStudent);
    clearAllBtn.addEventListener("click",clearAllStudents)
})

const addNewStudent =(e)=>{
  e.preventDefault();
  showLoading();
  const imageUrl = _url.value.trim();
  const imageName = _name.value.trim();
  const imagePath = _path.value.trim();
  if (imagePath === "" || imageName === "" || imageUrl === "") {
    confirm("Please enter students's info");
  } else {
    const newStudentObject = new Student(imageUrl, imageName, imagePath);
    ui.addStudentToUI(newStudentObject);
  }
  // let inputArray = document.querySelector(".form-control")
  ui.clearInputs([_url, _name, _path]);
  hideLoading();
    showAddText();
    hideAddText();
}

const clearAllStudents =()=>{
    showLoading();
    const studentRows = tBody.querySelectorAll("tr");
    studentRows.forEach((studentRow)=>{
        studentRow.remove()
    })
    hideLoading()
}
const deleteStudent = (e)=>{
    showLoading();
    if(e.target.classList.contains("btn-danger")){
        e.target.closest("tr").remove();
    }
    hideLoading()
    showRemoveText();
    hideRemoveText();
}

tBody.addEventListener("click",deleteStudent)

 const showAddText = () =>{
     setTimeout(() => {
       textAdd.style.visibility ="visible";
     },1500)
    
 }

 const hideAddText = () =>{
     setTimeout(()=>{
        textAdd.style.visibility ="hidden";
     },3000)
    
 }
 const showRemoveText = () => {
   setTimeout(() => {
     textRemove.style.visibility ="visible";
   }, 1500);
 };

 const hideRemoveText = () => {
   setTimeout(() => {
     textRemove.style.visibility ="hidden";
   }, 3000);
 };