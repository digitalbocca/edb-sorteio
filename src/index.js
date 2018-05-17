'use strict'

/**
 * edb-sorteio
 *
 * @file index.js
 * @namespace src
 * @description Realiza o sorteio de um número inteiro, limitado ao valor passado por parâmetro.
 * @since v0.3.0
 *
 * @copyright (c)2018 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @version v1.0.0
 */

const sorteio = limite => Math.ceil(Math.random() * limite)

export default sorteio
