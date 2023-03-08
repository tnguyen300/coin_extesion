var btc = document.getElementById("bitcoin");
var lite = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");


const API_URL =
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum&vs_currencies=usd"

fetch(API_URL)
	.then(response => response.json())
	.then(response => {
		// For debugging
		console.log(response)
		btc.innerHTML = response.bitcoin.usd;
		lite.innerHTML = response.litecoin.usd;
		eth.innerHTML = response.ethereum.usd;
		
	});
