# AVA#00: Functions and Testing

Prazo: 2020-03-22 Peso: 1.5 pts

_Permission granted to burn the midnight oil._

Classroom link <https://classroom.github.com/a/ssZ_8iUB> (clique nele para gerar seu repositório para envio)

## Regras & Restrições Gerais

- A _webapp_ deve _linkar_ os arquivos `.js` no `HTML`;
- Cada problema em um arquivo `.js`;
- Não pode declarar com `var` ou sem _palavra-chave_;
- As instruções devem terminar com `;`;
- Os Casos de Teste não podem ser alterados (se um erro no teste for encontrado, informe o professor);
- Outros casos de teste semelhantes, que testam a mesma funcionalidade, podem ser incluídos para a correção, evitando que algum algoritmo seja implementado como constante apenas para passar no teste e não para cumprir a funcionalidade.

## Pad 0.6 pts

Dada uma _string_ válida, implementar _pad_ (preencher) segundo as especificações a seguir.

```js
// pad.js // 0.6 pts
// não pode usar as bibliotecas do JS,
// exceto operadores e funções String.charAt, String[index], String.concat e String.length

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
```

## Math 0.6 pts

Implementar as operações de multiplicação e divisão como funções.

```js
// math.js // 0.6 pts
// não pode usar as bibliotecas do JS, nenhuma função (incluindo as parse* e de Math)
// apenas os operadores + e - são permitidos (não *, /, % ou **)

// 0.3 pts // easy
console.log(mult(2, 3) === 6);
console.log(mult(8, 10) === 80);
console.log(mult(-9, 3) === -27);
console.log(mult(-9, -3) === 27);
// CORRIGIDO DE
console.log(mult(9, -3) === 27);
// PARA
console.log(mult(9, -3) === -27);
// ------------
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
```

## Jewels and Stones 0.3

Extraído de LeetCode, ver original em <https://leetcode.com/problems/jewels-and-stones/>

You're given strings `J` representing the types of stones that are jewels, and `S` representing the stones you have.  Each character in `S` is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in `J` are guaranteed distinct, and all characters in `J` and `S` are letters. Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

**Example 1:**

```plain
  Input: J = "aA", S = "aAAbbbb"
  Output: 3
```

**Example 2:**

```plain
  Input: J = "z", S = "ZZ"
  Output: 0
```

**Note:**

- `S` and `J` will consist of letters and have length at most 50.
- The characters in `J` are distinct.

**Complemento meu para a disciplina:**

```js
// Casos de Teste:
// Todas as bibliotecas e recursos do JS são permitidos.
console.log(numJewelsInStones("aA", "aAAbbbb") === 3);
console.log(numJewelsInStones("z", "ZZ") === 0);
console.log(numJewelsInStones("aYfH", "qwyuiasQHWASYDaoiusdaSD") === 5);
console.log(numJewelsInStones("a", "") === 0);
console.log(numJewelsInStones("", "WffdcgWEg") === 0);
```

* * *

> You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.
>
> -- John Romero
