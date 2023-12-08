export function displayData(tabela) {
    console.log(tabela);
    let contagemTitulos = {};
    let divs = {};

    tabela.forEach((linha, index) => {
        let dados = linha.valor.slice(1, 29);  // Pega os valores de 1 a 28
        let titulo = linha.valor[0];  // Pega o valor da coluna 0

        // Verifica se o título já foi usado e atualiza o contador
        if (contagemTitulos[titulo]) {
            contagemTitulos[titulo]++;
        } else {
            contagemTitulos[titulo] = 1;
        }

        // Adiciona "CH1" ou "CH2" ao título, dependendo do contador
        titulo = `Eixo ${titulo} CH${contagemTitulos[titulo]}`;

        // Verifica se a div para este número já existe, senão cria uma
        if (!divs[linha.valor[0]]) {
            let div = document.createElement('div');
            div.style.display = 'flex';
            document.body.appendChild(div);
            divs[linha.valor[0]] = div;
        }

        // Cria o canvas para o gráfico
        let canvas = document.createElement('canvas');
        canvas.className = 'GraficoPerfil';
        divs[linha.valor[0]].appendChild(canvas);

        // Cria o gráfico
        new Chart(canvas, {
            type: 'line',
            data: {
                labels: Array.from({length: dados.length}, (_, i) => i + 1),
                datasets: [{
                    label: titulo,
                    data: dados,
                    fill: true,
                    backgroundColor: 'rgba(0, 128, 0, 0.5)',
                    borderColor: 'green'
                }]
            },
            options: {
                responsive: false,  // Desativa o redimensionamento automático
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
            });
}