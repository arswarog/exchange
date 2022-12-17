const sleep = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

async function handler(event, context) {
  const action = event.queryStringParameters.action;

  const timeout = Math.ceil(Math.random() * 1000);

  await sleep(timeout);

  let response = null;

  try {
    if (action === "buy") {
      response = buyCurrency(event.queryStringParameters);
    } else if (action === "sell") {
      response = sellCurrency(event.queryStringParameters);
    } else if (action === "getCurrencies") {
      response = getCurrencies();
    } else {
      throw new Error("Please use correct action: buy, sell or getCurrencies");
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain"
      },
      isBase64Encoded: false,
      body: JSON.stringify(response, null, 2)
    };
  } catch (e) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "text/plain"
      },
      isBase64Encoded: false,
      body: {
        message: e.message
      }
    };
  }
};

const knownCurrencies = ["USDT", "BTC", "ETH"];

const rates = [
  [knownCurrencies[0], knownCurrencies[1], 1 / 18000],
  [knownCurrencies[1], knownCurrencies[0], 17000],
  [knownCurrencies[0], knownCurrencies[2], 1 / 250],
  [knownCurrencies[2], knownCurrencies[0], 240],
  [knownCurrencies[2], knownCurrencies[1], 1 / 70],
  [knownCurrencies[1], knownCurrencies[2], 66]
];

function getCurrencies() {
  return knownCurrencies;
}

function getRate(from, to) {
  const rate = rates.find(([a, b]) => {
    return a === from && b === to;
  });

  if (rate) {
    return rate[2];
  }

  throw new Error(`Cannot found rate for pair ${from} and ${to}`);
}

function applyOptions(rate, premium, fast) {
  rate *= 1.01 - Math.random() / 200;

  if (premium === 1 || premium === "1" || premium === "true") {
    rate *= 1.05;
  }

  if (fast === 1 || fast === "1" || fast === "true") {
    rate *= 0.9;
  }

  return rate;
}

function buyCurrency({ sourceCurrency, targetCurrency, targetAmount, premium, fast }) {
  targetAmount = +targetAmount;
  const rate = getRate(sourceCurrency, targetCurrency);

  return targetAmount / applyOptions(rate, premium, fast);
}

function sellCurrency({ sourceCurrency, targetCurrency, sourceAmount, premium, fast }) {
  sourceAmount = +sourceAmount;
  const rate = getRate(sourceCurrency, targetCurrency);

  return sourceAmount * applyOptions(rate, premium, fast);
}

Object.assign(exports, {
  handler,
  getCurrencies,
  buyCurrency,
  sellCurrency
});
