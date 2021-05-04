const form=document.querySelector(".inputs");
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputpeso = document.querySelector('#peso');
    const inputaltura = document.querySelector('#altura');
    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);
    if(!peso) {
        resultado('Peso invalido', false);
        return;
    }
    if(!altura) {
        resultado('Altura invalido', false);
        return;
    }
    const imc= peso/altura**2;
    console.log(imc);
    if (imc<18.5){
        resultado('Abaixo do peso', true);
    }else if (imc<24.9 && imc>18.5){
        resultado('Peso normal', true);
    }else if (imc<29.9 && imc>25){
        resultado('Sobrepeso', true);
    }else if (imc<34.9 && imc>30){
        resultado('Obesidade grau 1', true);
    }else if (imc<39.9 && imc>35){
        resultado('Obesidade grau 2', true);
    }else{
        resultado('Obesidade grau 3', true);
    }
});
function resultado(res, isValid){
    const resultado = document.querySelector(".resultado")
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = `${res}`
    resultado.appendChild(p);
    if (isValid){
        p.classList.add('paragrafo-true');
    } else {
        p.classList.add('paragrafo-false');
    }
    };
