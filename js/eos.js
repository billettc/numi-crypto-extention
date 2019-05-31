log("Crypto price!");
log(value.eosusd);

numi.addUnit({
    "id": "EOS",
    "phrases": "EOS",
    "format": "EOS",
});

numi.addUnit({
    "id": "USDT",
    "phrases": "USDT",
    "format": "USDT",
    "baseUnitId": "EOS",
    "ratio" : 1.000/value.eosusdt ,
});
numi.addUnit({
    "id": "USD",
    "phrases": "USD",
    "format": "USD",
    "baseUnitId": "USDT",
    "ratio" : 1,
});

numi.addUnit({
    "id": "USDC",
    "phrases": "USDC",
    "format": "USDC",
    "baseUnitId": "EOS",
    "ratio" : 1.000/value.eosusdc ,
});

numi.addUnit({
    "id": "USDC",
    "phrases": "USDC",
    "format": "USDC",
    "baseUnitId": "ETH",
    "ratio" : 1.000/value.ethusdc ,
});
numi.addUnit({
    "id": "USDT",
    "phrases": "USDT",
    "format": "USDT",
    "baseUnitId": "ETH",
    "ratio" : 1.000/value.ethusdt ,
});

numi.addUnit({
    "id": "USDC",
    "phrases": "USDC",
    "format": "USDC",
    "baseUnitId": "BTC",
    "ratio" : 1.000/value.btcusdc ,
});
numi.addUnit({
    "id": "USDT",
    "phrases": "USDT",
    "format": "USDT",
    "baseUnitId": "BTC",
    "ratio" : 1.000/value.btcusdt ,
});


numi.addUnit({
    "id": "USD",
    "phrases": "USD",
    "format": "USD",
    "baseUnitId": "USDC",
    "ratio" : 1,
});


numi.addUnit({
    "id": "ETH",
    "phrases": "ETH",
    "format": "ETH",
    "baseUnitId": "EOS",
    "ratio" : 1.000/value.eoseth ,
});

numi.addUnit({
    "id": "BTC",
    "phrases": "BTC",
    "format": "BTC",
    "baseUnitId": "EOS",
    "ratio" : 1.000/value.eosbtc ,
});
