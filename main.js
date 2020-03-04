// document.getElementById('button1').addEventListener('click', fun);
// document.getElementById('button2').addEventListener('click', showIncomes);


// function showDatas() {
//     fetch('https://recruitment.hal.skygate.io/companies')
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             let html = '';
//             data.forEach(company => {
//                 html += `
//                 <div class="result--item">
//                     <div class="companies--item">${company.id}</div>
//                     <div class="companies--item">${company.name}</div>
//                     <div class="companies--item">${company.city}</div>
//                 </div>
//                 `;

//             });
//             document.getElementById('companies').innerHTML = html;
//         })
//         .catch(error => {
//             console.log(error);
//         })
// };


let allData = [];
let comapanyId = [];
let comapanyName = [];
let companyCity = [];
fetch('https://recruitment.hal.skygate.io/companies')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.length);
        allData = data;
        // companyId = data + id;
        // companyName = data.name;
        // companyCity = data.city;
        // console.log(companyId)

        let display =
            data.forEach((item, index) => {
                console.log(`Nr.${index}  ID firmy: ${item.id}, NAZWA FIRMY: ${item.name} PROWADZONA W:  ${item.city} `);
                fetch("https://recruitment.hal.skygate.io/incomes/" + item.id)
                    .then(response => {
                        return response.json();
                    })
                    .then(data2 => {
                        // console.log(data2);
                        const arrayOfValues = data2.incomes.map(v => v.value);
                        const totalIncome = arrayOfValues.reduce((a, b) => Number(a) + Number(b));
                        sumTotalIncome = totalIncome.toFixed(2);
                        console.log(sumTotalIncome);

                        let html = '';
                        data.forEach(company => {
                            html += `
                <div class="result--item">
                    <div class="companies--item">${company.id}</div>
                    <div class="companies--item">${totalIncome}</div>
                    <div class="companies--item">${company.name}</div>
                    <div class="companies--item">${company.city}</div>
                </div>
                `;

                        });
                        document.getElementById('companies').innerHTML = html;
                        // let sortedIncome = sumTotalIncome.min();
                        // console.log(sortedIncome)


                        // for (let i = 0; i < data2.incomes.length; i++) {
                        //     suma = suma + data2.incomes[i];
                        // }
                        // console.log('Suma elementów w tablicy wynosi: ' + suma);
                    })
                // let sumIncomes = function

                // let html = '';
                // html += `
                //                     <div class="result--item">
                //                         <div class="companies--item">${item.id}</div>
                //                         <div class="companies--item">${item.name}</div>
                //                         <div class="companies--item">${item.city}</div>
                //                     </div>
                //  `;
                //             document.getElementById('companies').innerHTML = html;
            });


    })
    .catch(error => {
        console.error('Nie działa link');
    })


// function showIncomes() {
//     fetch('https://recruitment.hal.skygate.io/incomes/30&34&234')
//         .then(response => {
//             return response.text();
//         })
//         .then(data => {
//             console.log(data);
//             let html = '';
//             data.forEach(income => {
//                 html += `
//                 <li>${income}</li>
//                 <li>${income.value}</li>
//                 <li>${income.date}</li>
//                 `;

//             });
//             document.getElementById('incomes').innerHTML = html;
//         })
//         .catch(error => {
//             console.log(error);
//         })}