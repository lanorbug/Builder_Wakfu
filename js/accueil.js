// Fonctions de base

// Fonction création d'un element
function createElem(bloc, parent, tag, name){
    bloc = document.createElement(tag);
    parent.appendChild(bloc);
    bloc.classList.add(name);
}

// Variables globales

const containerMain = document.getElementById('container-main');


// Creation de la page d'accueil en js

// Creation du mini navigateur

let containerMiniNav = document.createElement('div');
containerMain.prepend(containerMiniNav);
containerMiniNav.classList.add('container-mininav');

let miniNav = document.createElement('div');
containerMiniNav.prepend(miniNav);
miniNav.classList.add('mininav');

let iconeHome = document.createElement('div');
miniNav.prepend(iconeHome);
iconeHome.classList.add('icone-home');
iconeHome.innerHTML = "<i class=\"fas fa-door-open\"></i>";

let iconeProfil = document.createElement('div');
miniNav.appendChild(iconeProfil);
iconeProfil.classList.add('icone-profil');
iconeProfil.innerHTML = "<i class=\"fas fa-user-alt\"></i>"

let iconeConnect = document.createElement('div');
miniNav.appendChild(iconeConnect);
iconeConnect.classList.add('icone-connect');
iconeConnect.innerHTML = "<i class=\"fas fa-power-off\"></i>";



// Creation du navigateur principal

let containerNavPrinc = document.createElement('div');
containerMain.appendChild(containerNavPrinc);
containerNavPrinc.classList.add('container-navprinc');

let navPrinc = document.createElement('div');
containerNavPrinc.prepend(navPrinc);
navPrinc.classList.add('nav-principal');

let blocBuilder = document.createElement('div');
navPrinc.prepend(blocBuilder);
blocBuilder.classList.add('bloc-builder');
blocBuilder.innerHTML = "<p>Builder</p>";

let blocEncyclo = document.createElement('div');
navPrinc.appendChild(blocEncyclo);
blocEncyclo.classList.add('bloc-encyclo');
blocEncyclo.innerHTML = "<p>Encyclopedie</p>";

let blocAlmanax = document.createElement('div');
navPrinc.appendChild(blocAlmanax);
blocAlmanax.classList.add('bloc-almanax');
blocAlmanax.innerHTML = "<p>Almanax</p>";

let blocProfil = document.createElement('div');
navPrinc.appendChild(blocProfil);
blocProfil.classList.add('bloc-profil');
blocProfil.innerHTML = "<p>Profil</p>";





// Tests



// createElem('iconeHome', miniNav, 'div', 'icone-home');



