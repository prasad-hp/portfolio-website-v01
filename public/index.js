

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