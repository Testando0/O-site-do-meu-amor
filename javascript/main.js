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

        if (senha == 'pao' && login == 'andria') {
            secaoIncorreta.classList.add('none')
            secaoCorreta.innerText = 'Oi meu amor'
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
            secaoIncorreta.innerText = 'Preciso ter certeza que é voce, digite algo !'
        }
        
        else if (senha != 'pao' || login!= 'andria') {
            secaoIncorreta.classList.remove('none')
            secaoIncorreta.classList.add('dados-incorretos')
            secaoIncorreta.innerText = 'Pessoa ou palavra chave errada'
        }
        
})