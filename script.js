// Variable is constant -> name in capitals + underscore
const API_KEY = 'hFUgzoqR8cRWMz6Y3ERX';

async function loadShareprices() {
    let url = 'https://data.nasdaq.com/api/v3/datasets/BITFINEX/LUNAF0USTF0?start_date=2022-05-22&end_date=2022-05-22&api_key=hFUgzoqR8cRWMz6Y3ERX';
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log('API answers;', responseAsJson['dataset']['data'][0]);
}