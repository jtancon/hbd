export function displayData(extractedData) {
    const container = document.getElementById('dataContainer');

    extractedData.forEach(item => {
        const div = document.createElement('div');
        const arrival = item.cabecalhoLeitura.state.reported.arrival;
        const sitename = item.cabecalhoLeitura.state.reported.siteName;
        const absoluto = item.fichaTrem.trem.absolut;
        div.textContent = arrival;
        div.textContent = sitename;
        div.textContent = absoluto;
        container.appendChild(div);
    });
}
