const { permutation, sortNumbers } = require('./utils.js');

const cost = [
  [15,2,3],
  [3,2,1],
  [11,3,1]
];

function minCost(cost) {
  let prices = [];
  let materialIndex = [0,1,2];

  let variations = permutation(materialIndex);

  variations.forEach(pattern => {
    let total = 0;

    materialIndex.forEach(n => {
      if(cost[n]) total += cost[n][pattern[n]]
    })

    prices.push(total);
  });


  prices = sortNumbers(prices);

  console.log('all price options:', prices);
  console.log('minimum price:', prices[0]);

  return prices[0];

}


minCost(cost);