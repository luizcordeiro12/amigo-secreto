let amigos =[]
document.getElementById ('adicionar').onclick = function(){
    let amigo = document.getElementById('nome').value.trim();
    if(amigo){
        amigos.push(amigo)
        document.getElementById ('nome'). value ="";
        document.getElementById ('lista').innerHTML ='';
        for (let i= 0; i < amigos.length; i++){
            document.getElementById('lista').innerHTML += `<li>${amigos[i]}`
        }
    }
}
document.getElementById ('sortear').onclick = function(){
    let sorteado = amigos[Math.floor(Math.random()*amigos.length)];
    document.getElementById ('lista2').innerHTML =`<li>O sorteado é: ${sorteado}</li>`
}