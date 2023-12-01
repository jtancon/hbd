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


document.addEventListener('DOMContentLoaded', (event) => {

    let footerDiv = document.getElementById('dataFooter');
    footerDiv.textContent = "Abrindo log: " + parsedFile;
});