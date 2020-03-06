let allData = [];
const tableHandler = document.getElementById('companies');

fetch('https://recruitment.hal.skygate.io/companies')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.length);
        allData = data;
        tableHandler.innerHTML = `<div class="container container__headers"><h2 class="container--item blue">id</h2> <h2 class="container--item orange">company name</h2><h2 class="container--item pink">total income</h2><h2 class="container--item green">city</h2><h2 class="container--item coral">average income</h2></div>
                                               
`
        let display =
            data.forEach((item, index) => {

                fetch("https://recruitment.hal.skygate.io/incomes/" + item.id)
                    .then(response => {
                        return response.json();
                    })
                    .then(data2 => {
                        const arrayOfValues = data2.incomes.map(v => v.value);
                        const totalIncome = arrayOfValues.reduce((a, b) => Number(a) + Number(b));
                        const sumTotalIncome = Math.floor(totalIncome)
                        const incomeAverage = sumTotalIncome / data2.incomes.length;

                        tableHandler.innerHTML += `
                        <div class="container">
                            <div class="container--item blue">${data2.id}</div>
                            <div class="container--item orange">${item.name}</div>
                            <div class="container--item pink">${sumTotalIncome} </div>
                            <div class="container--item green">${item.city}</div>
                            <div class="container--item coral">${incomeAverage}</div>
                        </div>
                        `;
                    })

            });

    })
    .catch(error => {
        console.error('Nie działa link');
    })


