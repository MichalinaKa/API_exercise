let allData = [];

fetch('https://recruitment.hal.skygate.io/companies')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.length);
        allData = data;
        // console.log(typeof allData);



        let display =
            data.forEach((item, index) => {
                // console.log(`Nr.${index}  ID firmy: ${item.id}, NAZWA FIRMY: ${item.name} PROWADZONA W:  ${item.city} `);
                fetch("https://recruitment.hal.skygate.io/incomes/" + item.id)
                    .then(response => {
                        return response.json();
                    })
                    .then(data2 => {
                        // console.log(data2);
                        const arrayOfValues = data2.incomes.map(v => v.value);
                        const totalIncome = arrayOfValues.reduce((a, b) => Number(a) + Number(b));


                        const sumTotalIncome = Math.floor(totalIncome)
                        const incomeAverage = sumTotalIncome / 50;
                        console.log(`Sredni przychód firmy to ${item.name} to ${incomeAverage}`)



                        // NIE USUWAJ!! to wyświetla datę id przychód;) Typeofweb
                        const arrayOfDate = data2.incomes.map(v => ({ [v.value]: v.date })).reduce((a, b) => Object.assign(a, b), {});
                        // console.log(arrayOfDate);

                        let html = `<div class="container container__headers"><h2 class="container--item">id</h2> <h2 class="container--item">company name</h2><h2 class="container--item">total income</h2><h2 class="container--item">city</h2><h2 class="container--item">average income</h2></div>`;
                        data.forEach(company => {
                            html += `
                        <div class="container">
                            <div class="companies--item">${company.id}</div><div class="companies--item">${company.name}</div>
                            <div class="companies--item">${sumTotalIncome}</div>
                            
                            <div class="companies--item">${company.city}</div>
                            <div class="companies--item">${incomeAverage}</div>
                        </div>
                        `;

                        });
                        document.getElementById('companies').innerHTML = html;

                    })

            });

    })
    .catch(error => {
        console.error('Nie działa link');
    })


