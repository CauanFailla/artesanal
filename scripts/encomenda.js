import * as headerDef from './contructDef.js'
import * as scrollMec from './mecanicaScroll.js'
class Alimentos {
    constructor(ingredientes) {
        this.ingredientes = ingredientes
    }
}
let alimentosVisual = [...document.querySelectorAll('#ialimentos option')]
let alimentoAtual
alimentosVisual.map((a)=>{
    a.addEventListener('click',(evt)=>{
        switch (evt.target.innerHTML) {
            case 'Linguiça toscana':
                alimentoAtual = new Alimentos(['pimenta','tomate','limão']) 
                break;
        
            default:
                break;
        }
        
        
    })
})