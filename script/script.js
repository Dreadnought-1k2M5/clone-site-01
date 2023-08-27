function openNav(){
    document.querySelector("#sidebarId").style.display = "block";
    document.querySelector(".global-sidebar-bg").style.display = "block";

}

function closeNav(){
    document.querySelector("#sidebarId").style.display = "none";
    document.querySelector(".global-sidebar-bg").style.display = "none";

}

/* let sidebarBg = document.querySelector('.global-sidebar-bg');
sidebarBg.addEventListener('click', (e)=>{
    alert("Test");
    closeNav();
}); */