import * as headerDef from './contructDef.js'
import * as scrollMec from './mecanicaScroll.js'
import * as menuLinks from './menuLinks.js'
class Alimentos {
    constructor(ingredientes) {
        this.ingredientes = ingredientes
        this.criarOpçõesRetiradas()
    }

    criarOpçõesRetiradas() {
        document.querySelector('.opcões-retirar').innerHTML = ''
        this.ingredientes.map((i)=>{
            let divret = document.createElement('div')
            let labelret = document.createElement('label')
            labelret.innerHTML = i
            let boxret = document.createElement('input')
            boxret.setAttribute('type','checkbox')
            divret.appendChild(boxret)
            divret.appendChild(labelret)
            
            document.querySelector('.opcões-retirar').appendChild(divret)
        })
    }
}
let alimentosVisual = [...document.querySelectorAll('#ialimentos option')]
let alimentoAtual
let per = true
let selecAt
const btnRetirarOP = document.querySelector('.div-retirar')
const divOpções = document.querySelector('.opcões-retirar')
const btnEviarEncomenda = document.querySelector('.btn-encomendar')
const divFinalizado = document.querySelector('.divEncomendaFinalizada')
btnRetirarOP.addEventListener('click',()=>{
    if (divOpções.style.display == 'block') {
        divOpções.style.display = 'none'
    } else {
        divOpções.style.display = 'block'
    }
})

let alimentoSelecionado = setInterval(() => {
    alimentosVisual.map((a)=>{
       if (a.selected) {
            if (selecAt != a.textContent) {
                selecAt = a.textContent
                if (a.textContent == 'Linguiça toscana') {
                    new Alimentos([])
                } else if (a.textContent == 'Porckibe') {
                    new Alimentos(['pimenta','rucula','alecrim'])
                } else if (a.textContent == 'Linguiça toscana c/pimenta') {
                    new Alimentos(['pimenta','especiarias'])
                } else if (a.textContent =='Bacon com Mussarela') {
                    new Alimentos(['queijo','bacon','pimentão'])
                }
            }  
       }
    })
}, 10);

alimentosVisual[0].addEventListener('select',(evt)=>{
    console.log('awd')
    alert('ad')
    switch (evt.target.innerHTML) {
        case 'Linguiça toscana':
            alimentoAtual = new Alimentos(['pimenta','tomate','limão']) 
            alert('tosca')
            break;
        default:
            break;
    }
})

/*btnEviarEncomenda.addEventListener('click',()=>{
    divFinalizado.showModal()
})*/