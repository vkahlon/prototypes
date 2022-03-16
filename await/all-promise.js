Promise.all([
  fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=daily'),
  fetch('https://api.coingecko.com/api/v3/coins/chainlink/market_chart?vs_currency=usd&days=1&interval=daily')
]).then(responses => {
  return Promise.all(responses.map(function (response) {
    return response.json();
  }));
}).then(data => {
  // where I would set the state
  console.log(data[0])
  console.log(data[1])
}).catch(error => {
  console.log(error);
});

let bitcoin = fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=daily').then(resp => resp.json());
let chainlink = fetch('https://api.coingecko.com/api/v3/coins/chainlink/market_chart?vs_currency=usd&days=1&interval=daily').then(resp => resp.json());
let sushi = fetch('https://api.coingecko.com/api/v3/coins/sushi/market_chart?vs_currency=usd&days=1&interval=daily').then(resp => resp.json());
const retrieveALL = async function calling() {
  let results =  await Promise.all([bitcoin, chainlink, sushi])
  console.log(results)
  // I set state here for userInfo.jsx
};
retrieveALL();
