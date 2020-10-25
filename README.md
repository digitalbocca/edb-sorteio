<p align="center">
  <img src="https://estudiodigitalbocca.com.br/edb-logo.svg" width="200px">
  <p align="center">Ultima Atualização na v1.4.0</p>
  <h1 align="center">edb-sorteio</h1>
  <h4 align="center">
    Realiza o sorteio de um número inteiro limitado ao valor passado por parâmetro.
  </h4>
  <p align="center">
    <img src="https://badgen.net/badge/version/v1.4.0/orange">
    <a href="https://codeclimate.com/github/digitalbocca/edb-sorteio/maintainability">
      <img src="https://api.codeclimate.com/v1/badges/bfe807ff929ff634540c/maintainability">
    </a>
    <a href="https://standardjs.com">
      <img src="https://badgen.net/badge/code%20style/standard/yellow">
    </a>
    <a href="https://www.npmjs.com/package/edb-sorteio">
      <img src="https://badgen.net/npm/v/edb-sorteio">
    </a>
    <a href="https://www.npmjs.com/package/edb-sorteio">
      <img src="https://badgen.net/npm/license/edb-sorteio">
    </a>
    <a href="https://www.npmjs.com/package/edb-sorteio">
      <img src="https://badgen.net/npm/dt/edb-sorteio">
    </a>
    <a href="https://github.com/digitalbocca/edb-sorteio">
      <img src="https://badgen.net/github/tag/digitalbocca/edb-sorteio">
    </a>
    <a href="https://www.npmjs.com/package/edb-sorteio">
      <img src="https://badgen.net/david/dep/digitalbocca/edb-sorteio">
    </a>
    <a href="https://www.npmjs.com/package/edb-sorteio">
      <img src="https://badgen.net/david/dev/digitalbocca/edb-sorteio">
    </a>
    <a href="https://www.npmjs.com/package/edb-sorteio">
      <img src="https://badgen.net/packagephobia/install/edb-sorteio">
    </a>
    <a href="https://www.npmjs.com/package/edb-sorteio">
      <img src="https://badgen.net/packagephobia/publish/edb-sorteio">
    </a>
    <a href="https://www.npmjs.com/package/edb-sorteio">
      <img src="https://badgen.net/bundlephobia/min/edb-sorteio">
    </a>
    <a href="https://www.npmjs.com/package/edb-sorteio">
      <img src="https://badgen.net/bundlephobia/minzip/edb-sorteio">
    </a>
  </p>
  <p align="center">
    <a href="https://github.com/standard/standard">
      <img src="https://cdn.rawgit.com/standard/standard/master/badge.svg">
    </a>
  </p>
  <p align="center">(c)2020 - Estúdio Digital Bocca</p>
</p>

---

# edb-sorteio - README

---

## EXEMPLO DE USO

- Adicione como uma dependência do seu projeto.

```bash
npm install --save edb-sorteio
```

### IMPORTANDO COM O COMPORTAMENTO PADRÃO

> ATENÇÃO: Este é o comportamento padrão, que sorteia a partir do 1 até o número escolhido. Para sortear a partir de zero até antes do número escolhido você deve acompanhar o próximo tipo de importação mais abaixo.

- Importe no componente que fará uso:

```javascript
import sorteio from 'edb-sorteio'
```

- Passe o limite como parâmetro:

```javascript
// Sorteia um número até 100
let numeroSorteado = sorteio(100)
```

### IMPORTAÇÃO SOB DEMANDA

> ATENÇÃO: A função emUm(limite) reflete o comportamento padrão, realizando um sorteio que inicia em 1 e vai até o limite escolhido. Esta função é apenas uma cópia do comportamento padrão.
> ATENÇÃO: A função emZero(limite) inicia em zero e vai até antes do número limite. Esta função é usada principalmente para sortear indices de array, pois com o comportamento padrão você precisa subtrair 1 do resultado para usar como índice do array.
> EXEMPLO: array\[emZero(array.lenght)\]

- Importe no componente que fará uso:

```javascript
import { emUm, emZero } from 'edb-sorteio'
```

- Passe o limite como parâmetro:

```javascript
// Pode sortear o Zero
const iniciaEmZero = emZero(1000)

// Comportamento Padrão (Não sorteia o Zero)
const iniciaEmUm = emUm(1000)
```

## DOCUMENTAÇÃO

[https://digitalbocca.github.io/edb-sorteio/](https://digitalbocca.github.io/edb-sorteio/)

## REGISTRO DE ALTERAÇÕES

Veja no arquivo [CHANGELOG](CHANGELOG.md)

## LICENÇA

MIT

> (c)2018-2020 Estúdio Digital Bocca
