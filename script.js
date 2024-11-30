let BotaoAdd  = document.getElementById('botao');
let Input = document.getElementById('input-tarefa');
let Tarefas = document.getElementById('tarefas');

BotaoAdd.addEventListener('click', function() {
    if (Input.value != '') {
        var tarefa = document.createElement('p');
        Tarefas.appendChild(tarefa);
        tarefa.innerText = `- ${Input.value}`;
        Input.value = '';
    }
});