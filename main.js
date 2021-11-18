const _name = document.querySelector("#name");
const _path = document.querySelector("#path");
const _url = document.querySelector("#url");
const adddBtn = document.querySelector("#registration-form").lastElementChild;
const clearAllBtn = document.querySelector("#clear-students");
const tBody = document.querySelector("Students");
const loading = document.querySelector("#loading");
const table = document.querySelector(".table");

const ui= new UI()
const showLoading = () => loading.style.display ="block"


const hideLoading =() => loading.style.display ="none"

window.addEventListener("DOMContentLoaded",()=>{
    adddBtn.addEventListener("click",addNewStudent);
    clearAllBtn.addEventListener("click",clearAllStudents)
})

const addNewStudent =()=>{
    const imageUrl = _url.value.trim();
    const imageName = _name.value.trim();
    const imagePath = _path.value.trim();
    if(imagePath === ''|| imageName === '' || imageUrl === ''){
        confirm("Please enter students's info")
    }else{
        const student = new Student(imageUrl,imageName,imagePath );

    }
}

const clearAllStudents =()=>{

}
