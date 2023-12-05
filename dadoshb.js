export function displayData(extractedData) {
    const container = document.getElementById('dataContainer');
    let pontosCh1 = [];
    let pontosCh2 = [];

    if (!Array.isArray(extractedData)) {
        console.error('extractedData deve ser um array');
        return;
    }

    extractedData.forEach(item => {
        const arrival = item.cabecalhoLeitura.state.reported.arrival;
        const sitename = item.cabecalhoLeitura.state.reported.siteName;
        const absoluto = item.fichaTrem.trem.absolut;
        let div = document.createElement('div');

        let p1 = document.createElement('p');
        p1.className = 'linha';
        p1.innerHTML = '<strong>Status Geral (Inf. Do LOG)</strong>';
        div.appendChild(p1);
        
        let p2 = document.createElement('p');
        p2.className = 'linha';
        p2.innerHTML = '<strong>Data e hora:</strong> ' + arrival;
        div.appendChild(p2);
        
        let p3 = document.createElement('p');
        p3.className = 'linha';
        p3.innerHTML = '<strong>Hotbox (Site Name):</strong> ' + sitename;
        div.appendChild(p3);
        
        let p4 = document.createElement('p');
        p4.className = 'linha';
        p4.innerHTML = '<strong>Absoluto:</strong> ' + absoluto;
        div.appendChild(p4);
        
        let p5 = document.createElement('p');
        p5.className = 'linha';
        p5.innerHTML = '<strong>Numero de eixos:</strong> ' + '0'; // Substitua por valor real
        div.appendChild(p5);
        
        let p6 = document.createElement('p');
        p6.className = 'linha';
        p6.innerHTML = '<strong>Numero de alarmes:</strong> ' + '0'; // Substitua por valor real
        div.appendChild(p6);
        
        let p7 = document.createElement('p');
        p7.className = 'linha';
        p7.innerHTML = '<strong>Proximo HB:</strong> ' + 'TST'; // Substitua por valor real
        div.appendChild(p7);
        
        // Adicione o div ao DOM
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