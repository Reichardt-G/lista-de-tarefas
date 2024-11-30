let BotaoAdd  = document.getElementById('botao');
let Input = document.getElementById('input-tarefa');
let Tarefas = document.getElementById('tarefas');
let marcado = false;

BotaoAdd.addEventListener('click', function() {
    if (Input.value != '') {
        var tarefa = document.createElement('p');
        Tarefas.appendChild(tarefa);
        tarefa.innerText = `- ${Input.value}`;
        Input.value = '';
    }
});

Tarefas.addEventListener('click', function(evento) {
    if (evento.target.tagName === 'P'){
        if (marcado == false) {
            evento.target.style.textDecoration = 'line-through';
            marcado = true;
        } else {
            evento.target.style.textDecoration = '';
            marcado = false;
        }
    }
});