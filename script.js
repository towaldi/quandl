// Variable is constant -> name in capitals + underscore
const API_KEY = 'hFUgzoqR8cRWMz6Y3ERX';

async function loadShareprices() {
    let url = `https://data.nasdaq.com/api/v3/datasets/BITFINEX/LUNAF0USTF0?start_date=${startDate}2022-05-22&end_date=${endDate}2022-05-22&api_key=${API_KEY}`;
    
    // Get yesterday
    let today = new Date();     // Actual date (all informations)
    today.setDate(new Date().getDate() - 1);    // Change day -> actual day - 1 day -> 7 to 6
    let startDate = today.toISOString().split('T')[0];  // ISO string = date -> split at T -> 2 arrays: [0] date, [1] time
    let endDate = today.toISOString().split('T')[0];    //
    
    let response = await fetch(url);
    let responseAsJson = await response.json();
    showAveragePriceToday(responseAsJson);
}

// Show average price of the stock
function showAveragePriceToday(responseAsJson) {
    let actualAveragePriceToday = responseAsJson['dataset']['data'][0][3];
    document.getElementById('bitcion-in-usd-today').innerHTML = actualAveragePriceToday;
}