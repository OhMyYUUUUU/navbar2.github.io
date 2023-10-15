const toggle = document.querySelector(".toggle")
const navLists = document.querySelector(".nav-lists")

toggle.addEventListener("click",function(){
    if(navLists.classList.contains("active")){
        navLists.classList.remove("active")
    }else{
        navLists.classList.add("active")
    }
})
