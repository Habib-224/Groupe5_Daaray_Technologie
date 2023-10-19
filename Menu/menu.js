function afficher(){ 
    let menu = document.getElementById('MenuSec');
    let X_Bar = document.getElementById('X_Bar');
    let MenuBarx = document.getElementById("MenuBarx");
    menu.classList.add('MenuSecBar');
    X_Bar.style.display="block";
    X_Bar.style.position="absolute";
    X_Bar.style.top="10px";
    X_Bar.style.zIndex=5;
}

function cacher(){
    // menu.remove('MenuSecBar');
    let menu = document.getElementById('MenuSec');
    let X_Bar = document.getElementById('X_Bar');
    let MenuBarx = document.getElementById("MenuBarx");
    menu.style.left="-400px";
    menu.style.transition="0.5s"
    X_Bar.style.display="none";
    X_Bar.style.zIndex=5;
    MenuBarx.style.visibility="visible ";
    window.location.reload();
}