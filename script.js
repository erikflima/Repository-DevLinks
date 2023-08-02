/* Funcao para click no botao do dark e light mode.*/
function toggleMode(){

    const html = document.documentElement;

    //Se dento do html, existe a classe 'light'
    if( html.classList.contains('light') ){

        html.classList.remove('light');

        //Substituir a imagem
        const img = document.querySelector( "#profile img" );
        img.setAttribute('src', './assets/avatar.png');

    }
    else{
        
        html.classList.add('light');

        //Substituir a imagem
        const img = document.querySelector( "#profile img" );
        img.setAttribute('src', './assets/avatar-light.png');
    }

}