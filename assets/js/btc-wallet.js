// Function to fetch wallet balance in Bitcoin using Blockchain.com's API
async function getWalletBalance(walletAddress) {
    const response = await fetch(`https://blockchain.info/q/addressbalance/${walletAddress}?confirmations=6`);
    const balanceInSatoshi = await response.text();
    // Convert Satoshi to Bitcoin
    return parseFloat(balanceInSatoshi) / 1e8;
}

// Function to fetch BTC to USD conversion rate using CoinGecko API
async function getBTCtoUSDConversionRate() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    return data.bitcoin.usd;
}

async function displayWalletBalanceInUSD(walletAddress) {
    try {
        const walletBalanceBTC = await getWalletBalance(walletAddress);
        const conversionRate = await getBTCtoUSDConversionRate();
        const walletBalanceUSD = walletBalanceBTC * conversionRate;

        document.getElementById('walletBalanceInUSD').innerText = 
            `Culture 404 Wallet: $${walletBalanceUSD.toFixed(2)}`;
    } catch (error) {
        document.getElementById('walletBalanceInUSD').innerText = 'Failed to load wallet balance in USD.';
        console.error('Error fetching wallet balance or conversion rate:', error);
    }
}

const walletAddress = 'bc1qfs9z9az78w2uwfd8dttk69stdecdea2lwgvk2s';
displayWalletBalanceInUSD(walletAddress);