document.addEventListener('DOMContentLoaded', function() {
    carregarVideos();
});

function carregarVideos() {
    // Simples requisiÃ§Ã£o AJAX para carregar o arquivo JSON
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var videos = JSON.parse(xhr.responseText);
            exibirVideosAleatorios(videos);
        }
    };
    xhr.open('GET', 'videos.json', true);
    xhr.send();
}

function exibirVideosAleatorios(videos) {
    // Embaralha a lista de vÃ­deos
    videos = shuffle(videos);

    // Exibe os vÃ­deos
    var recomendacoesHTML = '';
    for (var i = 0; i < videos.length; i++) {
        recomendacoesHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videos[i].codigo + '" frameborder="0" allowfullscreen></iframe>';
    }

    document.getElementById('recomendacoes').innerHTML = recomendacoesHTML;
}

// FunÃ§Ã£o para embaralhar a lista de vÃ­deos
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

