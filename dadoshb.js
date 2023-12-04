import { Chart } from 'chart.js';

export function displayData(extractedData) {
    const container = document.getElementById('dataContainer');
    let pontos = [];

    extractedData.forEach(item => {
        const div = document.createElement('div');
        const arrival = item.cabecalhoLeitura.state.reported.arrival;
        const sitename = item.cabecalhoLeitura.state.reported.siteName;
        const absoluto = item.fichaTrem.trem.absolut;
        div.textContent = `Arrival: ${arrival}, Site Name: ${sitename}, Absoluto: ${absoluto}`;
        container.appendChild(div);

        const number = item.number;
        item.axle.forEach(axle => {
            pontos.push({
                x: axle.axleNum,
                y: axle.ch1,
                veiculo: number
            });
            pontos.push({
                x: axle.axleNum,
                y: axle.ch2,
                veiculo: number
            });
        });
    });

    // Cria uma instância do gráfico
    const ctx = document.getElementById('meuGrafico').getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Veículos Lidos',
                data: pontos,
                pointBackgroundColor: 'rgba(75, 192, 192, 0.6)',
                pointBorderColor: 'rgba(75, 192, 192, 1)',
                pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointHoverBorderColor: 'rgba(220, 220, 220, 1)'
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
            }
        }
    });
}