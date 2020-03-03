document.getElementById('button1').addEventListener('click', showDatas);
document.getElementById('button2').addEventListener('click', showIncomes);


function showDatas() {
    fetch('https://recruitment.hal.skygate.io/companies')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let html = '';
            data.forEach(company => {
                html += `
                <div class="result--item">
                    <div class="companies--item">${company.id}</div>
                    <div class="companies--item">${company.name}</div>
                    <div class="companies--item">${company.city}</div>
                </div>
                `;

            });
            document.getElementById('companies').innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        })
};

function showIncomes() {
    fetch('https://recruitment.hal.skygate.io/incomes/:id')
        .then(response => {
            return response.text();
        })
        .then(data => {
            console.log(data);
            let html = '';
            data.forEach(income => {
                html += `
                <li>${income.id}</li>
                <li>${income.value}</li>
                <li>${income.date}</li>
                `;

            });
            document.getElementById('incomes').innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        })
}