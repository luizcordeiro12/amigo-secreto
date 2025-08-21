let amigos =[];
document.getElementById('Adicionar').onclick = function(){
    let amigo = document.getElementById('nome').value.trim();
    if(amigo){
        amigos.push(amigo)
        for(let i = 0; i < amigos.length; i++){
            document.getElementById('lista').innerHTML = `${amigos[i]}`
        }
    }
}