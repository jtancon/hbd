export function displayData(extractedData) {
    let pontosCh1 = [];
    let pontosCh2 = [];

    if (!Array.isArray(extractedData)) {
        console.error('extractedData deve ser um array');
        return;
    }
    const tbfalhas = [
        {
            problemaOriginal: "failTransducerSignalMiscount",
            traducaoFalha: "Falha na Contagem de Sinal do Transdutor",
            possivelCausa: "- Limalha de metal acumulado sobre transdutores\n- Pedra ou metal sob os transdutores\n- Transdutor solto ou fora de alinhamento\n- Fios do transdutor com polaridade invertida\n- Transdutor danificado\n- Impedância do Transdutor fora da faixa de tolerância\n- Mau contato nas conexões internas à case\n- Tensão de saída do transdutor fora da faixa de tolerância",
            acaoNecessaria: "- Remover o excesso de metal\n- Verificar objetos sob os transdutores\n- Fixar e alinhar o transdutor\n- Verificar polaridade dos fios\n- Substituir transdutor\n- Testar e substituir cabos e conexões\n- Verificar e corrigir a tensão de saída do transdutor."
        },
        {
            problemaOriginal: "failCalibrationNotComplete",
            traducaoFalha: "Falha na Calibração não Concluída",
            possivelCausa: "- Scanners não calibrados\n- Calibradores mal posicionados ou configurados\n- Scanner sujo ou obstruído\n- Calibrador ligado por um longo período\n- Temperatura Ambiente informada incorretamente\n- Scanner desalinhado\n- Placa de interface dos scanners ou Placa Analógica com defeito\n- Proteções ruins ou mau contato na fiação interna\n- Cabo ou Scanner com defeito",
            acaoNecessaria: "- Realizar a calibração\n- Verificar posição e configuração do calibrador\n- Limpar scanners\n- Desligar calibrador por 15 minutos\n- Corrigir informação de temperatura ambiente\n- Alinhar scanners\n- Substituir placas com defeito\n- Verificar e corrigir proteções e fiação interna\n- Testar e substituir cabo ou scanner."
        },
        {
            problemaOriginal: "failPowerRest",
            traducaoFalha: "Falha no Restabelecimento de Energia",
            possivelCausa: "- Inversor não conectado\n- Inversor desligado ou necessitando reset\n- Inversor não fornece a tensão necessária",
            acaoNecessaria: "- Conectar o inversor\n- Ligar ou resetar o inversor\n- Verificar a tensão de saída do inversor e substituir se necessário."
        },
        {
            problemaOriginal: "failBadSensor1",
            traducaoFalha: "Falha no Sensor 1",
            possivelCausa: "- Scanner desconectado\n- Alimentação +/- 5Vdc ausente\n- Tempo de alimentação do Aquecedor de Integridade muito curto\n- Máxima temperatura para o Teste de Integridade muito elevada\n- Lentes ou Espelhos sujos\n- Fiação interna ao scanner rompida ou com mau contato\n- Aquecedor de Integridade com defeito\n- Obturador emperrado ou entreaberto",
            acaoNecessaria: "- Verificar conexões do scanner\n- Verificar 5 Vdc no pirômetro\n- Verificar tempo de alimentação\n- Verificar parâmetro Max Heat for Scanner Test\n- Limpar lentes e espelhos\n- Refazer conexões ou substituir o scanner\n- Medir impedância do Integrity Heater\n- Verificar obturador e substituir se necessário."
        },
        {
            problemaOriginal: "failBadSensor2",
            traducaoFalha: "Falha no Sensor 2",
            possivelCausa: "- Scanner desconectado\n- Alimentação +/- 5Vdc ausente\n- Tempo de alimentação do Aquecedor de Integridade muito curto\n- Máxima temperatura para o Teste de Integridade muito elevada\n- Lentes ou Espelhos sujos\n- Fiação interna ao scanner rompida ou com mau contato\n- Aquecedor de Integridade com defeito\n- Obturador emperrado ou entreaberto",
            acaoNecessaria: "- Verificar conexões do scanner\n- Verificar 5 Vdc no pirômetro\n- Verificar tempo de alimentação\n- Verificar parâmetro Max Heat for Scanner Test\n- Limpar lentes e espelhos\n- Refazer conexões ou substituir o scanner\n- Medir impedância do Integrity Heater\n- Verificar obturador e substituir se necessário."
        },
        {
            problemaOriginal: "failScannerMalfunctionCh1",
            traducaoFalha: "Falha no Scanner - Malfuncionamento CH1",
            possivelCausa: "Perfil de rolamento atípico detectado",
            acaoNecessaria: "- Manutenção necessária\n- Trocar Pirômetro\n- Cabo do Scanner ou Scanner."
        },
        {
            problemaOriginal: "failScannerMalfunctionCh2",
            traducaoFalha: "Falha no Scanner - Malfuncionamento CH2",
            possivelCausa: "Perfil de rolamento atípico detectado",
            acaoNecessaria: "- Manutenção necessária\n- Trocar Pirômetro\n- Cabo do Scanner ou Scanner."
        },
        {
            problemaOriginal: "sysWarnTransducerSignalMiscount",
            traducaoFalha: "Aviso do Sistema - Falha na Contagem de Sinal do Transdutor",
            possivelCausa: "- Limalha de metal acumulado sobre transdutores\n- Pedra ou metal sob os transdutores\n- Transdutor solto ou fora de alinhamento\n- Fios do transdutor com polaridade invertida\n- Transdutor danificado\n- Impedância do Transdutor fora da faixa de tolerância\n- Mau contato nas conexões internas à case\n- Tensão de saída do transdutor fora da faixa de tolerância",
            acaoNecessaria: "- Remover o excesso de metal\n- Verificar objetos sob os transdutores\n- Fixar e alinhar o transdutor\n- Verificar polaridade dos fios\n- Substituir transdutor\n- Testar e substituir cabos e conexões\n- Verificar e corrigir a tensão de saída do transdutor."
        },
        {
            problemaOriginal: "sysWarnPowerReset",
            traducaoFalha: "Aviso do Sistema - Restabelecimento de Energia",
            possivelCausa: "- Inversor não conectado\n- Inversor desligado ou necessitando reset\n- Inversor não fornece a tensão necessária",
            acaoNecessaria: "- Conectar o inversor\n- Ligar ou resetar o inversor\n- Verificar a tensão de saída do inversor e substituir se necessário."
        },
        {
            problemaOriginal: "sysWarnLowVoltage",
            traducaoFalha: "Aviso do Sistema - Baixa Tensão",
            possivelCausa: "- Fonte de alimentação externa não conectada\n- Bateria descarregada\n- Conexões soltas ou corroídas",
            acaoNecessaria: "- Conectar fonte de alimentação\n- Carregar ou substituir bateria\n- Verificar e fixar conexões."
        },
        {
            problemaOriginal: "sysWarnAcPowerFailure",
            traducaoFalha: "Aviso do Sistema - Falha de Energia AC",
            possivelCausa: "- Falha na rede elétrica AC\n- Disjuntor desligado\n- Conexões soltas ou corroídas",
            acaoNecessaria: "- Verificar fornecimento de energia AC\n- Ligar disjuntor\n- Verificar e fixar conexões."
        },
        {
            problemaOriginal: "sysWarnScannerMalfunctionCh1",
            traducaoFalha: "Aviso do Sistema - Malfuncionamento do Scanner CH1",
            possivelCausa: "Perfil de rolamento atípico detectado",
            acaoNecessaria: "- Manutenção necessária\n- Trocar Pirômetro\n- Cabo do Scanner ou Scanner."
        },
        {
            problemaOriginal: "sysWarnScannerMalfunctionCh2",
            traducaoFalha: "Aviso do Sistema - Malfuncionamento do Scanner CH2",
            possivelCausa: "Perfil de rolamento atípico detectado",
            acaoNecessaria: "- Manutenção necessária\n- Trocar Pirômetro\n- Cabo do Scanner ou Scanner."
        },
        {
            problemaOriginal: "sysWarnScannerMalfunctionChe",
            traducaoFalha: "Aviso do Sistema - Malfuncionamento do Scanner Che",
            possivelCausa: "Perfil de rolamento atípico detectado",
            acaoNecessaria: "- Manutenção necessária\n- Trocar Pirômetro\n- Cabo do Scanner ou Scanner."
        },
        {
            problemaOriginal: "sysWarnScannerMalfunctionChd",
            traducaoFalha: "Aviso do Sistema - Malfuncionamento do Scanner Chd",
            possivelCausa: "Perfil de rolamento atípico detectado",
            acaoNecessaria: "- Manutenção necessária\n- Trocar Pirômetro\n- Cabo do Scanner ou Scanner."
        },
        {
            problemaOriginal: "failScannerMalfunctionChe",
            traducaoFalha: "Falha no Scanner - Malfuncionamento Che",
            possivelCausa: "Perfil de rolamento atípico detectado",
            acaoNecessaria: "- Manutenção necessária\n- Trocar Pirômetro\n- Cabo do Scanner ou Scanner."
        },
        {
            problemaOriginal: "failScannerMalfunctionChd",
            traducaoFalha: "Falha no Scanner - Malfuncionamento Chd",
            possivelCausa: "Perfil de rolamento atípico detectado",
            acaoNecessaria: "- Manutenção necessária\n- Trocar Pirômetro\n- Cabo do Scanner ou Scanner."
        },
        {
            problemaOriginal: "axleDivergence",
            traducaoFalha: "Divergência de Eixo",
            possivelCausa: "Divergência excessiva entre os eixos",
            acaoNecessaria: "- Realizar alinhamento adequado\n- Verificar condição dos eixos."
        },
        {
            problemaOriginal: "axleGroupError",
            traducaoFalha: "Erro no Grupo de Eixos",
            possivelCausa: "- Falha na comunicação entre os sensores de eixos\n- Configuração de grupo incorreta",
            acaoNecessaria: "- Verificar cabos e conexões\n- Corrigir configuração de grupo."
        },
        {
            problemaOriginal: "mergeTrainRecordError",
            traducaoFalha: "Erro ao Mesclar Registro de Trem",
            possivelCausa: "Falha ao mesclar registros de trens",
            acaoNecessaria: "- Verificar integridade dos dados\n- Corrigir falhas no processo de mesclagem."
        }
    ];
    
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
        'Phoenix MB -Pimenta': { 'Sul': '58 km (ZXI-ZKE)', 'Norte': '58 km (ZXI-ZKE)' },
        'PHOENIX MB Canguera': { 'Sul': '-', 'Norte': '133 km(ZKE-ZAC)' },
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

    let absoluto;
    let ch1LowLimitN1, ch1CriticaN1, ch1LowLimitN2, ch1CriticaN2;
    let ch2LowLimitN1, ch2CriticaN1, ch2LowLimitN2, ch2CriticaN2;




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
                        carregado: veiculoLido.isLoad === true ? "Carregado" : veiculoLido.isLoad === false ? "Vazio" : "n/a",
                        axle: a.axleNum || "n/a",
                        ch1: a.ch1 || "n/a",
                        ch2: a.ch2 || "n/a",
                        ch3: a.ch3 || "n/a",
                        ch4: a.ch4 || "n/a"
                    };
                    tbVeiculoslidosResumo.push(linha);
                });
            }
        });



        //quantidade de locomotivas e vagões
        let countLocomotiva = 0;
        let countVagao = 0;
        let countedNumbers = {};
        let posicoesLocomotivas = [];
        
        for (let i = 0; i < tbVeiculoslidosResumo.length; i++) {
            if (!countedNumbers[tbVeiculoslidosResumo[i].number]) {
                if (tbVeiculoslidosResumo[i].tipo === "Locomotiva") {
                    countLocomotiva++;
                    posicoesLocomotivas.push(tbVeiculoslidosResumo[i].number);
                } else if (tbVeiculoslidosResumo[i].tipo === "Vagão") {
                    countVagao++;
                }
                countedNumbers[tbVeiculoslidosResumo[i].number] = true;
            }
        }

        //cria as variaveis para usar na div status geral
        const arrival = item.cabecalhoLeitura.state.reported.arrival;
        const sitename = item.cabecalhoLeitura.state.reported.siteName || item.thing.thingName;
        absoluto = item.fichaTrem.trem.absolut;
        localStorage.setItem('absoluto', absoluto);
        const checkAxle = item.cabecalhoLeitura.state.reported.divergence?.checkAxle || 0;
        const fichaAxles = item.cabecalhoLeitura.state.reported.divergence?.fichaAxles || 0;
        const qtdalarme = item.cabecalhoLeitura.state.reported.systemWarning || 0;
        const direction = item.cabecalhoLeitura.state.reported.direction;
        const checkVehicles = item.cabecalhoLeitura.state.reported.divergence?.checkVehicles || 0;
        const fichaTrem = item.cabecalhoLeitura.state.reported.divergence?.fichaVehicles || 0;
        const speedInOut = item.cabecalhoLeitura.state.reported.speedInOut;
          
        
        let alarmesCabecalho = document.getElementById('alarmesCabecalho');
        

        //verifica as falhas e mostra na div alarmesCabecalho
        let falhas = [
            'failTransducerSignalMiscount',
            'failCalibrationNotComplete',
            'failPowerRest',
            'failBadSensor1',
            'failBadSensor2',
            'failScannerMalfunctionCh1',
            'failScannerMalfunctionCh2',
            'sysWarnTransducerSignalMiscount',
            'sysWarnPowerReset',
            'sysWarnLowVoltage',
            'sysWarnAcPowerFailure',
            'sysWarnScannerMalfunctionCh1',
            'sysWarnScannerMalfunctionCh2',
            'sysWarnScannerMalfunctionChe',
            'sysWarnScannerMalfunctionChd',
            'failScannerMalfunctionChe',
            'failScannerMalfunctionChd',
            'criticalTendanceAlarm',
            'axleDivergence',
            'axleGroupError',
            'mergeTrainRecordError'
        ];
        
        falhas.forEach(falha => {
            if (item.cabecalhoLeitura.state.reported[falha] === true) {
                let falhaInfo = tbfalhas.find(f => f.problemaOriginal === falha);
                if (falhaInfo) {
                    let p = document.createElement('p');
                    p.innerHTML = `<strong style='color: red; font-size: 13px;'> ${falhaInfo.traducaoFalha}</strong><br><strong>Possível Causa:</strong><br> ${falhaInfo.possivelCausa.replace(/\n/g, '<br>')}<br><br><strong>Ação Necessária:</strong><br> ${falhaInfo.acaoNecessaria.replace(/\n/g, '<br>')}<br>`;
                    alarmesCabecalho.appendChild(p);
                } 
            }
        });

        //funcao de verificar antes de calcular N1 e N2 (low limit e temperatura critica)
        function calculateN1N2(sitename, mean, standardDeviation) {
            const lowLimitN1 = (sitename === "LAR" || sitename === "LPJ" || sitename === "LRF" || sitename === "LUV" || sitename === "LVZ" || sitename === "NCY") ? 33 : 35;
            const criticalN1 = (mean + 6 * standardDeviation > lowLimitN1) ? mean + 6 * standardDeviation : lowLimitN1;
            const lowLimitN2 = (sitename === "LAR" || sitename === "LPJ" || sitename === "LRF" || sitename === "LUV" || sitename === "LVZ" || sitename === "NCY") ? 33 : 38;
            const criticalN2 = (mean + 7 * standardDeviation > lowLimitN2) ? mean + 7 * standardDeviation : lowLimitN2;
            return { lowLimitN1, criticalN1, lowLimitN2, criticalN2 };
        }

        //2 axle com maior temperatura ch1
        let maiorCh1Axle = tbVeiculoslidosResumo.reduce((maior, linha) => linha.ch1 !== "n/a" ? linha.ch1 > maior ? linha.ch1 : maior : maior, 0);
        let maiorCh1Axle2 = tbVeiculoslidosResumo.reduce((maior, linha) => linha.ch1 !== "n/a" && linha.ch1 < maiorCh1Axle ? linha.ch1 > maior ? linha.ch1 : maior : maior, 0);

        //2 axle com maior temperatura ch2
        let maiorCh2Axle = tbVeiculoslidosResumo.reduce((maior, linha) => linha.ch2 !== "n/a" ? linha.ch2 > maior ? linha.ch2 : maior : maior, 0);
        let maiorCh2Axle2 = tbVeiculoslidosResumo.reduce((maior, linha) => linha.ch2 !== "n/a" && linha.ch2 < maiorCh2Axle ? linha.ch2 > maior ? linha.ch2 : maior : maior, 0);

        console.log(maiorCh1Axle, maiorCh1Axle2, maiorCh2Axle, maiorCh2Axle2);

        //organizar dados para tabela analise (media ch1, desvio padrao, temperatura critica, low limit, maior temperatura, nivel sigma)
        //media ch1
        let somaCh1 = tbVeiculoslidosResumo.reduce((soma, linha) => linha.ch1 !== "n/a" ? soma + linha.ch1 : soma, 0);
        let countCh1 = tbVeiculoslidosResumo.reduce((count, linha) => linha.axle !== "n/a" ? count + 1 : count, 0);
        //item.fichaTrem.trem.calculusSummary.averages.avgTemperatureCh1
        let mediaCh1;
        if (item.fichaTrem.trem.calculusSummary.averages.avgTemperatureCh1) {
            mediaCh1 = parseFloat(item.fichaTrem.trem.calculusSummary.averages.avgTemperatureCh1).toFixed(2);
        } else {
            mediaCh1 = parseFloat((somaCh1 / countCh1).toFixed(2));
        }
        console.log(parseFloat((somaCh1 / countCh1).toFixed(2)));
        //média ch2
        let somaCh2 = tbVeiculoslidosResumo.reduce((soma, linha) => linha.ch2 !== "n/a" ? soma + linha.ch2 : soma, 0);
        let countCh2 = tbVeiculoslidosResumo.reduce((count, linha) => linha.axle !== "n/a" ? count + 1 : count, 0);
        let mediaCh2;
        if (item.fichaTrem.trem.calculusSummary.averages.avgTemperatureCh2) {
            mediaCh2 = parseFloat(item.fichaTrem.trem.calculusSummary.averages.avgTemperatureCh2).toFixed(2);
        } else {
            mediaCh2 = parseFloat((somaCh2 / countCh2).toFixed(2));
        }
        console.log(parseFloat((somaCh2 / countCh2).toFixed(2)));

        //diferença entre ch1 e ch2
        let diffCh1Ch2 = Math.abs(mediaCh1 - mediaCh2);

        //desvio padrao ch1
        let somaDesvioCh1 = tbVeiculoslidosResumo.reduce((soma, linha) => linha.ch1 !== "n/a" ? soma + Math.pow(linha.ch1 - mediaCh1, 2) : soma, 0);
        let desvioCh1;
        if (item.fichaTrem.trem.calculusSummary.deviations.deviationTemperatureCh1) {
            desvioCh1 = parseFloat(item.fichaTrem.trem.calculusSummary.deviations.deviationTemperatureCh1).toFixed(2);
        } else {
            desvioCh1 = parseFloat(Math.sqrt(somaDesvioCh1 / countCh1).toFixed(2));
        }
        //desvio padrao ch2
        let somaDesvioCh2 = tbVeiculoslidosResumo.reduce((soma, linha) => linha.ch2 !== "n/a" ? soma + Math.pow(linha.ch2 - mediaCh2, 2) : soma, 0);
        let desvioCh2;
        if (item.fichaTrem.trem.calculusSummary.deviations.deviationTemperatureCh2) {
            desvioCh2 = parseFloat(item.fichaTrem.trem.calculusSummary.deviations.deviationTemperatureCh2).toFixed(2);
        } else {
            desvioCh2 = parseFloat(Math.sqrt(somaDesvioCh2 / countCh2).toFixed(2));
        }
        
        // Atribua valores a elas dentro do escopo atual
        ({ lowLimitN1: ch1LowLimitN1, criticalN1: ch1CriticaN1, lowLimitN2: ch1LowLimitN2, criticalN2: ch1CriticaN2 } = calculateN1N2(sitename, mediaCh1, desvioCh1));
        ({ lowLimitN1: ch2LowLimitN1, criticalN1: ch2CriticaN1, lowLimitN2: ch2LowLimitN2, criticalN2: ch2CriticaN2 } = calculateN1N2(sitename, mediaCh2, desvioCh2));  
        
        //maior temperatura ch1
        let maiorCh1 = tbVeiculoslidosResumo.reduce((maior, linha) => linha.ch1 !== "n/a" ? linha.ch1 > maior ? linha.ch1 : maior : maior, 0);
        //maior temperatura ch2
        let maiorCh2 = tbVeiculoslidosResumo.reduce((maior, linha) => linha.ch2 !== "n/a" ? linha.ch2 > maior ? linha.ch2 : maior : maior, 0);
        //nivel sigma ch1
        let sigmaCh1 = parseFloat(((maiorCh1 - mediaCh1) / desvioCh1).toFixed(2));
        //nivel sigma ch2
        let sigmaCh2 = parseFloat(((maiorCh2 - mediaCh2) / desvioCh2).toFixed(2));

        // Teste de freio agarrado
        let alarmesFreioAgarrado = [];
        let veiculosVerificados = {};

        // Agrupa os dados por 'number'
        let grupos = {};
        for (let i = 0; i < tbVeiculoslidosResumo.length; i++) {
            let number = tbVeiculoslidosResumo[i].number;
            if (!grupos[number]) {
                grupos[number] = [];
            }
            grupos[number].push(tbVeiculoslidosResumo[i]);
        }

        // Verifica se o maior 'ch1' e 'ch2' estão no mesmo 'number'
        for (let number in grupos) {
            let maiorCh1NoGrupo = Math.max(...grupos[number].map(item => typeof item.ch1 === 'number' ? +item.ch1.toFixed(2) : -Infinity));
            let maiorCh2NoGrupo = Math.max(...grupos[number].map(item => typeof item.ch2 === 'number' ? +item.ch2.toFixed(2) : -Infinity));

            if ((maiorCh1NoGrupo === +maiorCh1.toFixed(2) && maiorCh1NoGrupo > 23) &&
                (maiorCh2NoGrupo === +maiorCh2.toFixed(2) && maiorCh2NoGrupo > 23)) {
                alarmesFreioAgarrado.push(number);
            }
        }

        //teste de temperatura alta no mesmo canal
        let contagemCh1 = tbVeiculoslidosResumo.filter(veiculo => veiculo.ch2 > maiorCh1).length;
        let contagemCh2 = tbVeiculoslidosResumo.filter(veiculo => veiculo.ch1 > maiorCh2).length;
        let alarmeTemperaturaAlta = "<span style='color: green;'><strong>Sem temperaturas altas em unico canal.</strong></span>";

        if (maiorCh1 > 23 && contagemCh2 >= 3) {
            alarmeTemperaturaAlta = "<span style='color: red;'><strong>Temperaturas altas no mesmo canal: CH1.</strong></span>";
        }
        
        if (maiorCh2 > 23 && contagemCh1 >= 3) {
            alarmeTemperaturaAlta = "<span style='color: red;'><strong>Temperaturas altas no mesmo canal: CH2.</strong></span>";
        }

        // DIV para o status geral
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
        
        let p5 = document.createElement('p');
        p5.className = 'linha';
        p5.innerHTML = '<strong>Velocidade:</strong> ' + speedInOut;
        div.appendChild(p5);

        let p6 = document.createElement('p');
        p6.className = 'linha';
        if (direction === 'South') {
            p6.innerHTML = '<strong>Sentido:</strong> Sul';
        } else if (direction === 'North') {
            p6.innerHTML = '<strong>Sentido:</strong> Norte';
        } else {
            p6.innerHTML = '<strong>Sentido:</strong> ' + direction;
        }
        div.appendChild(p6);

        let p7 = document.createElement('p');
        p7.className = 'linha';
        p7.innerHTML = '<strong>Absoluto:</strong> ' + absoluto;
        div.appendChild(p7);
        
        let p8 = document.createElement('p');
        p8.className = 'linha';
        p8.innerHTML = '<strong>Numero de veiculos:</strong> Contados ' + checkVehicles + ' - Ficha ' + fichaTrem; // Substitua por valor real
        div.appendChild(p8);

        let p9 = document.createElement('p');
        p9.className = 'linha';
        p9.innerHTML = '<strong>Numero de eixos:</strong> Contados ' + checkAxle + ' - Ficha ' + fichaAxles; // Substitua por valor real
        div.appendChild(p9);
        
        let p10 = document.createElement('p');
        p10.className = 'linha';
        p10.innerHTML = '<strong>Numero de alarmes:</strong> ' + qtdalarme; // Substitua por valor real
        div.appendChild(p10);
        
        let directionValue = tbproxhb[sitename]?.[direction] ?? '';
        let p11 = document.createElement('p');
        p11.className = 'linha';
        p11.innerHTML = '<strong>Proximo HB:</strong> ' + directionValue;
        div.appendChild(p11);

        //posição das locomotivas
        let p12 = document.createElement('p');
        p12.className = 'linha';
        p12.innerHTML = '<strong>Posição das locomotivas:</strong> ' + posicoesLocomotivas.join(", ");
        div.appendChild(p12);
        
        // Adicione o div ao DOM
        flexContainer.appendChild(div);

       //montar tabela analise
        let tbanalise = document.createElement('table');
        tbanalise.className = 'tabela-analise'; // Adicione a classe à tabela

        let headers = ['Análise', 'CH1', 'CH2'];
        let rows = [
            ['Temperatura Média', mediaCh1, mediaCh2],
            ['Desvio Padrão (DP)', desvioCh1, desvioCh2],
            ['Temperatura Crítica (N1)', parseFloat(ch1CriticaN1).toFixed(2), parseFloat(ch2CriticaN1).toFixed(2)],
            ['Low Limit (N1)', parseFloat(ch1LowLimitN1).toFixed(2), parseFloat(ch2LowLimitN1).toFixed(2)],
            ['Temperatura Crítica (N2)', parseFloat(ch1CriticaN2).toFixed(2), parseFloat(ch2CriticaN2).toFixed(2)],
            ['Low Limit (N2)', parseFloat(ch1LowLimitN2).toFixed(2), parseFloat(ch2LowLimitN2).toFixed(2)],
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

        //menor valor de criticalN1 e criticalN2
        let menorCriticaN1 = Math.min(ch1CriticaN1, ch2CriticaN1);
        let menorCriticaN2 = Math.min(ch1CriticaN2, ch2CriticaN2);

        // Teste de Tendência critica de rolamento
        let alarmesTendenciacritican1 = [];
        let veiculosVerificados2 = {};

        for (let i = 0; i < tbVeiculoslidosResumo.length; i++) {
            if (!veiculosVerificados2[tbVeiculoslidosResumo[i].axle]) {
                if (((tbVeiculoslidosResumo[i].ch1 > menorCriticaN1) && (tbVeiculoslidosResumo[i].ch1 < menorCriticaN2)) || 
                ((tbVeiculoslidosResumo[i].ch2 > menorCriticaN1) && (tbVeiculoslidosResumo[i].ch2 < menorCriticaN2))) {
                    alarmesTendenciacritican1.push(tbVeiculoslidosResumo[i].axle);
                }
                veiculosVerificados2[tbVeiculoslidosResumo[i].axle] = true;
            }
        }

        // Teste de Tendência critica de rolamento para N2
        let alarmesTendenciacritican2 = [];
        let veiculosVerificados3 = {};

        for (let i = 0; i < tbVeiculoslidosResumo.length; i++) {
            if (!veiculosVerificados3[tbVeiculoslidosResumo[i].axle]) {
                if ((tbVeiculoslidosResumo[i].ch1 > menorCriticaN2) || 
                    (tbVeiculoslidosResumo[i].ch2 > menorCriticaN2)) {
                    alarmesTendenciacritican2.push(tbVeiculoslidosResumo[i].axle);
                }
                veiculosVerificados3[tbVeiculoslidosResumo[i].axle] = true;
            }
        }

        // Monta tabela de veículos com alarme de freio agarrado
        let veiculosComAlarmeFA = tbVeiculoslidosResumo.filter(veiculo => alarmesFreioAgarrado.includes(veiculo.number.toString()));

        veiculosComAlarmeFA = veiculosComAlarmeFA.map(veiculo => {
            return {...veiculo, alarme: "Freio agarrado"};
        });

        // Monta tabela de veículos com alarme de Tendência critica de rolamento N1
        let veiculosComAlarmeTPN1 = tbVeiculoslidosResumo.filter(veiculo => alarmesTendenciacritican1.includes(veiculo.axle));

        veiculosComAlarmeTPN1 = veiculosComAlarmeTPN1.map(veiculo => {
            return {...veiculo, alarme: "Tendência critica de rolamento N1"};
        });

        // Monta tabela de veículos com alarme de Tendência critica de rolamento N2
        let veiculosComAlarmeTPN2 = tbVeiculoslidosResumo.filter(veiculo => alarmesTendenciacritican2.includes(veiculo.axle));

        veiculosComAlarmeTPN2 = veiculosComAlarmeTPN2.map(veiculo => {
            return {...veiculo, alarme: "Tendência critica de rolamento N2"};
        });

        //alarmes absoluto
        let alarmesAbsoluto = [];
        let veiculosVerificados4 = {};

        for (let i = 0; i < tbVeiculoslidosResumo.length; i++) {
            if (!veiculosVerificados4[tbVeiculoslidosResumo[i].axle]) {
                if ((tbVeiculoslidosResumo[i].ch1 > absoluto) ||
                    (tbVeiculoslidosResumo[i].ch2 > absoluto)) {
                    alarmesAbsoluto.push(tbVeiculoslidosResumo[i].axle);
                }
                veiculosVerificados4[tbVeiculoslidosResumo[i].axle] = true;
            }
        }

        // Monta tabela de veículos com alarme de Absoluto
        let veiculosComAlarmeAbsoluto = tbVeiculoslidosResumo.filter(veiculo => alarmesAbsoluto.includes(veiculo.axle));

        veiculosComAlarmeAbsoluto = veiculosComAlarmeAbsoluto.map(veiculo => {
            return {...veiculo, alarme: "Absoluto"};
        });

        // Combina todas as listas de veículos com alarmes
        let veiculosComAlarmes = [...veiculosComAlarmeFA, ...veiculosComAlarmeTPN1, ...veiculosComAlarmeTPN2, ...veiculosComAlarmeAbsoluto];

        // Montar tabela de veículos com alarmes
        let tbalarmesContainer = document.getElementById("alarmesContainer");

        let tbalarmesTable = document.createElement("table");
        tbalarmesTable.className = "tbalarmesTable"; // Adicionando a classe aqui

        let tbalarmesHeaderRow = document.createElement("tr");
        ["Veículo", "Eixo", "Tipo", "Série", "CH1", "CH2", "Carregado","Alarme"].forEach(text => {
            let tbalarmesHeader = document.createElement("th");
            tbalarmesHeader.textContent = text;
            tbalarmesHeaderRow.appendChild(tbalarmesHeader);
        });
        tbalarmesTable.appendChild(tbalarmesHeaderRow);
        veiculosComAlarmes.forEach(veiculo => {
            let tbalarmesRow = document.createElement("tr");
            [veiculo.number, veiculo.axle, veiculo.tipo, veiculo.veiculo, veiculo.ch1, veiculo.ch2, veiculo.carregado, veiculo.alarme].forEach(text => {
                let tbalarmesCell = document.createElement("td");
                tbalarmesCell.textContent = text;
                tbalarmesRow.appendChild(tbalarmesCell);
            });
            tbalarmesTable.appendChild(tbalarmesRow);
        });

        tbalarmesContainer.appendChild(tbalarmesTable);

        // Verifica se a tabela está vazia
        if (tbalarmesTable.children.length === 1) {
            document.getElementById("alarmes").style.display = "none";
        }

                // DIV para os alarmes
                let divAlarmes = document.createElement('div');
                divAlarmes.className = 'DIVAlarmes';
        
                // Título da div
                let titulo = document.createElement('h2');
                titulo.textContent = 'Alarmes';
                divAlarmes.appendChild(titulo);
        
        
                //linha alarme de diferença entre ch1 e ch2
                let diffalarme = diffCh1Ch2 > 2.4 ? "<span style='color: red;'><strong>Diferença entre CH1 e CH2:</strong> " + parseFloat(diffCh1Ch2).toFixed(2) + "- Alta diferença entre CH1 e CH2.</span>" : "<span style='color: green;'><strong>Diferença entre CH1 e CH2:</strong> " + parseFloat(diffCh1Ch2).toFixed(2) + " - Diferença ok.</span>";
        
                let linha = document.createElement('p');
                linha.className = 'linha';
                linha.innerHTML = diffalarme;
                divAlarmes.appendChild(linha);
        
                let diffVehicles = Math.abs(fichaTrem - checkVehicles);
                let diffVehiclesAlarme = diffVehicles > 2.4 ? "<span style='color: red;'><strong>Diferença entre veiculos contados e ficha:</strong> " + parseFloat(diffVehicles).toFixed(0) + " - Existe diferença.</span>" : "<span style='color: green;'><strong>Diferença entre veiculos contados e ficha:</strong> " + parseFloat(diffVehicles).toFixed(0) + " - Diferença ok.</span>";
        
                let linhaVehicles = document.createElement('p');
                linhaVehicles.className = 'linha';
                linhaVehicles.innerHTML = diffVehiclesAlarme;
                divAlarmes.appendChild(linhaVehicles);
        
                let diffAxles = Math.abs(checkAxle - fichaAxles);
                let diffAxlesAlarme = diffAxles > 2.4 ? "<span style='color: red;'><strong>Diferença entre eixos contatos e ficha:</strong> " + parseFloat(diffAxles).toFixed(0) + " - Existe diferença.</span>" : "<span style='color: green;'><strong>Diferença entre eixos contatos e ficha:</strong> " + parseFloat(diffAxles).toFixed(0) + " - Diferença ok.</span>";
        
                let linhaAxles = document.createElement('p');
                linhaAxles.className = 'linha';
                linhaAxles.innerHTML = diffAxlesAlarme;
                divAlarmes.appendChild(linhaAxles);

                //alarme de freio agarrado
                let linhaAlarmeFA = document.createElement('p');
                linhaAlarmeFA.className = 'linha';
                
                if (alarmesFreioAgarrado.length > 0) {
                    linhaAlarmeFA.innerHTML = "<span style='color: red;'><strong>Alarme de freio agarrado no veiculo:</strong> " + alarmesFreioAgarrado.join(", ") + "</span>" ;
                } else {
                    linhaAlarmeFA.innerHTML = "<span style='color: green;'><strong>Sem freio agarrado.</strong></span>" ;
                }

                divAlarmes.appendChild(linhaAlarmeFA);

                //alarme de tendencia critica de rolamento N1
                let linhaAlarmeTPN1 = document.createElement('p');
                linhaAlarmeTPN1.className = 'linha';

                if (alarmesTendenciacritican1.length > 0) {
                    linhaAlarmeTPN1.innerHTML = "<span style='color: red;'><strong>Tendência critica de rolamento N1 nos eixos:</strong> " + alarmesTendenciacritican1.join(", ") + "</span>" ;
                } else {
                    linhaAlarmeTPN1.innerHTML = "<span style='color: green;'><strong>Sem tendência de rolamento N1.</strong></span>" ;
                }

                divAlarmes.appendChild(linhaAlarmeTPN1);

                //alarme de tendencia critica de rolamento N2
                let linhaAlarmeTPN2 = document.createElement('p');
                linhaAlarmeTPN2.className = 'linha';

                if (alarmesTendenciacritican2.length > 0) {
                    linhaAlarmeTPN2.innerHTML = "<span style='color: red;'><strong>Tendência critica de rolamento N2 nos eixos:</strong> " + alarmesTendenciacritican2.join(", ") + "</span>" ;
                } else {
                    linhaAlarmeTPN2.innerHTML = "<span style='color: green;'><strong>Sem tendência de rolamento N2.</strong></span>" ;
                }

                divAlarmes.appendChild(linhaAlarmeTPN2);

                //alarme de absoluto
                let linhaAlarmeAbsoluto = document.createElement('p');
                linhaAlarmeAbsoluto.className = 'linha';

                if (alarmesAbsoluto.length > 0) {
                    linhaAlarmeAbsoluto.innerHTML = "<span style='color: red;'><strong>Alarme de absoluto nos eixos:</strong> " + alarmesAbsoluto.join(", ") + "</span>" ;
                }

                divAlarmes.appendChild(linhaAlarmeAbsoluto);

                //temp alta no mesmo canal
                let linhaAlarmeTA = document.createElement('p');
                linhaAlarmeTA.className = 'linha';
                linhaAlarmeTA.innerHTML = alarmeTemperaturaAlta;

                divAlarmes.appendChild(linhaAlarmeTA);
                
                // Adicione a div ao DOM
                flexContainer.appendChild(divAlarmes);
    });
    
    let pontoSelecionado;  // Variável para armazenar o valor do ponto selecionado

    // Cria uma instância do gráfico
    const ctx = document.getElementById('meuGrafico').getContext('2d');
    // Encontre o maior valor de axleNum em pontosCh1 e pontosCh2
    let maxAxleNum = Math.max(
        Math.max(...pontosCh1.map(p => p.x)),
        Math.max(...pontosCh2.map(p => p.x))
    );
    const maxCh1 = Math.max(...pontosCh1.map(p => p.y));
    const maxCh2 = Math.max(...pontosCh2.map(p => p.y));
    const maxValue = Math.max(maxCh1, maxCh2);

    function isWithinRange(value, maxValue) {
        return value.y >= maxValue - 5 && value.y <= maxValue;
    }

     //menor valor de criticalN1 e criticalN2
     let menorCriticaN1 = Math.min(ch1CriticaN1, ch2CriticaN1);
     let menorCriticaN2 = Math.min(ch1CriticaN2, ch2CriticaN2);

    new Chart(ctx, {
        //criação do grafico
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Veículos Lidos - ch1',
                data: pontosCh1,
                pointBackgroundColor: 'blue',
                pointBorderColor: 'blue',
                pointHoverBackgroundColor: 'blue',
                pointHoverBorderColor: 'blue',
                datalabels: {
                    color: 'black',
                    font: {
                        weight: 'bold'
                    },
                    formatter: function(value, context) {
                        return value.y;
                    }
                }
            },
            {
                label: 'Veículos Lidos - ch2',
                data: pontosCh2,
                pointBackgroundColor: 'red',
                pointBorderColor: 'red',
                pointHoverBackgroundColor: 'red',
                pointHoverBorderColor: 'red',
                datalabels: {
                    color: 'black',
                    font: {
                        weight: 'bold'
                    },
                    formatter: function(value, context) {
                        return value.y;
                    }
                }
            }]
        },
        options: {
            onClick: function(evt) {
                const points = this.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
                if (points.length) {
                    const firstPoint = points[0];
                    const axleNum = this.data.datasets[firstPoint.datasetIndex].data[firstPoint.index].x;
                    pontoSelecionado = axleNum;  // Atualiza a variável com o valor de axleNum do ponto selecionado
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Número do Eixo'
                    },
                    max: maxAxleNum+5,  // Defina o valor máximo para o eixo X
                    grid: {
                        display: false  // Remova as grades do eixo X
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Temperatura'
                    },
                    grid: {
                        display: false  // Remova as grades do eixo Y
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
                },
                annotation: {
                    annotations: {
                        Absoluto: {
                            type: 'line',
                            yMin: absoluto,
                            yMax: absoluto,
                            borderColor: 'rgb(255, 99, 132)',
                            borderWidth: 2
                        },
                        N1: {
                            type: 'line',
                            yMin: menorCriticaN1,
                            yMax: menorCriticaN1,
                            borderColor: 'rgb(255, 255, 0)',
                            borderWidth: 2
                        },
                        N2: {
                            type: 'line',
                            yMin: menorCriticaN2,
                            yMax: menorCriticaN2,
                            borderColor: 'rgb(255, 165, 0)',
                            borderWidth: 2
                        }
                    }
                },
                datalabels: {
                    color: 'black',
                    display: true,  // Sempre exibe data labels
                    formatter: function(value, context) {
                        return value;  // Retorna o valor y do ponto de dados
                    }
                }
            }
        }
    });
    
}