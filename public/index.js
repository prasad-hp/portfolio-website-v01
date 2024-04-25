

function showMenu(){
    const menuOption = document.getElementById("menuToggle")
    const menuIcon = document.getElementById("menuIcon")
    if(menuOption.className === "hidden"){
        menuOption.className = "inline"
        menuIcon.setAttribute("src", "./images/clear_white_24dp.svg ")

    }else{
        menuOption.className = "hidden"
        menuIcon.setAttribute("src", "./images/menu_white_24dp.svg ")
    }


}
const transisionNavBar = () => {
    const navBar1 = document.getElementById("navBar-1");
    if (window.scrollY > 100) {
        navBar1.className = "hidden lg:block fixed bg-Light-Navy"
    } else {
        navBar1.className = "hidden lg:block fixed"
    }
};

window.addEventListener("scroll", transisionNavBar);

window.addEventListener("beforeunload", () => {
    window.removeEventListener("scroll", transisionNavBar);
});

