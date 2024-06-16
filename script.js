let menuVisible = false;
// Funcion oculta que muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // oculto el menu una vez selecciono una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

// función aplica las animaciones de las habilidades
function efectoSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progres");
        habilidades[0].classList.add("analisis-funcional");
        habilidades[1].classList.add("interviewing");
        habilidades[2].classList.add("project-planning");
        habilidades[3].classList.add("team-leadership");
        habilidades[4].classList.add("process-methods-design");
        habilidades[5].classList.add("javascript");
        habilidades[6].classList.add("html");
        habilidades[7].classList.add("css");
        habilidades[8].classList.add("photoshop");
        habilidades[9].classList.add("notion");
        habilidades[10].classList.add("python");
        habilidades[11].classList.add("ux-ui");
    }
}

// defecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoSkills();
}