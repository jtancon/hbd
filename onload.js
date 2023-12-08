function getParsedFileFromURL() {
    const hash = window.location.hash;
    const parsedFile = hash.substring(1); // remove o caractere '#'
    return parsedFile;
}

console.log(getParsedFileFromURL());
const parsedFile = getParsedFileFromURL();

document.addEventListener('DOMContentLoaded', (event) => {
    const url = 'https://vpc-rumo-elastic-bnuz2l5d67om2pql6wzb2bz4oy.us-east-1.es.amazonaws.com/';

    fetch(url, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                return fetchElasticsearchData();
            } else {
                throw new Error('Não foi possível acessar o site');
            }
        })
        .then(data => {
            loadDadosHB(data);
        })
        .catch(error => console.error('Erro:', error));
});

document.getElementById("supervisorioButton").onclick = function() {
    window.open("http://10.30.41.38:7000/"+parsedFile, '_blank');
};

let botao = document.getElementById('BTNPerfil');
botao.onclick = function() {
    let texto = prompt('Por favor, insira o texto do arquivo de perfil p_raw:');
    if (texto) {
        let linhas = texto.split('\n');
        let tabela = [];

        for (let i = 0; i < linhas.length; i++) {
            let linha = linhas[i];

            // Para de montar a tabela se a linha for "end"
            if (linha.trim().toLowerCase() === 'end') {
                break;
            }

            let celulas = linha.split(',');

            let temPerfil = false;
            let valores = [];

            celulas.forEach(celula => {
                if (celula.includes('{')) {
                    // Extrai o conteúdo entre {}
                    let conteudo = celula.slice(celula.indexOf('{') + 1, celula.indexOf('}'));
                    // Divide o conteúdo em pares de caracteres e converte cada par de hexadecimal para decimal
                    for (let i = 0; i < conteudo.length; i += 2) {
                        valores.push(parseInt(conteudo.slice(i, i + 2), 16));
                    }
                    temPerfil = true;
                } else {
                    valores.push(parseInt(celula, 16));  // Converte de hexadecimal para decimal
                }
            });

            // Adiciona a linha à tabela apenas se "perfil" for true
            if (temPerfil) {
                tabela.push({
                    valor: valores,
                    perfil: temPerfil
                });
            }
        }

        // Envia a tabela para perfil.js
        import('./perfil.js')
        .then(module => {
            module.displayData(tabela);
        })
        .catch(error => {
            console.error('Erro ao carregar perfil.js:', error);
        });
    }
};

function fetchElasticsearchData() {
    const elasticURL = `https://vpc-rumo-elastic-bnuz2l5d67om2pql6wzb2bz4oy.us-east-1.es.amazonaws.com/rumo-supervisorio-atlas2/_search?source_content_type=application/json&source={%22size%22:0,%22query%22:{%22bool%22:{%22must%22:[{%22term%22:{%22cabecalhoLeitura.state.reported.parsedFile.keyword%22:%22${parsedFile}%22}}]}},%22aggs%22:{%22latest_coldWheels%22:{%22top_hits%22:{%22size%22:10,%22sort%22:[{%22timestamp%22:{%22order%22:%22desc%22}}]}}}}`;

    return fetch(elasticURL)
        .then(response => response.json())
        .then(data => {
            const hits = data.aggregations.latest_coldWheels.hits.hits;
            const extractedData = hits.map(hit => {
                return hit._source;
            });

            console.log(extractedData);
            return extractedData;
        })
        .catch(error => {
            console.error('Erro na solicitação:', error);
            throw error;
        });
}

function loadDadosHB(data) {
    import('./dadoshb.js')
        .then(module => {
            module.displayData(data);
        })
        .catch(error => {
            console.error('Erro ao carregar dadoshb.js:', error);
        });
}

//salvar pdf da analise
document.getElementById('BTNImprimir').addEventListener('click', function() {
    html2canvas(document.body).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var doc = new jsPDF('p', 'mm');
        doc.addImage(imgData, 'PNG', 10, 10);
        doc.save(parsedFile + '.pdf');
    });
});