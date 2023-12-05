export function displayData(extractedData) {
    let pontosCh1 = [];
    let pontosCh2 = [];

    if (!Array.isArray(extractedData)) {
        console.error('extractedData deve ser um array');
        return;
    }

    const tbproxhb = {
        'TSF': { 'South': '45 km (TSF-TBS)', 'North': '-' },
        'TBS': { 'South': '52 km (TBS-TIQ)', 'North': '45 km (TBS-TSF)' },
        'TIQ': { 'South': '27 km (TIQ-TMJ)', 'North': '52 km (TIQ-TBS)' },
        'TMJ': { 'South': '47 km (TMJ-TBE)', 'North': '27 km (TMJ-TIQ)' },
        'TBE': { 'South': '50 km (TBE-TAG)', 'North': '47 km (TBE-TMJ)' },
        'TAG': { 'South': '48 km (TAG-TVL)', 'North': '50 km (TAG-TBE)' },
        'TVL': { 'South': '42 km (TVL-TOM)', 'North': '48 km (TVL-TAG)' },
        'TOM': { 'South': '55 km (TOM-TLA)', 'North': '42 km (TOM-TVL)' },
        'TLA': { 'South': '49 km (TLA-THE)', 'North': '55 km (TLA-TOM)' },
        'THE': { 'South': '50 km (THE-TJA)', 'North': '49 km (THE-TLA)' },
        'TJA': { 'South': '46 km (TJA-TVI)', 'North': '50 km (TJA-THE)' },
        'TVI': { 'South': '45 km (TVI-TCE)', 'North': '46 km (TVI-TJA)' },
        'TCE': { 'South': '56 km (TCE-TIN)', 'North': '45 km (TCE-TVI)' },
        'TIN': { 'South': '41 km (TIN-TQI)', 'North': '56 km (TIN-TCE)' },
        'TQI': { 'South': '42 km (TQI-TAP)', 'North': '41 km (TQI-TIN)' },
        'TAP': { 'South': '55 km (TAP-ZUE)', 'North': '42 km (TAP-TQI)' },
        'ZUE': { 'South': '50 km (ZUE-ZED)', 'North': '55 km (ZUE-TAP)' },
        'ZED': { 'South': '60 km (ZED-ZVP)', 'North': '50 km (ZED-ZUE)' },
        'ZVP': { 'South': '51 km (ZVP-ZEB)', 'North': '60 km (ZVP-ZED)' },
        'ZEB': { 'South': '47 km (ZEB-ZRU)', 'North': '51 km (ZEB-ZVP)' },
        'ZRU': { 'South': '55 km (ZRU-ZCV)', 'North': '47 km (ZRU-ZEB)' },
        'ZCV': { 'South': '54 km (ZCV-ZCZ)', 'North': '55 km (ZCV-ZRU)' },
        'ZCZ': { 'South': '81 km (ZCZ-ZTO)', 'North': '54 km (ZCZ-ZCV)' },
        'ZTO': { 'South': '85 km (ZTO-ZVI)', 'North': '81 km (ZTO-ZCZ)' },
        'ZVI': { 'South': '38 km (ZVI-ZQX)', 'North': '85 km (ZVI-ZTO)' },
        'ZQX': { 'South': '62 km (ZQX-ZAC)', 'North': '38 km (ZQX-ZVI)' },
        'ZAC': { 'South': '75 km (ZAC-ZXI)', 'North': '62 km (ZAC-ZQX)' },
        'ZXI': { 'South': '58 km (ZXI-ZKE)', 'North': '58 km (ZXI-ZKE)' },
        'ZKE': { 'South': '-', 'North': '133 km(ZKE-ZAC)' },
        'ZXW': { 'South': '-', 'North': '-' },
        'POA': { 'South': '60 km (POA-PQI)', 'North': '-' },
        'PQI': { 'South': '43 km (PQI-PPR)', 'North': '45 km (PQI-POA)' },
        'PPR': { 'South': '37 km (PPR-PSS)', 'North': '52 km (PPR-PQI)' },
        'PSS': { 'South': '61 km (PSS-PUD)', 'North': '27 km (PSS-PPR)' },
        'PUD': { 'South': '36 km (PUD-PIT)', 'North': '47 km (PUD-PSS)' },
        'PIT': { 'South': '37 km (PIT-POU)', 'North': '50 km (PIT-PUD)' },
        'POU': { 'South': '47 km (POU-PGO)', 'North': '48 km (POU-PIT)' },
        'PGO': { 'South': '-', 'North': '42 km (PGO-POU)' },
        'LUV': { 'South': '142 km (LUV-LRF)', 'North': '-' },
        'LRF': { 'South': '142 km (LRF-LPJ)', 'North': '142 km (LRF-LUV)' },
        'LPJ': { 'South': '128 km (LPJ-LVZ) OU 126 km (LPJ-LAR)', 'North': '142 km (LPJ-LRF)' },
        'LVZ': { 'South': '-', 'North': '128 km (LVZ-LPJ)' },
        'LAR': { 'South': '116 km (LAR-LSQ)', 'North': '126 km (LAR-LPJ)' },
        'LSQ': { 'South': '-', 'North': '116 km (LSQ-LAR)' },
        'NCY': { 'South': '-', 'North': '-' }
    };

    let flexContainer = document.createElement('div');
    flexContainer.style.display = 'flex';
    flexContainer.style.justifyContent = 'flex-start';
    dataContainer.appendChild(flexContainer);

    extractedData.forEach(item => {
        //organizar dados para tabela resumo (todos os veiculos lidos olhando number axle e ch1 e ch2 e ainda tipo de veiculo e veiculo que seria o numero do vagão ou prefixo do trem)
        let tbVeiculoslidosResumo = [];
        item.veiculosLidos.forEach(veiculoLido => {
            if (veiculoLido.axle) {
                veiculoLido.axle.forEach(a => {
                    let linha = {
                        number: veiculoLido.number || "n/a",
                        tipo: veiculoLido.tipoVeiculo || "n/a",
                        veiculo: veiculoLido.veiculo || "n/a",
                        axle: a.axleNum || "n/a",
                        ch1: a.ch1 || "n/a",
                        ch2: a.ch2 || "n/a"
                    };
                    tbVeiculoslidosResumo.push(linha);
                });
            }
        });

        //console.log(tbVeiculoslidosResumo); //teste

        //cria as variaveis para usar na div status geral
        const arrival = item.cabecalhoLeitura.state.reported.arrival;
        const sitename = item.cabecalhoLeitura.state.reported.siteName;
        const absoluto = item.fichaTrem.trem.absolut;
        const checkAxle = item.cabecalhoLeitura.state.reported.divergence.checkAxle;
        const fichaAxles = item.cabecalhoLeitura.state.reported.divergence.fichaAxles;
        const qtdalarme = item.cabecalhoLeitura.state.reported.systemWarning;
        const direction = item.cabecalhoLeitura.state.reported.direction;

        //funcao de verificar antes de calcular N1 e N2 (low limit e temperatura critica)
        function calculateN1N2(sitename, mean, standardDeviation) {
            const lowLimitN1 = (sitename === "LAR" || sitename === "LPJ" || sitename === "LRF" || sitename === "LUV" || sitename === "LVZ" || sitename === "NCY") ? 33 : 35;
            const criticalN1 = (mean + 6 * standardDeviation > lowLimitN1) ? mean + 6 * standardDeviation : lowLimitN1;
            const lowLimitN2 = (sitename === "LAR" || sitename === "LPJ" || sitename === "LRF" || sitename === "LUV" || sitename === "LVZ" || sitename === "NCY") ? 33 : 38;
            const criticalN2 = (mean + 7 * standardDeviation > lowLimitN2) ? mean + 7 * standardDeviation : lowLimitN2;
            return { lowLimitN1, criticalN1, lowLimitN2, criticalN2 };
        }

        //organizar dados para tabela analise (media ch1, desvio padrao, temperatura critica, low limit, maior temperatura, nivel sigma)
        //media ch1
        let somaCh1 = tbVeiculoslidosResumo.reduce((soma, linha) => linha.ch1 !== "n/a" ? soma + linha.ch1 : soma, 0);
        let countCh1 = tbVeiculoslidosResumo.reduce((count, linha) => linha.ch1 !== "n/a" ? count + 1 : count, 0);
        let mediaCh1 = parseFloat((somaCh1 / countCh1).toFixed(2));
        //média ch2
        let somaCh2 = tbVeiculoslidosResumo.reduce((soma, linha) => linha.ch2 !== "n/a" ? soma + linha.ch2 : soma, 0);
        let countCh2 = tbVeiculoslidosResumo.reduce((count, linha) => linha.ch2 !== "n/a" ? count + 1 : count, 0);
        let mediaCh2 = parseFloat((somaCh2 / countCh2).toFixed(2));
        //desvio padrao ch1
        let somaDesvioCh1 = tbVeiculoslidosResumo.reduce((soma, linha) => linha.ch1 !== "n/a" ? soma + Math.pow(linha.ch1 - mediaCh1, 2) : soma, 0);
        let desvioCh1 = parseFloat(Math.sqrt(somaDesvioCh1 / countCh1).toFixed(2));
        //desvio padrao ch2
        let somaDesvioCh2 = tbVeiculoslidosResumo.reduce((soma, linha) => linha.ch2 !== "n/a" ? soma + Math.pow(linha.ch2 - mediaCh2, 2) : soma, 0);
        let desvioCh2 = parseFloat(Math.sqrt(somaDesvioCh2 / countCh2).toFixed(2));
        //temperatura critica n1 e low limit n1
        let { lowLimitN1: ch1LowLimitN1, criticalN1: ch1CriticaN1, lowLimitN2: ch1LowLimitN2, criticalN2: ch1CriticaN2 } = calculateN1N2(sitename, mediaCh1, desvioCh1);
        //temperatura critica n2 e low limit n2
        let { lowLimitN1: ch2LowLimitN1, criticalN1: ch2CriticaN1, lowLimitN2: ch2LowLimitN2, criticalN2: ch2CriticaN2 } = calculateN1N2(sitename, mediaCh2, desvioCh2);
        //maior temperatura ch1
        let maiorCh1 = tbVeiculoslidosResumo.reduce((maior, linha) => linha.ch1 !== "n/a" ? linha.ch1 > maior ? linha.ch1 : maior : maior, 0);
        //maior temperatura ch2
        let maiorCh2 = tbVeiculoslidosResumo.reduce((maior, linha) => linha.ch2 !== "n/a" ? linha.ch2 > maior ? linha.ch2 : maior : maior, 0);
        //nivel sigma ch1
        let sigmaCh1 = parseFloat(((maiorCh1 - mediaCh1) / desvioCh1).toFixed(2));
        //nivel sigma ch2
        let sigmaCh2 = parseFloat(((maiorCh2 - mediaCh2) / desvioCh2).toFixed(2));


        let div = document.createElement('div');
        div.id = 'divStatusGeral'; // Adicione esta linha

        let p1 = document.createElement('p');
        p1.className = 'linha';
        p1.innerHTML = '<h2>Status Geral (Inf. Do LOG)</h2>';
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
        p5.innerHTML = '<strong>Numero de eixos:</strong> Contados ' + checkAxle + ' - Ficha ' + fichaAxles; // Substitua por valor real
        div.appendChild(p5);
        
        let p6 = document.createElement('p');
        p6.className = 'linha';
        p6.innerHTML = '<strong>Numero de alarmes:</strong> ' + qtdalarme; // Substitua por valor real
        div.appendChild(p6);
        
        let directionValue = tbproxhb[sitename][direction];
        let p7 = document.createElement('p');
        p7.className = 'linha';
        p7.innerHTML = '<strong>Proximo HB:</strong> ' + directionValue;
        div.appendChild(p7);
        
        // Adicione o div ao DOM
        flexContainer.appendChild(div);

       //montar tabela analise
        let tbanalise = document.createElement('table');
        tbanalise.className = 'tabela-analise'; // Adicione a classe à tabela

        let headers = ['Análise', 'CH1', 'CH2'];
        let rows = [
            ['Temperatura Média', mediaCh1, mediaCh2],
            ['Desvio Padrão (DP)', desvioCh1, desvioCh2],
            ['Temperatura Crítica (N1)', ch1CriticaN1, ch2CriticaN1],
            ['Low Limit (N1)', ch1LowLimitN1, ch2LowLimitN1],
            ['Temperatura Crítica (N2)', ch1CriticaN2, ch2CriticaN2],
            ['Low Limit (N2)', ch1LowLimitN2, ch2LowLimitN2],
            ['Maior Temperatura', maiorCh1, maiorCh2,],
            ['Nível SIGMA', sigmaCh1, sigmaCh2]
        ];

        let thead = document.createElement('thead');
        let headerRow = document.createElement('tr');
        headers.forEach(header => {
            let th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        tbanalise.appendChild(thead);

        let tbody = document.createElement('tbody');
        rows.forEach((rowData, i) => {
            let row = document.createElement('tr');
            rowData.forEach((cellData, j) => {
                let cell = document.createElement('td');
                if (j === 0) {
                    cell.className = 'analise';
                } else {
                    cell.className = 'ch';
                }
                cell.textContent = cellData;
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
        tbanalise.appendChild(tbody);

        // Adicione o div ao DOM
        flexContainer.appendChild(tbanalise);
        
        //montar tabela veiculos
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

