const accordion = document.getElementsByClassName
('contentBx');

for (i = 0; i<accordion.length; i ++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function() {
sidebar.classList.toggle("active");
}
searchBtn.onclick = function() {
sidebar.classList.toggle("active");
}

