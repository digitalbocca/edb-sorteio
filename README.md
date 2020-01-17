# Estúdio Digital Bocca

## edb-sorteio

### v1.2.0

---

> Realiza o sorteio de um número inteiro, limitado ao valor passado por parâmetro.

[![Maintainability](https://api.codeclimate.com/v1/badges/bfe807ff929ff634540c/maintainability)](https://codeclimate.com/github/digitalbocca/edb-sorteio/maintainability)
[![EDB](https://badgen.net/badge/produto/EDB/f19b2c)](https://estudiodigitalbocca.com.br)
[![JavaScript Style Guide](https://badgen.net/badge/code%20style/standard/yellow)](https://standardjs.com)
[![NPMv](https://badgen.net/npm/v/edb-sorteio)](https://www.npmjs.com/package/edb-sorteio)
[![NPMlicense](https://badgen.net/npm/license/edb-sorteio)](https://www.npmjs.com/package/edb-sorteio)
[![NPMdownloads](https://badgen.net/npm/dt/edb-sorteio)](https://www.npmjs.com/package/edb-sorteio)
[![GHv](https://badgen.net/github/tag/digitalbocca/edb-sorteio)](https://github.com/digitalbocca/edb-sorteio)
[![DVdep](https://badgen.net/david/dep/digitalbocca/edb-sorteio)](https://www.npmjs.com/package/edb-sorteio)
[![DVdev](https://badgen.net/david/dev/digitalbocca/edb-sorteio)](https://www.npmjs.com/package/edb-sorteio)
[![PPi](https://badgen.net/packagephobia/install/edb-sorteio)](https://www.npmjs.com/package/edb-sorteio)
[![PPp](https://badgen.net/packagephobia/publish/edb-sorteio)](https://www.npmjs.com/package/edb-sorteio)
[![BPp](https://badgen.net/bundlephobia/min/edb-sorteio)](https://www.npmjs.com/package/edb-sorteio)
[![BPp](https://badgen.net/bundlephobia/minzip/edb-sorteio)](https://www.npmjs.com/package/edb-sorteio)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

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

## CHANGELOG

Veja no arquivo CHANGELOG.md

## LICENÇA

MIT

> (c)2018-2020 Estúdio Digital Bocca
