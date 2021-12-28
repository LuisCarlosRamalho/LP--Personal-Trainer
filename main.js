let time = 4500,
    currentIndexTestimony = 0,
    testimony = document.querySelectorAll('#testimony .divs-testimony')
    maximun=testimony.length
    
    

const menu = document.getElementById('btnMenu')
const nav = document.getElementById('menu')


const links = document.querySelectorAll('#listMenu a')

/*Quando clicar em uma opção do menu, o mesmo
será escondido.*/
for(const closemenu of links){
    closemenu.addEventListener('click', function () {
        nav.classList.remove('actived')
    })
}


function toggleMenu(event){
    nav.classList.toggle('actived')    
}

function nextTestimony(){
    testimony[currentIndexTestimony].classList.remove('selected')

    currentIndexTestimony++

    if(currentIndexTestimony >= maximun)
    currentIndexTestimony = 0

    testimony[currentIndexTestimony].classList.toggle('selected')
}

function start (){
    setInterval(() => {
       nextTestimony()
    }, time)
}

window.addEventListener('load', start)
menu.addEventListener('click', toggleMenu)



