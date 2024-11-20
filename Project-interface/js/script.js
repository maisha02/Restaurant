
let searchForm = document.querySelector('.search-button');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
