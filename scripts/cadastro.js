import * as ScrollMeq from './mecanicaScroll.js'
import * as HeaderCons from './contructDef.js'
let msgEmail = document.querySelector('.msgErro-email')
let msgCpf = document.querySelector('.msgErro-cpf')
let msgTelefone = document.querySelector('.msgErro-telefone')
let inps = [...document.querySelectorAll('input')]
const btnCadastro = document.querySelector('.btn-cadastro')
let msg_cadastroRealizado = document.querySelector('.msg-cadastroRealizado')
let btnCancelarmsg = document.querySelector('.btnCancelarMsg')

function inputsComValores() {
    return inps.every((i)=>{
        return i.value
    })
}

function veriEmail() {
    if (document.querySelector('#iemail').value.search(/@/g) != -1) {
        msgEmail.classList.remove('tes')
        msgEmail.classList.add('msgErro-cadastro')
        return true
    } else {
        console.log('emai')
        msgEmail.classList.remove('msgErro-cadastro')
        msgEmail.classList.add('tes')
        return false
    }
}

function veritelefone() {
    if (document.querySelector('#itelefone').value.search(/[0-9]{2} [0-9]{5}\-[0-9]{4}/g) != -1) {
        msgTelefone.classList.remove('tes')
        msgTelefone.classList.add('msgErro-cadastro')
        return true
    } else {
        msgTelefone.classList.remove('msgErro-cadastro')
        msgTelefone.classList.add('tes')
        console.log('tel')
        return false
    }
}

function veriCpf() {
    if (document.querySelector('#icpf').value.search(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g) != -1) {
        msgCpf.classList.remove('tes')
        msgCpf.classList.add('msgErro-cadastro')
        return true
    } else {
        msgCpf.classList.remove('msgErro-cadastro')
        msgCpf.classList.add('tes')
        console.log('tel')
        return false
    }
}
let veris = [veriEmail,veritelefone,veriCpf]
function MsgsErro() {
    veris.map((v)=>{
        v()
    })
}


btnCancelarmsg.addEventListener('click',()=>{
    msg_cadastroRealizado.close()
})

function verificaçãoCadastro() {
    MsgsErro()
    if (veritelefone() && veritelefone() && veriCpf()) {
        msg_cadastroRealizado.showModal()
    }
}

btnCadastro.addEventListener('click',()=>{
    if (inputsComValores()) {
        verificaçãoCadastro()
    } else {
        alert('Complete todos os campos')
    }
})