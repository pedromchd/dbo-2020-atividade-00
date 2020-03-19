// jewels_and_stones.js // 0.3 pts
console.log('jewels_and_stones.js');

// Todas as bibliotecas e recursos do JS são permitidos.

const numJewelsInStones = function(jewels, stones) {
  let jis = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.indexOf(stones[i]) !== -1) {
      jis++;
    }
  }
  return jis;
};

// Casos de Teste:
console.log(numJewelsInStones("aA", "aAAbbbb") === 3);
console.log(numJewelsInStones("z", "ZZ") === 0);
console.log(numJewelsInStones("aYfH", "qwyuiasQHWASYDaoiusdaSD") === 5);
console.log(numJewelsInStones("a", "") === 0);
console.log(numJewelsInStones("", "WffdcgWEg") === 0);
