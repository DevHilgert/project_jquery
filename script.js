
$(document).ready(function() {

    $('#form-tarefa').on('submit', function(event) {
        event.preventDefault();

        const inputNovaTarefa = $('#nome-tarefa');        
        const nomeTarefa = inputNovaTarefa.val().trim();

        if (nomeTarefa) {
            const novoItem = $('<li></li>').text(nomeTarefa);
            
            $('#lista-tarefas').append(novoItem);
            inputNovaTarefa.val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });

});