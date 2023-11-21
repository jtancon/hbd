export function displayData(extractedData) {
    const container = document.getElementById('dataContainer');

    extractedData.forEach(item => {
        const div = document.createElement('div');
        const arrival = item.cabecalhoLeitura.state.reported.arrival;
        div.textContent = arrival;
        container.appendChild(div);
    });
}