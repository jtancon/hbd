export function displayData(extractedData) {
    const container = document.getElementById('dataContainer');
    let pontosCh1 = [];
    let pontosCh2 = [];

    if (!Array.isArray(extractedData)) {
        console.error('extractedData deve ser um array');
        return;
    }

    extractedData.forEach(item => {
        const div = document.createElement('div');
        const arrival = item.cabecalhoLeitura.state.reported.arrival;
        const sitename = item.cabecalhoLeitura.state.reported.siteName;
        const absoluto = item.fichaTrem.trem.absolut;
        div.textContent = `Arrival: ${arrival}, Site Name: ${sitename}, Absoluto: ${absoluto}`;
        container.appendChild(div);

        if (!Array.isArray(item.veiculosLidos)) {
            console.error('item.veiculosLidos deve ser um array');
            return;
        }

        item.veiculosLidos.forEach(veiculo => {
            const number = veiculo.number;

            if (!Array.isArray(veiculo.axle)) {
                console.error('veiculo.axle deve ser um array');
                return;
            }

            veiculo.axle.forEach(axle => {
                pontosCh1.push({
                    x: axle.axleNum,
                    y: axle.ch1,
                    veiculo: number
                });
                pontosCh2.push({
                    x: axle.axleNum,
                    y: axle.ch2,
                    veiculo: number
                });
            });
        });
    });

    // Cria uma instância do gráfico
    const ctx = document.getElementById('meuGrafico').getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Veículos Lidos - ch1',
                data: pontosCh1,
                pointBackgroundColor: 'blue',
                pointBorderColor: 'blue',
                pointHoverBackgroundColor: 'blue',
                pointHoverBorderColor: 'blue'
            },
            {
                label: 'Veículos Lidos - ch2',
                data: pontosCh2,
                pointBackgroundColor: 'red',
                pointBorderColor: 'red',
                pointHoverBackgroundColor: 'red',
                pointHoverBorderColor: 'red'
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Número do Eixo'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Temperatura'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const ch1Value = pontosCh1.find(p => p.x === context.raw.x)?.y;
                            const ch2Value = pontosCh2.find(p => p.x === context.raw.x)?.y;
                            return `axleNum: ${context.raw.x}, ch1: ${ch1Value}, ch2: ${ch2Value}`;
                        }
                    }
                }
            }
        }
    });
}