const formulario = document.querySelector('#form')
const secaoIncorreta = document.querySelector('.modal-1')
const secaoCorreta = document.querySelector('.modal-2')
const carta = document.querySelector('.carta')
const sectionForm = document.querySelector('.formulario')
const paragrafoTitle = document.querySelector('.title')

formulario.elements.submit.addEventListener('click', function(event){
        event.preventDefault()
        let login = formulario.elements.name.value.toLowerCase()
        let senha =  formulario.elements.senha.value.toLowerCase()

        if (senha == '1234' && login == 'user') {
            secaoIncorreta.classList.add('none')
            secaoCorreta.innerText = 'Oii Meu Amor'
            secaoCorreta.classList.add('dado-correto')
            secaoCorreta.classList.remove('none')
            setTimeout(function(){
                secaoCorreta.classList.add('none')
                carta.classList.add('carta-animacao')
                paragrafoTitle.style.display = 'none'
                sectionForm.style.display = 'none'
                carta.classList.remove('none')
            },1200)
        }

        if (formulario.elements.senha.value == '' || formulario.elements.name.value == '') {
            secaoIncorreta.classList.remove('none')
            secaoIncorreta.classList.add('dados-incorretos')
            secaoIncorreta.innerText = 'Usuário Ou Senha Incorretos!'
        }
        
        else if (senha != '1234' || login!= 'user') {
            secaoIncorreta.classList.remove('none')
            secaoIncorreta.classList.add('dados-incorretos')
            secaoIncorreta.innerText = 'Usuário Ou Senha Incorretos!'
        }
        
})
