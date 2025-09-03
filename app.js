'use strict'//Modo restrito, para detectar com mais eficiencia os erros
const switcher = document.querySelector('.btn');//referencia ao botão

switcher.addEventListener('click', function(){ 
    document.body.classList.toggle('dark-theme')//toggle

    var className = document.body.className;
    if( className == "light-theme") {
        this.textContent = "Dark";
        alert ("Alterado para tema claro");
    }
    else{
        this.textContent = "Light";
        alert ("Alterado para tema escuro");
    }

    console.log ('current class name: ' + className);

});

