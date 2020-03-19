// math.js // 0.6 pts
console.log('math.js');

// não pode usar as bibliotecas do JS, nenhuma função (incluindo as parse* e de Math)
// apenas os operadores + e - são permitidos (não *, /, % ou **)

function abs(num) {
  if (num < 0) {
    return -num;
  } else {
    return num;
  }
}

function signal(num1, num2, result) {
  let aux = result;
  if (num1 < 0) {
    aux = -aux;
  }
  if (num2 < 0) {
    aux = -aux;
  }
  return aux;
}

const mult = function(fator1, fator2) {
  let produto = 0;
  for (let i = 0; i < abs(fator1); i++) {
    produto += abs(fator2);
  }
  return signal(fator1, fator2, produto);
};

const div = function(dividendo, divisor) {
  let quociente = 0;
  for (i = 0; i <= abs(dividendo); i += abs(divisor)) {
    quociente++;
    if (divisor === 0) {
      quociente = Infinity;
      break;
    }
  }
  return signal(dividendo, divisor, --quociente);
};

// 0.3 pts // easy
console.log(mult(2, 3) === 6);
console.log(mult(8, 10) === 80);
console.log(mult(-9, 3) === -27);
console.log(mult(-9, -3) === 27);
console.log(mult(9, -3) === -27);
console.log(mult(0, -3) === 0);
console.log(mult(10, 0) === 0);

// 0.3 pts // normal
console.log(div(12, 2) === 6);
console.log(div(12, 3) === 4);
console.log(div(12, 4) === 3);
console.log(div(12, 5) === 2);
console.log(div(12, 6) === 2);
console.log(div(12, 7) === 1);
console.log(div(12, 11) === 1);
console.log(div(12, 12) === 1);
console.log(div(12, 13) === 0);
console.log(div(0, 30) === 0);
console.log(div(30, 0) === +Infinity);
console.log(div(-30, 0) === -Infinity);
