const hd = document.createElement('header')
const btnMenu = document.createElement('span')
btnMenu.classList.add('material-icons')
btnMenu.innerHTML = 'menu'
const nv = document.createElement('nav')
let linksNav = []
function criarLinks() {
    for (let c = 0;c<4;c++) {
        linksNav.push(document.createElement('a'))
    }
}
function definirNomesLinks()  {
    linksNav[0].innerHTML = 'Início'
    linksNav[0].href = './index.html'
    linksNav[1].innerHTML = 'Cardápio'
    linksNav[1].href = './cardapio.html'
    linksNav[2].innerHTML = 'Encomendar'
    linksNav[2].href = './encomenda.html'
    linksNav[3].innerHTML  = 'Cadastre-se'
    linksNav[3].href = './cadastro.html'
}

criarLinks()
definirNomesLinks()
document.body.appendChild(hd)
hd.appendChild(btnMenu)
hd.appendChild(nv)

linksNav.map((l)=>{
    nv.appendChild(l)
})