export function displayData(tabela) {
    console.log(tabela);
    let contagemTitulos = {};
    let divs = {};

    let absoluto = localStorage.getItem('absoluto');
    console.log("Absoluto: "+absoluto);

    tabela.forEach((linha, index) => {
        let dados = linha.perfil;  // Usa os valores de perfil
        let axle = linha.axle;  // Usa o valor de axle como título

        // Verifica se o título já foi usado e atualiza o contador
        if (contagemTitulos[axle]) {
            contagemTitulos[axle]++;
        } else {
            contagemTitulos[axle] = 1;
        }

        // Adiciona "CH1" ou "CH2" ao título, dependendo do contador
        let titulo = `Eixo ${axle} CH${contagemTitulos[axle]}`;

        // Verifica se a div para este axle já existe, senão cria uma
        if (!divs[axle]) {
            let div = document.createElement('div');
            div.style.display = 'flex';
            document.body.appendChild(div);
            divs[axle] = div;
        }

        // Cria o canvas para o gráfico
        let canvas = document.createElement('canvas');
        canvas.className = 'GraficoPerfil';
        divs[axle].appendChild(canvas);

        // Cria o gráfico
        let chartData = {
            labels: Array.from({length: dados.length}, (_, i) => i + 1),
            datasets: [{
                label: titulo,
                data: dados,
                fill: true,
                backgroundColor: 'rgba(0, 128, 0, 0.5)',
                borderColor: 'green'
            }]
        };

        // Verifica se existe outro CH para adicionar a linha pontilhada
        let outroCH = contagemTitulos[axle] === 1 ? 2 : 1;
        if (contagemTitulos[axle] > 1) {
            let outroDados = tabela.find(l => l.axle === axle && l.perfil !== dados).perfil;
            let outroTitulo = `Eixo ${axle} CH${outroCH}`;
            chartData.datasets.push({
                label: outroTitulo,
                data: outroDados,
                fill: false,
                borderColor: 'blue', // Altera a cor da linha pontilhada para azul
                borderDash: [5, 5]
            });
        } else if (contagemTitulos[axle] === 1 && contagemTitulos[axle] < 2) {
            let outroDados = tabela.find(l => l.axle === axle && l.perfil !== dados).perfil;
            let outroTitulo = `Eixo ${axle} CH${outroCH}`;
            chartData.datasets.push({
                label: outroTitulo,
                data: outroDados,
                fill: false,
                borderColor: 'blue', // Altera a cor da linha pontilhada para azul
                borderDash: [5, 5]
            });
        }

        // Adiciona a linha de anotação em vermelho no gráfico
        if (absoluto) {
            chartData.datasets.push({
                label: 'Absoluto '+absoluto,
                data: Array(dados.length).fill(absoluto),
                fill: false,
                borderColor: 'red',
                borderWidth: 1,
                pointRadius: 0 // Remove os pontos da linha
            });
        }

        // Adiciona a linha verde claro no gráfico com o valor de temperatura
        let temperatura = linha.temperatura;
        chartData.datasets.push({
            label: 'Temperatura '+ temperatura,
            data: Array(dados.length).fill(temperatura),
            fill: false,
            borderColor: 'MediumSeaGreen',
            borderWidth: 1,
            pointRadius: 0 // Remove os pontos da linha
        });

        new Chart(canvas, {
            type: 'line',
            data: chartData,
            plugins: [ChartDataLabels],
            options: {
                responsive: false,  // Desativa o redimensionamento automático
                scales: {
                    y: {
                        grid : {
                            display: false
                        },
                        beginAtZero: true,
                        max: 145,
                    },
                    x: {
                        grid : {
                            display: false
                        }
                    }
                },
                tooltips: {
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            return 'Valor: ' + tooltipItem.yLabel;
                        }
                    }
                },
                plugins: {
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        offset: 0, 
                        color: function(context) {
                            return context.datasetIndex === 0 ? 'green' : 'blue';
                        },
                        display: function(context) {
                            return context.datasetIndex === 0 || context.datasetIndex === 1;  // Exibe data labels apenas para ch1 e ch2
                        },
                        formatter: function(value, context) {
                            return value;  // Retorna o valor y do ponto de dados
                        }
                    }
                }
            }
        });
    });
}