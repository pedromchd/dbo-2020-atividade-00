// pad.js // 0.6 pts
console.log('pad.js');

// não pode usar as bibliotecas do JS,
// exceto operadores e funções String.charAt, String[index], String.concat e String.length

const pad = function(str1, str2, length) {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < str2.length && str1.length < length; j++) {
      str1 += str2[j];
    }
  }
  return str1;
};

// 0.3 pts // easy
let txt = 'palavra';
let padded = pad(txt, '*', 10);
console.log(txt, padded); // palavra palavra***
console.log(padded === 'palavra***');
console.log(pad('ifrs', '/', 12) === 'ifrs////////');
console.log(pad('a', 'h', 5) === 'ahhhh');
console.log(pad('curso', 'x', 5) === 'curso');
console.log(pad('curso', 'x', 2) === 'curso');

// 0.3 pts // normal
console.log(pad('palavra', '#*', 11) === 'palavra#*#*');
console.log(pad('hard', '/~', 15) === 'hard/~/~/~/~/~/');
console.log(pad('logica', 'programacao', 10) === 'logicaprog');
console.log(pad('', 'hua', 11) === 'huahuahuahu');

// NÃO OBRIGATÓRIO: VALE EXTRA
console.log(pad('🙄', '🤩', 4) === '🙄🤩🤩🤩');
console.log(pad('🤬🤬🤬🤬🤬', '', 20) === '🤬🤬🤬🤬🤬');
